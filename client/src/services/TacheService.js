import http from "../http-common";

const getAll = () => {
  return http.get("/taches");
};

const get = id => {
  return http.get(`/taches/${id}`);
};

const create = data => {
  return http.post("/taches", data);
};

const update = (id, data) => {
  return http.put(`/taches/${id}`, data);
};

const remove = id => {
  return http.delete(`/taches/${id}`);
};

const removeAll = () => {
  return http.delete(`/taches`);
};

const findByTitle = name => {
  return http.get(`/taches?name=${name}`);
};

const TacheService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle
};

export default TacheService;
