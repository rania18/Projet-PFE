import {
  CREATE_CLIENT,
  RETRIEVE_CLIENTS,
  UPDATE_CLIENT,
  DELETE_CLIENT,
  DELETE_ALL_CLIENTS,
} from "../actions/types";

const initialState = [];

const clientReducer = (clients = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_CLIENT:
      return [...clients, payload];

    case RETRIEVE_CLIENTS:
      return payload;

    case UPDATE_CLIENT:
      return clients.map((client) => {
        if (client.id === payload.id) {
          return {
            ...client,
            ...payload,
          };
        } else {
          return client;
        }
      });

    case DELETE_CLIENT:
      return clients.filter(({ id }) => id !== payload.id);

    case DELETE_ALL_CLIENTS:
      return [];

    default:
      return clients;
  }
};

export default clientReducer;