import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
            })
            .catch(e => {
                console.log(e);
            });
    }

    const eliminarMensajero = (id) => {
        MensajerosServices.remove(id)
            .then(response => {
                if (response.status === 204) {
                    const mensajerosSinEliminado = estadoListaMensajeros.filter(
                        (mensajero) => mensajero.id !== id
                    );
                    setEstadoListaMensajeros(mensajerosSinEliminado);
                    window.alert("Mensajero eliminado!");
                }
            })
            .catch(e => {
                console.log(e);
            });
    };

    return (
        <div>
            <div>
                <Link
                    to={"/mensajeros/addmensajero/:idDomicilio"}
                    title="crearmensajero"
                >
                    <button className="btn btn-primary">Crear mensajero</button>
                </Link>
            </div>
            <div>
                <h2>Mensajeros</h2>
                <TablaMensajeros
                    mensajeros={estadoListaMensajeros}
                    eliminar={eliminarMensajero}
                />
            </div>
        </div>
    )
};
export default ManejadorMensajeros;