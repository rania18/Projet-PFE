import {
  CREATE_ENQUETE,
  RETRIEVE_ENQUETES,
  UPDATE_ENQUETE,
  DELETE_ENQUETE,
  DELETE_ALL_ENQUETES,
} from "../actions/types";

const initialState = [];

const enqueteReducer = (enquetes = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_ENQUETE:
      return [...enquetes, payload];

    case RETRIEVE_ENQUETES:
      return payload;

    case UPDATE_ENQUETE:
      return enquetes.map((enquete) => {
        if (enquete.id === payload.id) {
          return {
            ...enquete,
            ...payload,
          };
        } else {
          return enquete;
        }
      });

    case DELETE_ENQUETE:
      return enquetes.filter(({ id }) => id !== payload.id);

    case DELETE_ALL_ENQUETES:
      return [];

    default:
      return enquetes;
  }
};

export default enqueteReducer;