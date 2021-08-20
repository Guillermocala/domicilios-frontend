import React, { useState } from "react";
import { Link } from "react-router-dom";
import MensajerosServices from "../services/MensajerosServices";

const AgregarMensajero = () => {
    const estadoInicialForm = {
        id: null,
        nombre: "",
        direccion: "",
        cel: "",
        cedula: "",
        placa: ""
    };

    const [estadoFormMensajero, setEstadoFormMensajero
    ] = useState(estadoInicialForm);

    const gestionCamposForm = (event) => {
        const { name, value } = event.target;
        setEstadoFormMensajero({
            ...estadoFormMensajero,
            [name]: value
        });
    };

    const agregarMensajero = (mensajero) => {
        MensajerosServices.create(mensajero)
            .then(response => {
                /*unexpected function*/
            })
            .catch(e => {
                console.log(e);
            });
    };
    return (
        <div>
            <h2>Agregar mensajero</h2>
            <form
                onSubmit={(event) => {
                    event.preventDefault();
                    if (!estadoFormMensajero.nombre ||
                        !estadoFormMensajero.direccion ||
                        !estadoFormMensajero.cel ||
                        !estadoFormMensajero.cedula ||
                        !estadoFormMensajero.placa
                    ) {
                        window.alert("error en formulario, algun campo vacío");
                        return;
                    }
                    agregarMensajero(estadoFormMensajero);
                    window.alert("Mensajero agregado!");
                    setEstadoFormMensajero(estadoInicialForm);
                }}
            >
                <div className="from-group">
                    <label>Nombre</label>
                    <input
                        id="nombre"
                        className="form-control"
                        type="text"
                        name="nombre"
                        value={estadoFormMensajero.nombre}
                        onChange={gestionCamposForm}
                    />
                </div>
                <div className="from-group">
                    <label>Direccion</label>
                    <input
                        id="direccion"
                        className="form-control"
                        type="text"
                        name="direccion"
                        value={estadoFormMensajero.direccion}
                        onChange={gestionCamposForm}
                    />
                </div>
                <div className="from-group">
                    <label>Celular</label>
                    <input
                        id="cel"
                        className="form-control"
                        type="tel"
                        pattern="[0-9]{1,8}"
                        placeholder="12345678"
                        title="between 1-8 numbers"
                        name="cel"
                        value={estadoFormMensajero.cel}
                        onChange={gestionCamposForm}
                    />
                </div>
                <div className="from-group">
                    <label>Cedula</label>
                    <input
                        id="cedula"
                        className="form-control"
                        type="tel"
                        pattern="[0-9]{1,8}"
                        placeholder="12345678"
                        title="between 1-8 numbers"
                        name="cedula"
                        value={estadoFormMensajero.cedula}
                        onChange={gestionCamposForm}
                    />
                </div>
                <div className="from-group">
                    <label>Placa</label>
                    <input
                        id="placa"
                        className="form-control"
                        type="text"
                        name="placa"
                        value={estadoFormMensajero.placa}
                        onChange={gestionCamposForm}
                    />
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary">
                        Agregar
                    </button>
                    <Link
                        to={"/mensajeros"}
                        title="mensajeros"
                    >
                        <button className="btn btn-danger">
                            Cancelar
                        </button>
                    </Link>
                </div>
            </form>
        </div>
    );
};
export default AgregarMensajero;