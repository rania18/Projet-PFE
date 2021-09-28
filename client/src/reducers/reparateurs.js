import {
  CREATE_REPARATEUR,
  RETRIEVE_REPARATEURS,
  UPDATE_REPARATEUR,
  DELETE_REPARATEUR,
  DELETE_ALL_REPARATEURS,
} from "../actions/types";

const initialState = [];

const reparateurReducer = (reparateurs = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_REPARATEUR:
      return [...reparateurs, payload];

    case RETRIEVE_REPARATEURS:
      return payload;

    case UPDATE_REPARATEUR:
      return reparateurs.map((reparateur) => {
        if (reparateur.id === payload.id) {
          return {
            ...reparateur,
            ...payload,
          };
        } else {
          return reparateur;
        }
      });

    case DELETE_REPARATEUR:
      return reparateurs.filter(({ id }) => id !== payload.id);

    case DELETE_ALL_REPARATEURS:
      return [];

    default:
      return reparateurs;
  }
};

export default reparateurReducer;