import {
  CREATE_VEHICULE,
  RETRIEVE_VEHICULES,
  UPDATE_VEHICULE,
  DELETE_VEHICULE,
  DELETE_ALL_VEHICULES,
} from "../actions/types";

const initialState = [];

const vehiculeReducer = (vehicules = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_VEHICULE:
      return [...vehicules, payload];

    case RETRIEVE_VEHICULES:
      return payload;

    case UPDATE_VEHICULE:
      return vehicules.map((vehicule) => {
        if (vehicule.id === payload.id) {
          return {
            ...vehicule,
            ...payload,
          };
        } else {
          return vehicule;
        }
      });

    case DELETE_VEHICULE:
      return vehicules.filter(({ id }) => id !== payload.id);

    case DELETE_ALL_VEHICULES:
      return [];

    default:
      return vehicules;
  }
};

export default vehiculeReducer;