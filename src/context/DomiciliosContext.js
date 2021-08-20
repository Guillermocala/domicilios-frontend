import React, { createContext, useReducer } from "react";
import DomiciliosReducer from "./DomiciliosReducer";

const initialState = {
    domicilios: []
};

export const DomiciliosContext = createContext(initialState);

export const DomiciliosContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(DomiciliosReducer, initialState);

    function addDomicilio(domicilio) {
        dispatch({ type: "ADD_DOMICILIO", payload: domicilio });
    }

    function editDomicilio(domicilio) {
        dispatch({ type: "EDIT_DOMICILIO", payload: domicilio });
    }

    function removeDomicilio(id) {
        dispatch({ type: "REMOVE_DOMICILIO", payload: id });
    };

    function setListaDomicilios(domicilios) {
        dispatch({ type: "SET_DOMICILIOS", payload: domicilios });
    }

    return (
        <DomiciliosContext.Provider
            value={{
                addDomicilio,
                editDomicilio,
                removeDomicilio,
                setListaDomicilios,
                ...state
            }}
        >
            {children}
        </DomiciliosContext.Provider>
    );
};