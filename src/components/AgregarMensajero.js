import React, { useState } from "react";

const AgregarMensajero = (props) => {
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
        console.log(name, value);
        setEstadoFormMensajero({
            ...estadoFormMensajero, 
            [name]: value
        });
        console.log(estadoFormMensajero);
    };

    return(
        <form
            onSubmit={(event) => {
                event.preventDefault();
                if(!estadoFormMensajero.nombre ||
                    !estadoFormMensajero.direccion ||
                    !estadoFormMensajero.cel ||
                    !estadoFormMensajero.cedula ||
                    !estadoFormMensajero.placa
                ) {console.log("error en formulario");
                   // return;
                }
                props.agregar(estadoFormMensajero);
                console.log("agregado");
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
            </div>
        </form>
    );
};
export default AgregarMensajero;