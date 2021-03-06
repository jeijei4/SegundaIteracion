'use strict';
const model_servicio = require('./servicios.model');
const model_cedu = require('../centro_educativo/centroEducativo.model');
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
        console.log(`Se han registrado los datos en la bitácora: ${pAccion}`);
    } catch (err) {
        console.log(`Error al registrar en la bitácora '${pAccion}':`);
        console.log(err.message);
        return false;
    }
    return true;
};


//funcion para regsitrar servicios 
module.exports.registrar_servicio = (req, res) => {
    let servicio_nuevo = new model_servicio(
        {
            codigo: req.body.codigo,
            nombre: req.body.nombre,
            tipo: req.body.tipo,
            descripcion: req.body.descripcion
        }
    );

    servicio_nuevo.save(
        function (error) {
            if (error) {
                const log = insertarBitacora('CentroEducativo', `Error al registrar el servicio: ${req.body.nombre} | ${error}`);

                res.json(
                    {
                        succes: false,
                        msg: `No se pudo guardar el servicio, ocurrio el siguiente error ${error} `
                    }
                );
            } else {
                const log = insertarBitacora('CentroEducativo', `Se registró el servicio: ${req.body.nombre} - ${req.body.descripcion}`);

                res.json(
                    {
                        success: true,
                        msg: `Se ha registrado el servicio de forma correcta`
                    }
                );
            }
        }
    );
};

//función para obtener la lista de servicio por el id del centro 
module.exports.obtener_servicios_id = (req, res) => {

    model_servicio.find({ codigo: req.body.codigo }).then(
        function (coleccion) {
            if (coleccion) {

                const cant = Object.keys(coleccion).length;

                if (cant > 0) {
                    res.json(
                        {
                            success: true,
                            message: coleccion
                        }
                    )

                } else {
                    res.json(
                        {
                            success: false,
                            message: `No se encontraron servicios registrados`
                        }
                    )
                }
            } else {
                res.json(
                    {
                        success: false,
                        message: `No se encontraron servicios registrados`
                    }
                )
            }

        }

    )
};

//funcion para obtner el nombre del centro 
module.exports.obtener_nombre_centro_id = (req, res) => {

    model_servicio.find({ codigo: req.body.codigo }).then(
        function (coleccion) {
            const cant = Object.keys(coleccion).length;
            if (cant > 0) {
                model_cedu.findOne({ _id: coleccion[0].codigo }).then(
                    (centro) => {

                        res.json(
                            {
                                succes: true,
                                nombre_centro: centro.nombre
                            }
                        )
                    }
                )

            } else {
                res.json(
                    {
                        succes: false,
                        centro: `No se encontró el nombre del centro educativo`
                    }
                )
            }
        }
    )
};

//funcion para modificar el articulo
module.exports.modificar_servicios = function(req, res){
    
    model_servicio.findOneAndUpdate(
        { _id : req.body.id_servicio},
    
        {
            $set:
            {
                nombre : req.body.nombre,
                descripcion: req.body.descripcion
                
            }

        },
        function(error){
            if (error) {
                res.json(
                    {
                        success : false,
                        msg : `No se pudo modificar el servicio, ocurrió el siguiente error ${error}`
                    }
                )
            } else {
                res.json(
                    {
                        success : true,
                        msg : `Se modificó el servicio con éxito `
                    }
                )
            }
        }
    );
};

//para eliminar servicios
module.exports.eliminar_servicio = function(req, res){
    
    model_servicio.findByIdAndRemove(req.body.codigo,

        function(error){
            if(error){
                res.json({success: false ,msg: 'No se pudo eliminar el servicio'});
            }else{
                res.json({success: true ,msg: 'el servicio se eliminó con éxito'}); 
            }
        }
    )
};