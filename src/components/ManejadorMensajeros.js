import React, { useState, useEffect } from "react";
import TablaMensajeros from "./TablaMensajeros";
import MensajerosServices from "../services/MensajerosServices";

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
                    eliminar={eliminarMensajero}
                />
            </div>
            <div>
                <form action="http://localhost:3000/mensajeros/addmensajero">
                    <button type="submit">Crear mensajero</button>
                </form>
            </div>
        </div>
    )
};
export default ManejadorMensajeros;