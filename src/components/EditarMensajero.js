import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MensajerosServices from "../services/MensajerosServices";

const EditarMensajero = (props) => {
    const estadoInicialForm = {
        id: null,
        nombre: "",
        direccion: "",
        cel: "",
        cedula: "",
        placa: ""
    };

    const [mensajeroEdit, setMensajeroEdit] = useState(estadoInicialForm);
    const [hayCambios, setHayCambios] = useState(false);

    useEffect(() => {
        traerMensajero(props.idMensajero);
    }, []);

    const traerMensajero = (id) => {
        MensajerosServices.get(id)
            .then(response => {
                setMensajeroEdit(response.data);
            })
            .catch(e => {
                console.log(e);
            })
    }

    const gestionCamposForm = (event) => {
        setHayCambios(true);
        const { name, value } = event.target;
        setMensajeroEdit({
            ...mensajeroEdit,
            [name]: value
        });
    };

    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
                if (!mensajeroEdit.nombre ||
                    !mensajeroEdit.direccion ||
                    !mensajeroEdit.cel ||
                    !mensajeroEdit.cedula ||
                    !mensajeroEdit.placa ||
                    !hayCambios
                ) {
                    window.alert("error en formulario, algun campo vacío o no hay modificaciones");
                    return;
                }
                MensajerosServices.update(props.idMensajero, mensajeroEdit);
                window.alert("actualizado");
                setHayCambios(false);
            }}
        >
            <div className="from-group">
                <label>Nombre</label>
                <input
                    id="nombre"
                    className="form-control"
                    type="text"
                    name="nombre"
                    value={mensajeroEdit.nombre}
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
                    value={mensajeroEdit.direccion}
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
                    value={mensajeroEdit.cel}
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
                    value={mensajeroEdit.cedula}
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
                    value={mensajeroEdit.placa}
                    onChange={gestionCamposForm}
                />
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-primary">
                    Actualizar
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
    );
};
export default EditarMensajero;