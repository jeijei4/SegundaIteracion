'use strict';


let get_obtenerPerfil = (pId)=>{
    if ('undefined' == typeof pId || null === pId) {
        throw new Error('Error al obtener el perfil: El identificador no puede estar vacio');
    }
  let perfil = {};
  let request = $.ajax({
    url: "http://localhost:4000/api/obtener_centro_por_id/" + pId,
    method: 'GET',
    contentType: "application/x-www-form-urlencoded; charset=utf-8",
    async: false
  });

  request.done(function (res) {
    if (res.success) {
        perfil = res.message;
    }else{
		console.error(res.message);
	}
  });

  request.fail(function (jqXHR, textStatus) {
    console.error('Error al buscar el centro educativo');
  });
  return perfil;
}; 


//Marlon. Agrego el servicio para calificar el mep. Esta funcionalidad lista las calificaciones

let listar_calificacion_mep = (pId) => {
  let listar_calificaciones = [];
  let request = $.ajax({
    url: "http://localhost:4000/api/listar_calificacion_mep/" + pId,
    method: 'GET',
    contentType: "application/x-www-form-urlencoded; charset=utf-8",
    async: false
  });

  request.done(function (res) {
    if (res.success) {
      listar_calificaciones = res.message;
    } else {
      listar_calificaciones[0] = res.message;
    }
  });

  request.fail(function (jqXHR, textStatus) {
    console.error('Error al buscar el padre');
  });
  return listar_calificaciones;
};

