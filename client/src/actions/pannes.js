import {
  CREATE_PANNE,
  RETRIEVE_PANNES,
  UPDATE_PANNE,
  DELETE_PANNE,
  DELETE_ALL_PANNES,
} from "./types";

import PanneDataService from "../services/PanneService";
import axios from "axios";

export const createPanne = (name, description, photo) => async (dispatch) => {
  try {
    const res = await PanneDataService.create({ name, description, photo });

    dispatch({
      type: CREATE_PANNE,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const retrievePannes = () => async (dispatch) => {
  try {
    const res = await PanneDataService.getAll();

    dispatch({
      type: RETRIEVE_PANNES,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};



export const updatePanne = (id, data) => async (dispatch) => {
  try {
    const res = await PanneDataService.update(id, data);

    dispatch({
      type: UPDATE_PANNE,
      payload: data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const deletePanne = (id) => async (dispatch) => {
  try {
    await PanneDataService.remove(id);

    dispatch({
      type: DELETE_PANNE,
      payload: { id },
    });
  } catch (err) {
    console.log(err);
  }
};

export const deleteAllPannes = () => async (dispatch) => {
  try {
    const res = await  PanneDataService.removeAll();

    dispatch({
      type: DELETE_ALL_PANNES,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const findPannesByTitle = (name) => async (dispatch) => {
  try {
    const res = await  PanneDataService.findByTitle(name);

    dispatch({
      type: RETRIEVE_PANNES,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};
