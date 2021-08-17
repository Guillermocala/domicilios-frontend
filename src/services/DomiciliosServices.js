import http from "./http-common";

const getAll = () => {
  return http.get("/domicilios");
};

const get = (id) => {
  return http.get(`/domicilios/${id}`);
};

const create = (data) => {
  return http.post("/domicilios", data);
};

const update = (id, data) => {
  return http.put(`/domicilios/${id}`, data);
};
//no eliminamos, pero la dejamos por si acaso
const remove = id => {
  return http.delete(`/domicilios/${id}`);
};

export default {
  getAll,
  get,
  create,
  update,
  remove
};
