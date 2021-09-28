import {
  CREATE_TACHE,
  RETRIEVE_TACHES,
  UPDATE_TACHE,
  DELETE_TACHE,
  DELETE_ALL_TACHES,
} from "../actions/types";

const initialState = [];

const tacheReducer = (taches = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_TACHE:
      return [...taches, payload];

    case RETRIEVE_TACHES:
      return payload;

    case UPDATE_TACHE:
      return taches.map((tache) => {
        if (tache.id === payload.id) {
          return {
            ...tache,
            ...payload,
          };
        } else {
          return tache;
        }
      });

    case DELETE_TACHE:
      return taches.filter(({ id }) => id !== payload.id);

    case DELETE_ALL_TACHES:
      return [];

    default:
      return taches;
  }
};

export default tacheReducer;