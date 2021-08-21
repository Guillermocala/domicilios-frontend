import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TablaDomicilios from "./TablaDomicilios";
import DomiciliosServices from "../services/DomiciliosServices";

const ManejadorDomicilios = () => {
    const estadoInicialListaDomicilios = [];
    const [estadoListaDomicilios, setEstadoListaDomicilios] = useState(estadoInicialListaDomicilios);

    useEffect(() => {
        recuperaDomicilios();
    }, []);
    const recuperaDomicilios = () => {
        DomiciliosServices.getAll()
            .then(response => {
                setEstadoListaDomicilios(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    const eliminarDomicilio = (id) => {
        DomiciliosServices.remove(id)
            .then(response => {
                if (response.status === 204) {
                    const domiciliosSinEliminado = estadoListaDomicilios.filter(
                        (domicilio) => domicilio.id !== id
                    );
                    setEstadoListaDomicilios(domiciliosSinEliminado);
                    window.alert("Domicilio eliminado!");
                }
            })
            .catch(e => {
                console.log(e);
            });
    };

    const estadoDomicilio = (estado) => {
        return (
            estado ? (
                <div className="fw-bold bg-primary">Pendiente</div>
            ) : (
                <div className="fw-bold bg-secondary">Entregado</div>
            )
        )
    };

    const cambiarEstado = (id, domicilio) => {
        DomiciliosServices.update(id, { ...domicilio, })
            .then(response => {
                if (response.status === 200) {
                    const listaActualizada = estadoListaDomicilios.map((d) => {
                        if (d.id === id) {
                            d.estado = false;
                            d.horaDestinatario = "24:00";
                        }
                        return d;
                    })
                    setEstadoListaDomicilios = listaActualizada;
                }
            }).catch(e => {
                console.log(e);
            })
    };

    return (
        <div>
            <div>
                <Link
                    to={"/domicilios/adddomicilio/:id"}
                    title="creardomicilio"
                >
                    <button className="btn btn-primary">Crear domicilio</button>
                </Link>
            </div>
            <div>
                <h2>Domicilios solicitados</h2>
                <TablaDomicilios
                    domicilios={estadoListaDomicilios}
                    estado={estadoDomicilio}
                    eliminar={eliminarDomicilio}
                    cambiarEstado={cambiarEstado}
                />
            </div>
        </div>
    );
};
export default ManejadorDomicilios;