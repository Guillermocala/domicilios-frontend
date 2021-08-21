import React from "react";
import {Link} from "react-router-dom";

export default function Inicio() {
    return (
        <div className="d-flex justify-content-center">
            <form>
                <div className="from-group">
                    <label className="col-6 align-self-center">
                        USUARIO
                    </label>
                    <input
                        id="nombre"
                        className="form-control"
                        type="text"
                        name="nombre"
                    />
                </div>
                <br></br>
                <div className="from-group">
                    <label >
                        CONTRASEÑA
                    </label>
                    <input
                        id="password"
                        className="form-control"
                        type="password"
                        name="nombre"
                    />
                </div>
                <br></br>
                <div className="d-flex">
                    <Link to={"/domicilios"}>
                    <button className="btn btn-primary"  >
                        INGRESAR
                    </button>
                    </Link>
                </div>
            </form>
        </div>

    );
}