import http from "../http-common";

const getAll = () => {
  return http.get("/vehicules");
};

const get = id => {
  return http.get(`/vehicules/${id}`);
};

const create = data => {
  return http.post("/vehicules", data);
};

const update = (id, data) => {
  return http.put(`/vehicules/${id}`, data);
};

const remove = id => {
  return http.delete(`/vehicules/${id}`);
};

const removeAll = () => {
  return http.delete(`/vehicules`);
};

const findByTitle = immatricule => {
  return http.get(`/vehicules?immatricule =${immatricule}`);
};

const VehiculeService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle
};

export default VehiculeService;
