import React, { createContext, useReducer } from "react";
import { MensajerosReducer } from "./MensajerosReducer";

const initialState = {
    mensajeros: []
};

export const MensajerosContext = createContext(initialState);

export const MensajerosContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(MensajerosReducer, initialState);

    function addDomicilio (mensajero) {
        dispatch({ type: "ADD_MENSAJERO", payload: mensajero});
    }

    function editDomicilio (mensajero) {
        dispatch({ type: "EDIT_MENSAJERO", payload: mensajero});
    }

    function removeDomicilio (id) {
        dispatch({ type: "REMOVE_MENSAJERO", payload: id});
    };

    function setListaMensajeros(mensajeros) {
        dispatch({ type: "SET_MENSAJEROS", payload: mensajeros});
    }

    return (
        <MensajerosContextProvider.Provider value={
            value={
                addDomicilio,
                editDomicilio,
                removeDomicilio,
                setListaMensajeros,
                ...state
            }
        }>
            { children }
        </MensajerosContextProvider.Provider>
    );
};