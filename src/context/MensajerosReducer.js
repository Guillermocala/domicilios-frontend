export default function MensajerosReducer(state, action) {
    switch (action.type) {
      case "SET_MASCOTAS":
        return {
          ...state,
          mensajeros: action.payload,
        };
      case "ADD_MASCOTA":
        return {
          ...state,
          mensajeros: [...state.mensajeros, action.payload],
        };
  
      case "EDIT_MASCOTA":
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
  
      case "REMOVE_MASCOTA":
        return {
          ...state,
          mensajeros: state.mensajeros.filter(
            (mensajero) => mensajero.id !== action.payload
          ),
        };
  
      default:
        return state;
    }
  };