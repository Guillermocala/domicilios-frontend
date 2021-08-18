import React, { useState, useEffect } from "react";
import TablaMensajeros from "./TablaMensajeros";
import MensajerosServices from "../services/MensajerosServices";
import AgregarMensajero from "./AgregarMensajero";

const ManejadorMensajeros = () => {
    const estadoInicialListaMensajeros = [];
    const [estadoListaMensajeros, setEstadoListaMensajeros] = useState(estadoInicialListaMensajeros);

    useEffect(() => {
        recuperaMensajeros();
    }, []);
    const recuperaMensajeros = () => {
        MensajerosServices.getAll()
        .then(response => {
            setEstadoListaMensajeros(response.data);
            console.log(response.data);
        })
        .catch(e => {
            console.log(e);
        });
    }

    const agregarMensajero = (mensajero) => {
        MensajerosServices.create(mensajero)
        .then(response => {
            const nuevoMensajero = {
                id: response.data.id,
                nombre: response.data.nombre,
                direccion: response.data.direccion,
                cel: response.data.cel,
                cedula: response.data.cedula,
                placa: response.data.placa
            };
            setEstadoListaMensajeros([...estadoListaMensajeros, nuevoMensajero]);
            console.log(response.data);
        })
        .catch(e => {
            console.log(e);
        });
    };

    const eliminarMensajero = (id) => {
        console.log("inicio eliminar");
        MensajerosServices.remove(id)
        .then(response => {
            if(response.status === 204) {
                console.log("eliminado");
                const mensajerosSinEliminado = estadoListaMensajeros.filter(
                    (mensajero) => mensajero.id !== id
                );
                setEstadoListaMensajeros(mensajerosSinEliminado);
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
                <h2>Mensajeros</h2>
                <TablaMensajeros
                    mensajeros={estadoListaMensajeros}
                    //editar={}
                    eliminar={eliminarMensajero}
                />
            </div>
            <div>
                <h2>Crear mensajero</h2>
                <AgregarMensajero
                    agregar={agregarMensajero}
                />
            </div>
        </div>
    )
};
export default ManejadorMensajeros;