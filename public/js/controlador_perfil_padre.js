'use strict';

const nombre_padre = document.querySelector('#nombre_completo_padre');
const correo_electronico_padre = document.querySelector('#correo_padre');
const telefono_padre = document.querySelector('#telefono_padre');
const identificacion_padre = document.querySelector('#identificacion_padre');
const provincia_padre = document.querySelector('#provincia_padre');
const canton_padre = document.querySelector('#canton_padre');
const distrito_padre = document.querySelector('#distrito_padre');
const edad_padre = document.querySelector('#edad_padre');

const btn_actualizar = document.querySelector('#btn_modificar_datos');

let id_padre = localStorage.getItem('idBuscarPadre');
let obtenerEdad = (pFecha) => {
    return Math.floor((new Date() - new Date(pFecha).getTime()) / 3.15576e+10);
};

let infoPadre = buscar_padre(id_padre);

if (infoPadre && Object.keys(infoPadre).length > 0) {

    let DOB = infoPadre['fechaNacimiento'].trim();

    let edad = obtenerEdad(DOB);
    nombre_padre.innerHTML = infoPadre['nombre'];
    correo_electronico_padre.innerHTML = infoPadre['correo'];
    telefono_padre.innerHTML = infoPadre['numCel'];
    identificacion_padre.innerHTML = infoPadre['numIdentificacion'];
    if(provincia_padre){
	provincia_padre.innerHTML = obtenerProvinciaPorID(parseInt(infoPadre['provincia'], 10));
	}
	if(canton_padre){
    canton_padre.innerHTML = obtenerCantonPorID(parseInt(infoPadre['canton'], 10));
	}
	if(distrito_padre){
    distrito_padre.innerHTML = obtenerDistritoPorID(parseInt(infoPadre['distrito'], 10));
	}
    edad_padre.innerHTML = edad;

} else {
    console.log(infoPadre[0]);
}

let modificar_padre =() => {
    window.location.assign('./actualizarDatosPadre.html');
};



let mostrar_boton = () =>{

    let tipoUsuario = localStorage.getItem('tipoUsuario');
    console.log(tipoUsuario);

    if (tipoUsuario == 'SuperAdmin') {
        
    } else {
		if(btn_actualizar){
        btn_actualizar.addEventListener('click', modificar_padre);
	}
    };

};


mostrar_boton();

