import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DomiciliosServices from "../services/DomiciliosServices";
import MensajerosServices from "../services/MensajerosServices";

const EditarDomicilio = (props) => {
    const estadoInicialListaMensajeros = [];
    const [estadoListaMensajeros, setEstadoListaMensajeros] = useState(estadoInicialListaMensajeros);
    useEffect(() => {
        recuperaMensajeros();
    }, []);
    const recuperaMensajeros = () => {
        MensajerosServices.getAll()
            .then(response => {
                setEstadoListaMensajeros(response.data);
            })
            .catch(e => {
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

    const [domicilioEdit, setDomicilioEdit] = useState(estadoInicialForm);
    const [hayCambios, setHayCambios] = useState(false);

    useEffect(() => {
        taerDomicilio(props.idDomicilio);
    }, []);

    const taerDomicilio = (id) => {
        DomiciliosServices.get(id)
            .then(response => {
                setDomicilioEdit(response.data);
            })
            .catch(e => {
                console.log(e);
            })
    }

    const gestionCamposForm = (event) => {
        setHayCambios(true);
        const { name, value } = event.target;
        setDomicilioEdit({
            ...domicilioEdit,
            [name]: value
        });
    };

    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
                if (
                    !domicilioEdit.nombreSolicitante ||
                    !domicilioEdit.dirSolicitante ||
                    !domicilioEdit.celSolicitante ||
                    !domicilioEdit.horaSolicitante ||
                    !domicilioEdit.nombreDestinatario ||
                    !domicilioEdit.dirDestinatario ||
                    !domicilioEdit.celDestinatario ||
                    !domicilioEdit.descripcionPaquete ||
                    !hayCambios
                ) {
                    window.alert("Error en formulario, algun campo vacío o no hay modificaciones");
                    console.log("respuesta: " + domicilioEdit.nombreSolicitante);
                console.log("mensajero: " + domicilioEdit.nombreDestinatario);
                    return;
                }
                DomiciliosServices.update(props.idDomicilio, domicilioEdit);
                
                window.alert("Domicilio Atualizado!");
                setHayCambios(false);
            }}
        >
            <div className="from-group">
                <label>Nombre Solicitante</label>
                <input
                    id="nombreSolicitante"
                    className="form-control"
                    type="text"
                    name="nombreSolicitante"
                    value={domicilioEdit.nombreSolicitante}
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
                    value={domicilioEdit.dirSolicitante}
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
                    value={domicilioEdit.celSolicitante}
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
                    value={domicilioEdit.horaSolicitante}
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
                    value={domicilioEdit.nombreDestinatario}
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
                    value={domicilioEdit.dirDestinatario}
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
                    value={domicilioEdit.celDestinatario}
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
                    value={domicilioEdit.descripcionPaquete}
                    onChange={gestionCamposForm}
                />
            </div>
            <div className="form-group">
                <button id="creardomicilio" type="submit" className="btn btn-primary">
                    Actualizar
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
export default EditarDomicilio;