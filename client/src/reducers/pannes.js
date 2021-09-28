import {
  CREATE_PANNE,
  RETRIEVE_PANNES,
  UPDATE_PANNE,
  DELETE_PANNE,
  DELETE_ALL_PANNES,
} from "../actions/types";

const initialState = [];

const panneReducer = (pannes = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_PANNE:
      return [...pannes, payload];

    case RETRIEVE_PANNES:
      return payload;

    case UPDATE_PANNE:
      return pannes.map((panne) => {
        if (panne.id === payload.id) {
          return {
            ...panne,
            ...payload,
          };
        } else {
          return panne;
        }
      });

    case DELETE_PANNE:
      return pannes.filter(({ id }) => id !== payload.id);

    case DELETE_ALL_PANNES:
      return [];

    default:
      return pannes;
  }
};

export default panneReducer;