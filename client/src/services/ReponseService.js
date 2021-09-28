import http from "../http-common";

const getAll = () => {
  return http.get("/reponses");
};

const get = id => {
  return http.get(`/reponses/${id}`);
};

const create = data => {
  return http.post("/reponses", data);
};

const update = (id, data) => {
  return http.put(`/reponses/${id}`, data);
};

const remove = id => {
  return http.delete(`/reponses/${id}`);
};

const removeAll = () => {
  return http.delete(`/reponses`);
};

const findByTitle = title => {
  return http.get(`/reponses?title=${title}`);
};

const ReponseService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle
};

export default ReponseService;
