import {
  CREATE_TYPEPANNE,
  RETRIEVE_TYPEPANNES,
  UPDATE_TYPEPANNE,
  DELETE_TYPEPANNE,
  DELETE_ALL_TYPEPANNES,
} from "./types";

import TypepanneDataService from "../services/TypepanneService";

export const createTypepanne = (name, description) => async (dispatch) => {
  try {
    const res = await TypepanneDataService.create({ name, description });
    dispatch({
      type: CREATE_TYPEPANNE,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const retrieveTypepannes = () => async (dispatch) => {
  try {
    const res = await TypepanneDataService.getAll();

    dispatch({
      type: RETRIEVE_TYPEPANNES,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const updateTypepannes = (id, data) => async (dispatch) => {
  try {
    const res = await TypepanneDataService.update(id, data);

    dispatch({
      type: DELETE_TYPEPANNE,
      payload: data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const deleteTypepanne= (id) => async (dispatch) => {
  try {
    await TypepanneDataService.remove(id);

    dispatch({
      type: DELETE_TYPEPANNE,
      payload: { id },
    });
  } catch (err) {
    console.log(err);
  }
};

export const deleteAllTypepannes = () => async (dispatch) => {
  try {
    const res = await  TypepanneDataService.removeAll();

    dispatch({
      type: DELETE_ALL_TYPEPANNES,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const findTypepannesByTitle = (title) => async (dispatch) => {
  try {
    const res = await  TypepanneDataService.findByTitle(title);

    dispatch({
      type: RETRIEVE_TYPEPANNES,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};
