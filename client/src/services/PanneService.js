import http from "../http-common";

const getAll = () => {
  return http.get("/pannes");
};

const get = id => {
  return http.get(`/pannes/${id}`);
};

const create = data => {
  return http.post("/pannes", data);
};

const update = (id, data) => {
  return http.put(`/pannes/${id}`, data);
};

const remove = id => {
  return http.delete(`/pannes/${id}`);
};

const removeAll = () => {
  return http.delete(`/pannes`);
};

const findByTitle = name => {
  return http.get(`/pannes?name=${name}`);
};

const PanneService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle
};

export default PanneService;
