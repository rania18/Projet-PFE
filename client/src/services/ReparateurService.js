import http from "../http-common";

const getAll = () => {
  return http.get("/reparateurs");
};

const get = id => {
  return http.get(`/reparateurs/${id}`);
};

const create = data => {console.log(data)
  return http.post("/reparateurs", data);
  
};

const update = (id, data) => {
  return http.put(`/reparateurs/${id}`, data);
};

const remove = id => {
  return http.delete(`/reparateurs/${id}`);
};

const removeAll = () => {
  return http.delete(`/reparateurs`);
};

const findByTitle = nom => {
  return http.get(`/reparateurs?nom=${nom}`);
};

const ReparateurService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle
};

export default ReparateurService;
