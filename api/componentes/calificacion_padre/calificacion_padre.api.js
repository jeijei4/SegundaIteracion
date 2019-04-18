'use strict';

const Tiza = require('chalk');
const ModelCalificacionPadre = require('./calificacion_padre.model');
const ModelBitacora = require('./../bitacora_transaccional/bitacora.model');
const ObtenerFecha = require('./../funciones_genericas/obtenerFecha');

/**
 * Función para insertar en la bitácora
 * @param  {String} pRealizadaPor Sólo acepta: 'Instalador'|'SuperAdmin'|'CentroEducativo'|'PadreFamilia'.
 * @param  {String} pAccion Descripción de lo que se va a registrar.
 * @return {Boolean}
 */
let insertarBitacora = async (pRealizadaPor, pAccion) => {
    try {
        let bitacora_nuevo = new ModelBitacora({
            realizadaPor: pRealizadaPor || '',
            accion: pAccion || '',
            fecha: ObtenerFecha.get() || ''
        });
        let guardarAccion = await bitacora_nuevo.save();
        console.log(`Se registró en la bitácora: ${pAccion}`);
    } catch (err) {
        console.log(`Error al registrar en la bitácora '${pAccion}':`);
        console.log(err.message);
        return false;
    }
    return true;
};

module.exports.asignar_calificacion_padre = async (objectReq, res) => {
    try {
        let registro = new ModelCalificacionPadre();
        registro.idPadre = objectReq.idPadre;
        registro.idCentro = objectReq.idCentro;
        registro.calificacion = objectReq.calificacion;
        registro.comentario = objectReq.comentario;
        registro.fecha = ObtenerFecha.get();

        let guardarRegistro = await registro.save();

        const log = await insertarBitacora('PadreFamilia', `El padre #${objectReq.idPadre} asignó la calificación '${objectReq.calificacion}' al centro educativo #${objectReq.idCentro}. Comentario: ${objectReq.comentario}`);

        res.json({
            success: true,
            message: 'La calificación se asignó correctamente'
        });

    } catch (err) {
        console.log(Tiza.bold.yellow.bgBlack('Error al asignar la calificación del padre:'));
        console.log(Tiza.bold.yellow.bgBlack(err.message));

        const log = await insertarBitacora('PadreFamilia', `Ocurrió un error cuando el padre #${objectReq.idPadre} asignaba la calificación '${objectReq.calificacion}' al centro educativo #${objectReq.idCentro}. Comentario: ${objectReq.comentario}`);

        res.json({
            success: false,
            message: 'Error al asignar la calificación'
        });
    }
};

module.exports.obtener_todas_calificaciones_padre = async (req, res) => {
    try {
        const resultado = await ModelCalificacionPadre.find().select('idPadre idCentro calificacion comentario fecha eliminado').sort({ fecha: 'asc' });
        const cantidadResutados = Object.keys(resultado).length;
        if (cantidadResutados > 0) {

            let listarResultado = [];
            const has = Object.prototype.hasOwnProperty;
            let key;
            for (key in resultado) {
                if (!has.call(resultado, key)) continue;

                //Si eliminado = true entonces manda vacio el campo de comentario.
                const elComentario = '';
                if (false === resultado[key]['eliminado']) {
                    elComentario = resultado[key]['comentario'] || '';
                }

                listarResultado.push({
                    'idCalificacion': resultado[key]['_id'] || 0,
                    'idPadre': resultado[key]['idPadre'] || 0,
                    'idCentro': resultado[key]['idCentro'] || 0,
                    'calificacion': resultado[key]['calificacion'] || 0,
                    'comentario': elComentario,
                    'fecha': resultado[key]['fecha'] || ''
                });
            }

            res.json({
                success: true,
                message: listarResultado
            });
        } else {
            res.json({
                success: false,
                message: 'No se encontraron calificaciones'
            });
        }
    } catch (err) {
        console.log(Tiza.bold.yellow.bgBlack('Error:'));
        console.log(Tiza.bold.yellow.bgBlack(err));
        res.json({
            success: false,
            message: 'Error al obtener los calificaciones'
        });
    }
};

module.exports.buscar_calificacion_padre_por_id = async (pId, res) => {
    try {
        const resultado = await ModelCalificacionPadre.findOne({ _id: pId }).select('idPadre idCentro calificacion comentario fecha eliminado');
        const cantidadResutados = Object.keys(resultado).length;
        if (cantidadResutados > 0) {

            let listarResultado = [];
            const has = Object.prototype.hasOwnProperty;
            let key;
            for (key in resultado) {
                if (!has.call(resultado, key)) continue;

                //Si eliminado = true entonces manda vacio el campo de comentario.
                const elComentario = '';
                if (false === resultado[key]['eliminado']) {
                    elComentario = resultado[key]['comentario'] || '';
                }

                listarResultado.push({
                    'idCalificacion': resultado[key]['_id'] || 0,
                    'idPadre': resultado[key]['idPadre'] || 0,
                    'idCentro': resultado[key]['idCentro'] || 0,
                    'calificacion': resultado[key]['calificacion'] || 0,
                    'comentario': elComentario,
                    'fecha': resultado[key]['fecha'] || ''
                });
            }

            res.json({
                success: true,
                message: listarResultado
            });
        } else {
            res.json({
                success: false,
                message: 'No se encontró la calificación'
            });
        }
    } catch (err) {
        console.log(Tiza.bold.yellow.bgBlack('Error:'));
        console.log(Tiza.bold.yellow.bgBlack(err));
        res.json({
            success: false,
            message: 'Error al obtener la calificación'
        });
    }
};

module.exports.buscar_calificaciones_padre_por_idCentro = async (pId, res) => {
    try {
        const resultado = await ModelCalificacionPadre.find({ idCentro: pId }).select('idPadre idCentro calificacion comentario fecha eliminado').sort({ fecha: 'asc' });
        const cantidadResutados = Object.keys(resultado).length;
        if (cantidadResutados > 0) {

            let listarResultado = [];
            const has = Object.prototype.hasOwnProperty;
            let key;
            for (key in resultado) {
                if (!has.call(resultado, key)) continue;

                //Si eliminado = true entonces manda vacio el campo de comentario.
                const elComentario = '';
                if (false === resultado[key]['eliminado']) {
                    elComentario = resultado[key]['comentario'] || '';
                }

                listarResultado.push({
                    'idCalificacion': resultado[key]['_id'] || 0,
                    'idPadre': resultado[key]['idPadre'] || 0,
                    'idCentro': resultado[key]['idCentro'] || 0,
                    'calificacion': resultado[key]['calificacion'] || 0,
                    'comentario': elComentario,
                    'fecha': resultado[key]['fecha'] || ''
                });
            }

            res.json({
                success: true,
                message: listarResultado
            });
        } else {
            res.json({
                success: false,
                message: 'No se encontró la calificación'
            });
        }
    } catch (err) {
        console.log(Tiza.bold.yellow.bgBlack('Error:'));
        console.log(Tiza.bold.yellow.bgBlack(err));
        res.json({
            success: false,
            message: 'Error al obtener la calificación'
        });
    }
};

module.exports.actualizar_comentario_calificacion_padre = (objectReq, res) => {
    ModelCalificacionPadre.findByIdAndUpdate(objectReq.id, { comentario: objectReq.comentario }, err => {
        if (err) {
            console.log(Tiza.bold.yellow.bgBlack(`No se pudo actualizar el comentario de la calificación: ${objectReq.id} :`));
            console.log(Tiza.bold.yellow.bgBlack(err));
            const log = insertarBitacora('PadreFamilia', `No se pudo actualizar el comentario de la calificación: ${objectReq.id}`);
            res.json({ success: false, message: 'No se pudo actualizar el comentario de la calificación' });
        } else {
            const log = insertarBitacora('PadreFamilia', `Se actualizó correctamente el comentario de la calificación: ${objectReq.id}`);
            res.json({ success: true, message: 'El comentario de la calificación se actualizó correctamente' });
        }
    });
};


module.exports.eliminar_comentario_calificacion_padre = (pId, res) => {
    ModelCalificacionPadre.findByIdAndUpdate(pId, { eliminado: true }, err => {
        if (err) {
            console.log(Tiza.bold.yellow.bgBlack(`No se pudo eliminar el comentario de la calificación: ${pId} :`));
            console.log(Tiza.bold.yellow.bgBlack(err));
            const log = insertarBitacora('PadreFamilia', `No se pudo eliminar el comentario de la calificación: ${pId}`);
            res.json({ success: false, message: 'No se pudo eliminar el comentario de la calificación' });
        } else {
            const log = insertarBitacora('PadreFamilia', `Se eliminó correctamente el comentario de la calificación: ${pId}`);
            res.json({ success: true, message: 'El comentario de la calificación se eliminó correctamente' });
        }
    });
};