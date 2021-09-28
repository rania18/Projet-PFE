import http from "../http-common";

const getAll = () => {
  return http.get("/questions");
};

const get = id => {
  return http.get(`/questions/${id}`);
};

const create = data => {
  return http.post("/questions", data);
};

const update = (id, data) => {
  return http.put(`/questions/${id}`, data);
};

const remove = id => {
  return http.delete(`/questions/${id}`);
};

const removeAll = () => {
  return http.delete(`/questions`);
};

const findByTitle = title => {
  return http.get(`/questions?title=${title}`);
};

const QuestionService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle
};

export default QuestionService;
