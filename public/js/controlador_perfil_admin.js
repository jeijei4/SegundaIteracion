'use strict';

const CardsCentros = document.querySelector('#cards_centros');
const FiltroCards = document.querySelector('#filtrar_cards');

let elContenedor = [];

let irAlPerfil = (idCEdu) => {
    localStorage.setItem('verPerfilCEdu', idCEdu);

    const tipoUsuario = localStorage.getItem('tipoUsuario');
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


let llenarContenido = () => {

    const filtros = FiltroCards.value;
    const cantFiltros = filtros.trim().length;

    //Limpiamos antes de añadir los cards:
    CardsCentros.innerHTML = '';

    elContenedor.forEach(obj => {

        if (cantFiltros < 1 || combux.contiene(filtros, obj['nombre'])) {

            let card = document.createElement('div');

            let centro_nombre = document.createElement('h1');
            centro_nombre.innerHTML = '<strong class="descripcion">Nombre: </strong>' + obj['nombre'];

            let telefono = document.createElement('p');
            telefono.innerHTML = '<strong class="descripcion">Telefono: </strong>' + obj['telefono'];

            let correo = document.createElement('p');
            correo.innerHTML = '<strong class="descripcion">Correo: </strong>'+ obj['correo'];

            let provincia = document.createElement('span');
            provincia.innerHTML = '<strong class="descripcion">Provincia: </strong>' + obj['provincia'];

            let direccion = document.createElement('span');
            direccion.innerHTML = '<strong class="descripcion">Dirección: </strong>'+ obj['direccion'];

            let fechaSolicitud = document.createElement('span');

            fechaSolicitud.innerHTML = 'Fecha de solicitud: ' + obj['solicitudFechaCorta'];


            // Obtenemos la cantidad de "días hábiles" que lleva pendiente de aprobación.
            let diasSolicitud = document.createElement('p');

            if (obj['solicitudDiasHabiles'] > 3) {
                diasSolicitud.innerHTML = 'Días hábiles pendientes: <span style="color:#ED4C67;">' + obj['solicitudDiasHabiles'] + '</span>';
            } else {
                diasSolicitud.innerHTML = 'Días pendientes: ' + obj['solicitudDiasHabiles'];
            }

            let verMas = document.createElement('a');
            verMas.addEventListener('click', () => {
                irAlPerfil(obj['_id']);
            }, false);
            verMas.innerHTML = '<i class="fas fa-id-card"></i>';

            card.appendChild(centro_nombre);
            card.appendChild(telefono);
            card.appendChild(correo);
            card.appendChild(provincia);
            card.appendChild(direccion);
            card.appendChild(fechaSolicitud);
            card.appendChild(diasSolicitud);
            card.appendChild(verMas);

            CardsCentros.appendChild(card);

        };
    });
};

let cargarCEdu = () => {
    listarCEdu_sin_aprobar((pSuccess, pMessage) => {
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

window.onload = () => {
    cargarCEdu();
};

