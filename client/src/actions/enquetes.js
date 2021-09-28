import {
  CREATE_ENQUETE,
  RETRIEVE_ENQUETES,
  UPDATE_ENQUETE,
  DELETE_ENQUETE,
  DELETE_ALL_ENQUETES,
} from "./types";

import EnqueteDataService from "../services/EnqueteService";

export const createEnquete = (title, description) => async (dispatch) => {
  try {
    const res = await EnqueteDataService.create({ title, description });

    dispatch({
      type: CREATE_ENQUETE,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const retrieveEnquetes = () => async (dispatch) => {
  try {
    const res = await EnqueteDataService.getAll();

    dispatch({
      type: RETRIEVE_ENQUETES,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const updateEnquete = (id, data) => async (dispatch) => {
  try {
    const res = await EnqueteDataService.update(id, data);

    dispatch({
      type: UPDATE_ENQUETE,
      payload: data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const deleteEnquete = (id) => async (dispatch) => {
  try {
    await EnqueteDataService.remove(id);

    dispatch({
      type: DELETE_ENQUETE,
      payload: { id },
    });
  } catch (err) {
    console.log(err);
  }
};

export const deleteAllEnquetes = () => async (dispatch) => {
  try {
    const res = await  EnqueteDataService.removeAll();

    dispatch({
      type: DELETE_ALL_ENQUETES,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const findEnquetesByTitle = (title) => async (dispatch) => {
  try {
    const res = await  EnqueteDataService.findByTitle(title);

    dispatch({
      type: RETRIEVE_ENQUETES,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};
