import {
  CREATE_TYPEPANNE,
  RETRIEVE_TYPEPANNES,
  UPDATE_TYPEPANNE,
  DELETE_TYPEPANNE,
  DELETE_ALL_TYPEPANNES,
} from "../actions/types";

const initialState = [];

const typepanneReducer = (typepannes = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_TYPEPANNE:
      return [...typepannes, payload];

    case RETRIEVE_TYPEPANNES:
      return payload;

    case UPDATE_TYPEPANNE:
      return typepannes.map((typepanne) => {
        if (typepanne.id === payload.id) {
          return {
            ...typepanne,
            ...payload,
          };
        } else {
          return typepanne;
        }
      });

    case DELETE_TYPEPANNE:
      return typepannes.filter(({ id }) => id !== payload.id);

    case DELETE_ALL_TYPEPANNES:
      return [];

    default:
      return typepannes;
  }
};

export default typepanneReducer;