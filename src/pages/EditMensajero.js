import React from "react";
import EditarMensajero from "../components/EditarMensajero";

export default function AddMensajero({ match }) {
    return (
        <div>
            <h2>Editar mensajero</h2>
            <EditarMensajero
                idMensajero={match.params.idMensajero}
            />
        </div>
    )
}