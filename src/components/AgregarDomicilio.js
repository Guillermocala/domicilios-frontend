import React, { useState, useEffect, useContext } from "react";
import DomiciliosServices from "../services/DomiciliosServices";
import { Link } from "react-router-dom";
import MensajerosServices from "../services/MensajerosServices";

const AgregarDomicilio = () => {
    const estadoInicialListaMensajeros = [];
    const [estadoListaMensajeros, setEstadoListaMensajeros] = useState(estadoInicialListaMensajeros);
    useEffect(() => {
        recuperaMensajeros();
    }, []);
    const recuperaMensajeros = () => {
        MensajerosServices.getAll()
            .then(response => {
                setEstadoListaMensajeros(response.data);
                {
                    if (response.data.length === 0) {
                        window.alert("No hay mensajeros");
                        document.getElementById("mensajeroSelect").disabled = true;
                        document.getElementById("creardomicilio").disabled = true;
                    }
                    else {
                        document.getElementById("mensajeroSelect").disabled = false;
                        document.getElementById("creardomicilio").disabled = false;
                    }
                }
            })
            .catch(e => {
                window.alert("No hay mensajeros");
                document.getElementById("mensajeroSelect").disabled = true;
                document.getElementById("creardomicilio").disabled = true;
                console.log(e);
            });
    }

    const estadoInicialForm = {
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
    const [estadoFormDomicilio, setEstadoFormDomicilio
    ] = useState(estadoInicialForm);

    const gestionCamposForm = (event) => {
        const { name, value } = event.target;
        setEstadoFormDomicilio({
            ...estadoFormDomicilio, [name]: value
        });
    };

    const agregarDomicilio = (id, domicilio) => {
        DomiciliosServices.create(id, domicilio)
            .then(response => {
                window.alert("Domicilio creado!");
                console.log(response.data)
            })
            .catch(e => {
                console.log(e);
            });
    };
    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
                if (
                    !estadoFormDomicilio.nombreSolicitante ||
                    !estadoFormDomicilio.dirSolicitante ||
                    !estadoFormDomicilio.celSolicitante ||
                    !estadoFormDomicilio.horaSolicitante ||
                    !estadoFormDomicilio.nombreDestinatario ||
                    !estadoFormDomicilio.dirDestinatario ||
                    !estadoFormDomicilio.celDestinatario ||
                    !estadoFormDomicilio.descripcionPaquete
                ) {
                    window.alert("error en formulario, algun campo vacío");
                    return;
                }
                agregarDomicilio(estadoFormDomicilio.mensajero, estadoFormDomicilio);
                setEstadoFormDomicilio(estadoInicialForm);
            }}
        >
            <div className="from-group">
                <label>Nombre Solicitante</label>
                <input
                    id="nombreSolicitante"
                    className="form-control"
                    type="text"
                    name="nombreSolicitante"
                    value={estadoFormDomicilio.nombreSolicitante}
                    onChange={gestionCamposForm}
                />
            </div>
            <div className="from-group">
                <label>Direccion Solicitante</label>
                <input
                    id="dirSolicitante"
                    className="form-control"
                    type="text"
                    name="dirSolicitante"
                    value={estadoFormDomicilio.dirSolicitante}
                    onChange={gestionCamposForm}
                />
            </div>
            <div className="from-group">
                <label>Celular Solicitante</label>
                <input
                    id="celSolicitante"
                    className="form-control"
                    type="tel"
                    pattern="[0-9]{1,8}"
                    placeholder="12345678"
                    name="celSolicitante"
                    value={estadoFormDomicilio.celSolicitante}
                    onChange={gestionCamposForm}
                />
            </div>
            <div className="from-group">
                <label>Hora Solicitante</label>
                <input
                    id="horaSolicitante"
                    className="form-control"
                    type="text"
                    name="horaSolicitante"
                    value={estadoFormDomicilio.horaSolicitante}
                    onChange={gestionCamposForm}
                />
            </div>
            <div className="from-group">
                <label>Nombre Destinatario</label>
                <input
                    id="nombreDestinatario"
                    className="form-control"
                    type="text"
                    name="nombreDestinatario"
                    value={estadoFormDomicilio.nombreDestinatario}
                    onChange={gestionCamposForm}
                />
            </div>
            <div className="from-group">
                <label>Direccion Destinatario</label>
                <input
                    id="dirDestinatario"
                    className="form-control"
                    type="text"
                    name="dirDestinatario"
                    value={estadoFormDomicilio.dirDestinatario}
                    onChange={gestionCamposForm}
                />
            </div>
            <div className="from-group">
                <label>Celular Destinatario</label>
                <input
                    id="celDestinatario"
                    className="form-control"
                    type="tel"
                    pattern="[0-9]{1,8}"
                    placeholder="12345678"
                    name="celDestinatario"
                    value={estadoFormDomicilio.celDestinatario}
                    onChange={gestionCamposForm}
                />
            </div>
            <div className="from-group">
                <label>Descripcion Paquete</label>
                <input
                    id="descripcionPaquete"
                    className="form-control"
                    type="text"
                    name="descripcionPaquete"
                    value={estadoFormDomicilio.descripcionPaquete}
                    onChange={gestionCamposForm}
                />
            </div>
            <div className="from-group">
                <label>Mensajero</label>
                <select
                    id="mensajeroSelect"
                    className="form-control"
                    name="mensajero"
                    value={estadoFormDomicilio.mensajero}
                    onChange={gestionCamposForm}
                >
                    {estadoListaMensajeros.map((m) => (
                        <option
                            id="mensajeroOption"
                            name="mensajeroOption"
                            value={m.id}
                        >
                            {m.nombre}
                        </option>))}
                </select>
            </div>
            <div className="form-group">
                <button
                    id="creardomicilio"
                    type="submit"
                    className="btn btn-primary"
                >
                    Agregar
                </button>
                <Link
                    to={"/domicilios"}
                    title="domicilios"
                >
                    <button className="btn btn-danger">
                        Cancelar
                    </button>
                </Link>
            </div>
        </form>
    );
};
export default AgregarDomicilio;