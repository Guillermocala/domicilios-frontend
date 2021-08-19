import React from "react";
import { Route, Switch } from "react-router";
import Inicio from "./pages/Inicio";
import Domicilios from "./pages/Domicilios";
import Mensajeros from "./pages/Mensajeros";
import MiCuenta from "./pages/MiCuenta";
import AddMensajero from "./pages/AddMensajero";
import EditMensajero from "./pages/EditMensajero";

export default function MisRutas() {
    return(
        <Switch>
            <Route exact path="/" component={Inicio} />
            <Route path="/domicilios" component={Domicilios} />
            <Route path="/micuenta" component={MiCuenta} />
            
            <Route exact path="/mensajeros" component={Mensajeros} />
            <Route path="/mensajeros/addmensajero" component={AddMensajero} />
            <Route path="/mensajeros/editmensajero:idMensajero" component={EditMensajero} exact/>
        </Switch>
    );
}