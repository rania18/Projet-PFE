import http from "../http-common";

const getAll = () => {
  return http.get("/typepannes");
};

const get = id => {
  return http.get(`/typepannes/${id}`);
};

const create = data => {
  return http.post("/typepannes", data);
};

const update = (id, data) => {
  return http.put(`/typepannes/${id}`, data);
};

const remove = id => {
  return http.delete(`/typepannes/${id}`);
};

const removeAll = () => {
  return http.delete(`/typepannes`);
};

const findByTitle = title => {
  return http.get(`/typepannes?title=${title}`);
};

const TypepanneService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle
};

export default TypepanneService;
