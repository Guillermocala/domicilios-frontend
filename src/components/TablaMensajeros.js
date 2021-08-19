import React from "react";

export default function TablaDomicilios(props) {
    return(
        <table>
            <thead>
                <tr>
                    <th># ID</th>
                    <th>Nombre</th>
                    <th># Cédula</th>
                    <th># Celular</th>
                    <th># Placa</th>
                    <th>Dirección</th>
                    <th>Opciones</th>
                </tr>
            </thead>
            <tbody>
                {props.mensajeros.length > 0 ? (
                    props.mensajeros.map((m) => (
                        <tr key={m.id}>
                            <td>{m.id}</td>
                            <td>{m.nombre}</td>
                            <td>{m.cedula}</td>
                            <td>{m.cel}</td>
                            <td>{m.placa}</td>
                            <td>{m.direccion}</td>
                            <td>
                                <form action="http://localhost:3000/mensajeros/editmensajero">
                                    <button 
                                        type="submit"
                                        className="btn btn-secondary"
                                    >Editar</button>
                                </form>
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    onClick={(e) => props.eliminar(m.id)}
                                >
                                    Eliminar
                                </button>
                            </td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td>No se han agregado mensajeros</td>
                    </tr>
                )}
            </tbody>
        </table>

    )

}