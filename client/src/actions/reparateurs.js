import {
  CREATE_REPARATEUR,
  RETRIEVE_REPARATEURS,
  UPDATE_REPARATEUR,
  DELETE_REPARATEUR,
  DELETE_ALL_REPARATEURS,
} from "./types";

import ReparateurDataService from "../services/ReparateurService";

export const createReparateur = (nom, prenom, email,password, tel) => async (dispatch) => {
  try {
    const res = await ReparateurDataService.create({ nom, prenom, email, password, tel });

    dispatch({
      type: CREATE_REPARATEUR,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const retrieveReparateurs = () => async (dispatch) => {
  try {
    const res = await ReparateurDataService.getAll();

    dispatch({
      type: RETRIEVE_REPARATEURS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const updateReparateur = (id, data) => async (dispatch) => {
  try {
    const res = await ReparateurDataService.update(id, data);

    dispatch({
      type: UPDATE_REPARATEUR,
      payload: data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const deleteReparateur = (id) => async (dispatch) => {
  try {
    await ReparateurDataService.remove(id);

    dispatch({
      type: DELETE_REPARATEUR,
      payload: { id },
    });
  } catch (err) {
    console.log(err);
  }
};

export const deleteAllReparateurs = () => async (dispatch) => {
  try {
    const res = await  ReparateurDataService.removeAll();

    dispatch({
      type: DELETE_ALL_REPARATEURS,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const findReparateursByTitle = (nom) => async (dispatch) => {
  try {
    const res = await  ReparateurDataService.findByTitle(nom);

    dispatch({
      type: RETRIEVE_REPARATEURS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};
