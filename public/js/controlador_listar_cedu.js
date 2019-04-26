'use strict';

const CardsCentros = document.querySelector('#cards_centros');
const FiltroCards = document.querySelector('#filtrar_cards');
const selectEtiquetas = document.querySelector('#select_etiquetas')
const tipoUsuario = localStorage.getItem('tipoUsuario');

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

//Agregado por Marlon. 4/22 - Modificado por Jeison 4/23
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

    elContenedor.forEach(obj => {

        //Filtro por etiqueta:
        if (cantEtiquetas < 1 || combux.contiene(laEtiqueta, obj['etiquetas'])) {

            //Búsqueda por nombre del centro educativo:
            if (cantFiltros < 1 || combux.contiene(filtros, obj['nombre'])) {

                let card = document.createElement('div');
                card.classList.add('contenedor_cards_principal');

                let div_card = document.createElement('div');
                div_card.classList.add('contenedor_cards');

                let div_dato = document.createElement('div');
                div_dato.classList.add('contenedor_dato');

                let centro_nombre = document.createElement('h1');
                centro_nombre.innerHTML = obj['nombre'];


                let telefono = document.createElement('p');
                telefono.innerHTML = '<strong>Teléfono:</strong> ' + obj['telefono'];

                let correo = document.createElement('p');
                correo.innerHTML = '<strong>Correo:</strong> '+ obj['correo'];

                let provincia = document.createElement('p');
                provincia.innerHTML = '<strong>Provincia:</strong> ' + obj['provincia'];

                let direccion = document.createElement('p');
                direccion.innerHTML = '<strong>Dirección:</strong> ' + obj['direccion'];

                let calificacionMEP = document.createElement('p');

                calificacionMEP.innerHTML = '<strong class="Calificacion ">Calificación MEP: </strong>' + '<p class="plataformaEstrella">' + obtenerHtmlEstrellas(obj['calificacionMEP']) + '</p>';

                let calificacionPadres = document.createElement('p');

                calificacionPadres.innerHTML = '<strong class="Calificacion ">Calificación de los padres de familia: </strong>' + '<p class="plataformaEstrella">' + obtenerHtmlEstrellas(obj['calificacionPadres']) + '</p>';


                let div_button = document.createElement('div');
                div_button.classList.add('contenedor_boton');

                let verMas = document.createElement('button');
                verMas.textContent = 'ver más';
             
                
                verMas.addEventListener('click', () => {
                    irAlPerfil(obj['_id']);
                }, false);
             

                
                card.appendChild(centro_nombre);
                card.appendChild(div_dato);
               
               
                div_button.appendChild(verMas);
                div_dato.appendChild(telefono);
                div_dato.appendChild(correo);
                div_dato.appendChild(provincia);
                div_dato.appendChild(direccion);

                div_dato.appendChild(calificacionMEP);
                div_dato.appendChild(calificacionPadres);
                div_dato.appendChild(verMas);

                card.appendChild(div_card);
                
                CardsCentros.appendChild(card);

            }
        }
    });
};

let cargarCEdu = () => {

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
    cargarCEdu();
    llenarSelectEtiquetas();

};

