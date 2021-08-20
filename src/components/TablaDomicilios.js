import React from "react";
import { Link } from "react-router-dom";

export default function TablaDomicilios(props) {
    return (
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
                                    className="btn btn-primary"
                                    onClick={(ev) => props.detalles(d)}
                                    disabled
                                >
                                    Detalles
                                </button>
                                <Link
                                    //to={`/domicilios/editdomicilio/${d.id}`}
                                    title="editar"
                                >
                                    <button
                                        type="button"
                                        className="btn btn-primary"
                                        disabled
                                    >
                                        Editar
                                    </button>
                                </Link>
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    onClick={(ev) => props.cerrar(d)}
                                    disabled
                                >
                                    Cerrar
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-danger"
                                    onClick={(ev) => props.eliminar(d.id)}
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