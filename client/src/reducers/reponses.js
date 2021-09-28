import {
  CREATE_REPONSE,
  RETRIEVE_REPONSES,
  UPDATE_REPONSE,
  DELETE_REPONSE,
  DELETE_ALL_REPONSES,
} from "../actions/types";

const initialState = [];

const reponseReducer = (reponses = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_REPONSE:
      return [...reponses, payload];

    case RETRIEVE_REPONSES:
      return payload;

    case UPDATE_REPONSE:
      return reponses.map((reponse) => {
        if (reponse.id === payload.id) {
          return {
            ...reponse,
            ...payload,
          };
        } else {
          return reponse;
        }
      });

    case DELETE_REPONSE:
      return reponses.filter(({ id }) => id !== payload.id);

    case DELETE_ALL_REPONSES:
      return [];

    default:
      return reponses;
  }
};

export default reponseReducer;