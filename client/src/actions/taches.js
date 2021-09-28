import {
  CREATE_TACHE,
  RETRIEVE_TACHES,
  UPDATE_TACHE,
  DELETE_TACHE,
  DELETE_ALL_TACHES,
} from "./types";

import TacheDataService from "../services/TacheService";
import axios from "axios";

export const createTache = (name, description) => async (dispatch) => {
  try {
    const res = await TacheDataService.create({ name, description });

    dispatch({
      type: CREATE_TACHE,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const retrieveTaches = () => async (dispatch) => {
  try {
    const res = await TacheDataService.getAll();

    dispatch({
      type: RETRIEVE_TACHES,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};



export const updateTache = (id, data) => async (dispatch) => {
  try {
    const res = await TacheDataService.update(id, data);

    dispatch({
      type: UPDATE_TACHE,
      payload: data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const deleteTache = (id) => async (dispatch) => {
  try {
    await TacheDataService.remove(id);

    dispatch({
      type: DELETE_TACHE,
      payload: { id },
    });
  } catch (err) {
    console.log(err);
  }
};

export const deleteAllTaches = () => async (dispatch) => {
  try {
    const res = await  TacheDataService.removeAll();

    dispatch({
      type: DELETE_ALL_TACHES,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const findTachesByTitle = (name) => async (dispatch) => {
  try {
    const res = await  TacheDataService.findByTitle(name);

    dispatch({
      type: RETRIEVE_TACHES,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};
