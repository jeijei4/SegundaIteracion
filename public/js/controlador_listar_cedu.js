'use strict';

const CardsCentros = document.querySelector('#cards_centros');
const FiltroCards = document.querySelector('#filtrar_cards');
const selectEtiquetas = document.querySelector('#select_etiquetas')
const tipoUsuario = localStorage.getItem('tipoUsuario');
const has = Object.prototype.hasOwnProperty;

const HtmlEstrellaAmarilla = '<i class="fas fa-star" style="color: rgb(255, 203, 49);"></i>';
const HtmlEstrellaGris = '<i class="far fa-star" style="color: rgb(50, 50, 50);"></i>';

const listaEtiquetas = listar_etiquetas();

let elContenedor = [];

let irAlPerfil = (idCEdu) => {
    localStorage.setItem('verPerfilCEdu', idCEdu);

    switch (tipoUsuario.toLowerCase()) {
        case 'superadmin':
            location.replace('./perfilCentroAdmin.html');
            break;
        case 'padrefamilia':
            location.replace('./perfilCentroPadre.html');
            break;
        default:
            console.error('El tipo de usuario no tiene página de redirección');
            break;
    }
};


let llenarSelectEtiquetas = () => {
    selectEtiquetas.innerHTML = '<option value="" selected="selected">Ninguno</option>';

    const cantEtiquetas = Object.keys(listaEtiquetas).length || listaEtiquetas.length;
    if (cantEtiquetas > 0) {

        let opcionGrupo = document.createElement('optgroup');
        opcionGrupo.label = 'Etiquetas:';
        let i = 0;
        for (i; i < cantEtiquetas; i++) {
            let opcionEtiqueta = document.createElement('option');
            opcionEtiqueta.text = listaEtiquetas[i]['nombre'];
            opcionEtiqueta.value = listaEtiquetas[i]['nombre'];
            opcionGrupo.appendChild(opcionEtiqueta);
        }
        selectEtiquetas.appendChild(opcionGrupo);

    }
};

let obtenerHtmlEstrellas = (pCantidad) => {
    let TOP = 5, i = 0, resultado = '', laCantidad = parseInt('' + pCantidad, 10);
    for (; i < TOP; ++i) {
        if (i < laCantidad) {
            resultado += HtmlEstrellaAmarilla;
        } else {
            resultado += HtmlEstrellaGris;
        }
    }
    return resultado;
};

let llenarContenido = () => {

    const laEtiqueta = selectEtiquetas.value;
    const cantEtiquetas = laEtiqueta.trim().length;

    const filtros = FiltroCards.value;
    const cantFiltros = filtros.trim().length;

    //Limpiamos antes de añadir los cards:
    CardsCentros.innerHTML = '';

    let encontroResultados = false;

    elContenedor.forEach(obj => {

        //Filtro por etiqueta:
        if (cantEtiquetas < 1 || combux.contiene(laEtiqueta, obj['etiquetas'])) {

            //Búsqueda por nombre del centro educativo:
            if (cantFiltros < 1 || combux.contiene(filtros, obj['nombre'])) {

                encontroResultados = true;

                let card = document.createElement('div');
                card.classList.add('contenedor_cards_principal');


                let contenedor_card = document.createElement('div');


                let centro_nombre = document.createElement('h1');
                centro_nombre.innerHTML = '<span>' + obj['nombre'] + '</span>';



                let contenedorListaDetallada = document.createElement('div');
                contenedorListaDetallada.style = 'box-sizing: border-box; display: block; overflow-x: auto; -webkit-overflow-scrolling: touch; -ms-overflow-style: -ms-autohiding-scrollbar; padding: 0 10px;';

                let listaDetallada = document.createElement('table');
                listaDetallada.style = 'border: 0px solid transparent;overflow-x: hidden;width: 100%;';
                const objListaDetallada = [
                    { "dt": "Teléfono:", "dd": obj['telefono'] },
                    { "dt": "Correo electrónico:", "dd": obj['correo'] },
                    { "dt": "Provincia:", "dd": obj['provincia'] },
                    { "dt": "Dirección:", "dd": obj['direccion'] },
                    { "dt": "Calificación MEP:", "dd": '<span class="plataformaEstrella">' + obtenerHtmlEstrellas(obj['calificacionMEP']) + '</span>' },
                    { "dt": "Calificación de los padres de familia:", "dd": '<span class="plataformaEstrella">' + obtenerHtmlEstrellas(obj['calificacionPadres']) + '</span>' }
                ];


                const cantListaDetallada = Object.keys(objListaDetallada).length;
                if (cantListaDetallada > 0) {
                    let elBody = document.createElement('tbody');
                    let key;
                    for (key in objListaDetallada) {
                        if (!has.call(objListaDetallada, key)) continue;
                        const obj2 = objListaDetallada[key];

                        let elTr = document.createElement('tr');
                        elTr.innerHTML = '<td style="text-align: right; font-weight:600;vertical-align: top;margin:auto;width:auto;"><p>' + obj2.dt + '</p></td>' +
                            '<td style="padding-left:15px;vertical-align: bottom;"><p>' + obj2.dd + '</p></td>';
                        elBody.appendChild(elTr);
                    }

                    listaDetallada.appendChild(elBody);
                }

                contenedorListaDetallada.appendChild(listaDetallada);


                let verMas = document.createElement('p');
                verMas.style = 'text-align: right; width: 100%; padding: 2px 15px;position: absolute;bottom: 0px;right: 0px;';
                let verMas_a = document.createElement('a');
                verMas_a.addEventListener('click', () => {
                    irAlPerfil(obj['_id']);
                }, false);
                verMas_a.innerHTML = 'Ver más...';
                verMas.appendChild(verMas_a);


                contenedor_card.appendChild(contenedorListaDetallada);
                contenedor_card.appendChild(verMas);

                card.appendChild(centro_nombre);
                card.appendChild(contenedor_card);
                CardsCentros.appendChild(card);
                //-----------------------------------------------------------------------------//


            }
        }
    });


    if (encontroResultados === false) {
        CardsCentros.innerHTML = '<a style="margin:0 auto; text-align:center;text-decoration: none;" href="javascript:void(0);"><h2 style="color: #cdcdcd;">¡No se encontraron resultados!</h2></a>';
    }
};

let cargarPagina = () => {

    CardsCentros.innerHTML = '<a style="margin:0 auto; text-align:center;text-decoration: none;" href="javascript:void(0);"><h2 style="color: #007bff;">Cargando...</h2></a>';

    listarCEdu((pSuccess, pMessage) => {

        if (pSuccess) {
            if ('object' == typeof pMessage) {

                FiltroCards.value = '';
                FiltroCards.addEventListener('keyup', llenarContenido);
                elContenedor = pMessage;
                llenarContenido();

            } else {
                CardsCentros.innerHTML = '';
                console.error(pMessage);
            }
        } else {
            CardsCentros.innerHTML = '<h4>' + pMessage + '</h4>';
            console.error(pMessage);
        }
    });
};


if (selectEtiquetas) {
    selectEtiquetas.addEventListener('change', llenarContenido);
}

window.onload = () => {
    cargarPagina();
    llenarSelectEtiquetas();
    if (FiltroCards) {
        FiltroCards.select();
        FiltroCards.focus();
    }
};

