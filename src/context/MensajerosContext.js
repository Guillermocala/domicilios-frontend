import React, { createContext, useReducer } from "react";
import MensajerosReducer from "./MensajerosReducer";

const initialState = {
    mensajeros: []
};

export const MensajerosContext = createContext(initialState);

export const MensajerosContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(MensajerosReducer, initialState);

    function addMensajero(mensajero) {
        dispatch({ type: "ADD_MENSAJERO", payload: mensajero });
    }

    function editMensajero(mensajero) {
        dispatch({ type: "EDIT_MENSAJERO", payload: mensajero });
    }

    function removeMensajero(id) {
        dispatch({ type: "REMOVE_MENSAJERO", payload: id });
    };

    function setListaMensajeros(mensajeros) {
        dispatch({ type: "SET_MENSAJEROS", payload: mensajeros });
    }

    return (
        <MensajerosContext.Provider
            value={{
                addMensajero,
                editMensajero,
                removeMensajero,
                setListaMensajeros,
                ...state
            }}
        >
            {children}
        </MensajerosContext.Provider>
    );
};