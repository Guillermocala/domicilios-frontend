import React from "react";

export default function TablaDomicilios(props) {
    return(
        <table>
            <thead>
                <tr>
                    <th># ID</th>
                    <th>Solicitante</th>
                    <th>Estado</th>
                    <th>Opciones</th>
                </tr>
            </thead>
            <tbody>
                {props.domicilios.length > 0 ? (
                    props.domicilios.map((d) => (
                        <tr key={d.id}>
                            <td>{d.id}</td>
                            <td>{d.nombreSolicitante}</td>
                            <td>{d.estado}</td>
                            <td>
                                <button
                                    type="button"
                                    className=""
                                    onClick={(ev) => props.detalles(d)}
                                >
                                    Detalles
                                </button>
                                <button
                                    type="button"
                                    className=""
                                    onClick={(ev) => props.editar(d)}
                                >
                                    Editar
                                </button>
                                <button
                                    type="button"
                                    className=""
                                    onClick={(ev) => props.cerrar(d)}
                                >
                                    Cerrar
                                </button>
                                <button
                                    type="button"
                                    className=""
                                    onClick={(ev) => props.eliminar(d)}
                                >
                                    Eliminar
                                </button>
                            </td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td>No se han agregado domicilios</td>
                    </tr>
                )}
            </tbody>
        </table>
    );
}