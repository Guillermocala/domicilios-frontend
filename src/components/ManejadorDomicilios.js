import React, { useState, useEffect } from "react";

import TablaDomicilios from "./TablaDomicilios";
import DomiciliosServices from "../services/DomiciliosServices";
import AgregarDomicilio from "./AgregarDomicilio";

const ManejadorDomicilios = () => {
    const estadoInicialListaDomicilios = [];
    const [estadoListaDomicilios, setEstadoListaDomicilios] = useState(estadoInicialListaDomicilios);

    const esdatoInicialFormulario = {
        id: null,
        nombreSolicitante: "",
        dirSolicitante: "",
        celSolicitante: "",
        horaSolicitante: "",
        nombreDestinatario: "",
        dirDestinatario: "",
        celDestinatario: "",
        horaDestinatario: "",
        descripcionPaquete: "",
        mensajero: null,
        estado: true
    };

    const [domicilioEditar, setDomicilioEditar] = useState(esdatoInicialFormulario);

    useEffect(()=> {
        recuperaDomicilios();
    }, []);
    const recuperaDomicilios = () => {
        DomiciliosServices.getAll()
        .then(response => {
            setEstadoListaDomicilios(response.data);
            console.log(response.data);
        })
        .catch(e => {
            console.log(e);
        });
    }

    const agregarDomicilio = (domicilio) => {
        DomiciliosServices.create(domicilio)
        .then(response => {
            const nuevoDomicilio = {
                id: response.data.id,
                nombreSolicitante: response.data.nombreSolicitante,
                dirSolicitante: response.data.dirSolicitante,
                celSolicitante: response.data.celSolicitante,
                horaSolicitante: response.data.horaSolicitante,
                nombreDestinatario: response.data.nombreDestinatario,
                dirDestinatario: response.data.dirDestinatario,
                celDestinatario: response.data.celDestinatario,
                horaDestinatario: "",
                descripcionPaquete: response.data.descripcionPaquete,
                mensajero: response.data.mensajero,
                estado: true
            };
            setEstadoListaDomicilios([...estadoInicialListaDomicilios, nuevoDomicilio]);
            console.log(response.data);
        })
        .catch(e => {
            console.log(e);
        });
    };

    const editarDomicilio = (domicilio) => {
        setDomicilioEditar({
            id: domicilio.id,
            nombreSolicitante: domicilio.nombreSolicitante,
            dirSolicitante: domicilio.dirSolicitante,
            celSolicitante: domicilio.celSolicitante,
            horaSolicitante: domicilio.horaSolicitante,
            nombreDestinatario: domicilio.nombreDestinatario,
            dirDestinatario: domicilio.dirDestinatario,
            celDestinatario: domicilio.celDestinatario,
            descripcionPaquete: domicilio.descripcionPaquete,
            mensajero: domicilio.mensajero
        });
    };

    const eliminarDomicilio = (id) => {
        DomiciliosServices.remove(id)
        .then(response => {
            if(response.status === 204) {
                const domiciliosSinEliminado = estadoListaDomicilios.filter(
                    (domicilio) => domicilio.id !== id
                );
                setEstadoListaDomicilios(domiciliosSinEliminado);
            }
            console.log(response.data);
        })
        .catch(e => {
            console.log(e);
        });
    };


    return(
        <div>
            <div>
                <h2>Domicilios solicitados</h2>
                <TablaDomicilios
                    domicilios={estadoListaDomicilios}
                    //detalles={}
                    editar={editarDomicilio}
                    //cerrar={}
                    eliminar={eliminarDomicilio}
                />
            </div>
            <div>
                <h2>Crear domicilio</h2>
                <AgregarDomicilio 
                    agregar={agregarDomicilio}
                />
            </div>
        </div>
    );
};
export default ManejadorDomicilios;