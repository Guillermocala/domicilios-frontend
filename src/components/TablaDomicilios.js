import React, { useState } from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import ModalDetalles from "./ModalDetalles";

export default function TablaDomicilios(props) {
    const [mostrarModal, setMostrarModal] = useState(false);
    const closeModal = () => setMostrarModal(false);
    
    const estadoDetalles = {
        id: null,
        nombreSolicitante: "",
        dirSolicitante: "",
        celSolicitante: "",
        horaSolicitante: "",
        nombreDestinatario: "",
        dirDestinatario: "",
        celDestinatario: "",
        horaDestinatario: "",
        descripcionPaquete: "",
        mensajero: null,
        estado: true
    }
    const [detalleDomicilio, setDetalleDomicilio] = useState(estadoDetalles)
    const openModal = (mensajero) =>{
        setMostrarModal(true);
        setDetalleDomicilio(mensajero);
    } 
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
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    onClick={(event) => openModal(d) }
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
                                {d.estado ? (
                                    <button
                                        id="botonCerrarEstado"
                                        type="button"
                                        className="btn btn-primary"
                                        onClick={(e) => props.cambiarEstado(d.id, d)}
                                    >
                                        Cerrar
                                    </button>
                                ) : (
                                    <button
                                        id="botonCerrarEstado"
                                        type="button"
                                        className="btn btn-primary"
                                        onClick={(e) => props.cambiarEstado(d.id, d)}
                                        disabled
                                    >
                                        Cerrar
                                    </button>
                                )}
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
            <>
                <ModalDetalles
                    show={mostrarModal}
                    closeModal={closeModal}
                    domicilio={detalleDomicilio}
                />
            </>
        </table>
    );
}