import http from "../http-common";

const getAll = () => {
  return http.get("/enquetes");
};

const get = id => {
  return http.get(`/enquetes/${id}`);
};

const create = data => {
  return http.post("/enquetes", data);
};

const update = (id, data) => {
  return http.put(`/enquetes/${id}`, data);
};

const remove = id => {
  return http.delete(`/enquetes/${id}`);
};

const removeAll = () => {
  return http.delete(`/enquetes`);
};

const findByTitle = title => {
  return http.get(`/enquetes?title=${title}`);
};

const EnqueteService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle
};

export default EnqueteService;
