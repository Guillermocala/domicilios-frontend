import React from "react";
import EditarMensajero from "../components/EditarMensajero";

export default function AddMensajero({match}) {
    return(
        <EditarMensajero 
            idMensajero={match.params.idMensajero}
        />
    )
}