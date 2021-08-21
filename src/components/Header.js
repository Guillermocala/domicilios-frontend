import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return(
        <div className="container-fluid py-3">
            <header>
                <div className="d-flex flex-colum flex-md-row align-items-center pb-3 mb-4 border-bottom"> 
                    <h3 className="mt-3">
                        Domicilios Santa Marta
                    </h3>
                    <nav className="d-inline-flex mt-2 mt-md- ms-md-auto">
                        <Link to="/" className= "text-decoration-none px-2">
                            Inicio
                         </Link>
                        <Link to="/domicilios" className= "text-decoration-none px-2">
                            Domicilios
                        </Link>
                        <Link to="/mensajeros" className= "text-decoration-none px-2">
                            Mensajeros
                        </Link>
                        <Link to="/micuenta" className= "text-decoration-none px-2">
                            Mi Cuenta
                        </Link>
                    </nav>
                </div>
            </header>
        </div>
    );
}
export default Header;