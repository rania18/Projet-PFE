import {
  CREATE_VEHICULE,
  RETRIEVE_VEHICULES,
  UPDATE_VEHICULE,
  DELETE_VEHICULE,
  DELETE_ALL_VEHICULES,
} from "./types";

import VehiculeDataService from "../services/VehiculeService";

export const createVehicule = (immatricule, marque, modele, Kilometrage, carburant, PropreteInt, PropreteExt, PropreteTapis,LeveVitre,HuileM, liquideR,liquideF, etatB,assurance ,  clientId) => async (dispatch) => {
  try {
    const res = await VehiculeDataService.create({ immatricule, marque, modele, Kilometrage, carburant, PropreteInt, PropreteExt, PropreteTapis,LeveVitre,HuileM, liquideR,liquideF, etatB,assurance ,  clientId });

    dispatch({
      type: CREATE_VEHICULE,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const retrieveVehicules = () => async (dispatch) => {
  try {
    const res = await VehiculeDataService.getAll();

    dispatch({
      type: RETRIEVE_VEHICULES,
      payload: res.data,

    });
  } catch (err) {
    console.log(err);
  }
};

export const updateVehicule = (id, data) => async (dispatch) => {
  try {
    const res = await VehiculeDataService.update(id, data);

    dispatch({
      type: UPDATE_VEHICULE,
      payload: data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const deleteVehicule = (id) => async (dispatch) => {
  try {
    await VehiculeDataService.remove(id);

    dispatch({
      type: DELETE_VEHICULE,
      payload: { id },
    });
  } catch (err) {
    console.log(err);
  }
};

export const deleteAllVehicules = () => async (dispatch) => {
  try {
    const res = await VehiculeDataService.removeAll();

    dispatch({
      type: DELETE_ALL_VEHICULES,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};



export const findVehiculesByTitle = (immatricule) => async (dispatch) => {
  try {
    const res = await  VehiculeDataService.findByTitle(immatricule);

    dispatch({
      type: RETRIEVE_VEHICULES,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};
