export default function MensajerosReducer(state, action) {
  switch (action.type) {
    case "ADD_MENSAJERO":
      return {
        ...state,
        mensajeros: [...state.mensajeros, action.payload],
      };
    case "EDIT_MENSAJERO":
      const updatedMensajero = action.payload;
      const updatedMensajeros = state.mensajeros.map((mensajero) => {
        if (mensajero.id === updatedMensajero.id) {
          return updatedMensajero;
        }
        return mensajero;
      });
      return {
        ...state,
        mensajeros: updatedMensajeros,
      };
    case "REMOVE_MENSAJERO":
      return {
        ...state,
        mensajeros: state.mensajeros.filter(
          (mensajero) => mensajero.id !== action.payload
        ),
      };
    case "SET_MENSAJEROS":
      return {
        ...state,
        mensajeros: action.payload,
      };
    default:
      return state;
  }
};