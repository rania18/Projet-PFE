import {
  CREATE_REPONSE,
  RETRIEVE_REPONSES,
  UPDATE_REPONSE,
  DELETE_REPONSE,
  DELETE_ALL_REPONSES,
} from "./types";

import ReponseDataService from "../services/ReponseService";

export const createReponse = (title, description,questionId) => async (dispatch) => {
  try {
    const res = await ReponseDataService.create({ title, description,questionId });

    dispatch({
      type: CREATE_REPONSE,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const retrieveReponses = () => async (dispatch) => {
  try {
    const res = await ReponseDataService.getAll();

    dispatch({
      type: RETRIEVE_REPONSES,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const updateReponse = (id, data) => async (dispatch) => {
  try {
    const res = await ReponseDataService.update(id, data);

    dispatch({
      type: UPDATE_REPONSE,
      payload: data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const deleteReponse = (id) => async (dispatch) => {
  try {
    await ReponseDataService.remove(id);

    dispatch({
      type: DELETE_REPONSE,
      payload: { id },
    });
  } catch (err) {
    console.log(err);
  }
};

export const deleteAllReponses = () => async (dispatch) => {
  try {
    const res = await  ReponseDataService.removeAll();

    dispatch({
      type: DELETE_ALL_REPONSES,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const findReponsesByTitle = (title) => async (dispatch) => {
  try {
    const res = await  ReponseDataService.findByTitle(title);

    dispatch({
      type: RETRIEVE_REPONSES,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};
