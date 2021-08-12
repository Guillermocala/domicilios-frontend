import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return(
        <div>
            <h3>Domicilios Santa Marta</h3>
            <nav>
                <Link to="/" >
                    Inicio
                </Link>
                <Link to="/domicilios" >
                    Domicilios
                </Link>
                <Link to="/mensajeros">
                    Mensajeros
                </Link>
                <Link to="/micuenta">
                    Mi Cuenta
                </Link>
            </nav>
        </div>
    );
}
export default Header;