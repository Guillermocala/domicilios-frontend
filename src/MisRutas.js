import React from "react";
import { Route, Switch } from "react-router";
import Inicio from "./pages/Inicio";
import Domicilios from "./pages/Domicilios";
import Mensajeros from "./pages/Mensajeros";
import MiCuenta from "./pages/MiCuenta";

export default function MisRutas() {
    return(
        <Switch>
            <Route exact path="/" component={Inicio} />
            <Route path="/domicilios" component={Domicilios} />
            <Route path="/mensajeros" component={Mensajeros} />
            <Route path="/micuenta" component={MiCuenta} />
        </Switch>
    );
}