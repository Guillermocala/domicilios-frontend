import React, { useState } from "react";

const AgregarDomicilio = (props) => {
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
    const [estadoFormDomicilio, setEstadoFormDomicilio] = useState(estadoInicialForm);
    const gestionCamposForm = (event) => {
        const { name, value } = event.target;
        setEstadoFormDomicilio({
            ...estadoFormDomicilio, [name]: value
        });
    };
    return(
        <form
            onSubmit={(event) => {
                event.preventDefault();
                if(
                    !estadoFormDomicilio.nombreSolicitante ||
                    !estadoFormDomicilio.dirSolicitante ||
                    !estadoFormDomicilio.celSolicitante ||
                    !estadoFormDomicilio.horaSolicitante ||
                    !estadoFormDomicilio.nombreDestinatario ||
                    !estadoFormDomicilio.dirDestinatario ||
                    !estadoFormDomicilio.celDestinatario ||
                    !estadoFormDomicilio.descripcionPaquete
                )
                return;
                props.agregar(estadoFormDomicilio);
                console.log("agrego!");
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
                    pattern="[0-9]{10}"
                    placeholder="1231231234"
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
                    pattern="[0-9]{10}"
                    placeholder="1231231234"
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
                    id="mensajero"
                    className="form-control"
                    name="mensajero"
                    //{mensajeros.map((mensajero) => (
                      //  <option value={mensajero.id}>{mensajero.nombre}</option>
                    //))}
                >
                    
                    <option>mensajero 1</option>
                    <option>mensajero 2</option>
                    <option>mensajero 3</option>
                </select>
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-primary">
                    Agregar
                </button>
            </div>
        </form>
    );
};
export default AgregarDomicilio;