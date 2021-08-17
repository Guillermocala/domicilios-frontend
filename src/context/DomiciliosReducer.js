export default function MascotasReducer(state, action) {
    switch (action.type) {
        case "ADD_DOMICILIO":
            return {
                ...state,
                domicilios: [...state.domicilios, action.payload],
            };
        case "EDIT_DOMICILIO":
            const updatedDomicilio = action.payload;
            const updatedDomicilios = state.domicilios.map((domicilio) => {
                if (domicilio.id === updatedDomicilio.id) {
                    return updatedDomicilio;
                }
                return domicilio;
            });
            return {
                ...state,
                domicilios: updatedDomicilios,
            };
        case "REMOVE_DOMICILIO":
            return {
                ...state,
                domicilios: state.domicilios.filter(
                    (domicilio) => domicilio.id !== action.payload
                ),
            };
        case "SET_DOMICILIOS":
            return {
                ...state,
                domicilios: action.payload,
            };
        default:
            return state;
    }
};