import React from "react";
import EditarDomicilio from "../components/EditarDomicilio";

export default function EditDomicilio( {match} ) {
    return(
        <div>
            <h2>Editar domicilio</h2>
            <EditarDomicilio
                idDomicilio={match.params.idDomicilio}
            />
        </div>
    )
}