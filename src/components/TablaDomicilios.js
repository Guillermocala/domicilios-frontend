import React, { useState } from "react";
import { Link } from "react-router-dom";
import ModalDetalles from "../components/Modal";

export default function TablaDomicilios(props) {
    const [mostrarModal, setMostrarModal] = useState(false);
    const closeModal = () => setMostrarModal(false);
    const openModal = () => setMostrarModal(true);

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
                            <td>{props.estado(d.estado)}</td>
                            <td>
                                <ModalDetalles
                                    show={mostrarModal}
                                    closeModal={closeModal}
                                    domicilio={d}
                                />
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    onClick={openModal}
                                >
                                    Detalles
                                </button>
                                <Link
                                    to={"/domicilios/editdomicilio/" + d.id}
                                    title="editar"
                                >
                                    <button
                                        type="button"
                                        className="btn btn-primary"
                                    >
                                        Editar
                                    </button>
                                </Link>
                                <button
                                    id="botonCerrarEstado"
                                    type="button"
                                    className="btn btn-primary"
                                    onClick={(e) => props.cambiarEstado(d.id, d)}
                                >
                                    Cerrar
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-danger"
                                    onClick={(e) => props.eliminar(d.id)}
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