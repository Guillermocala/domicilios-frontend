import http from "./http-common";

const getAll = () => {
  return http.get("/domicilios");
};

const get = (id) => {
  return http.get("/domicilios/" + id);
};

const create = (id, data) => {
  return http.post("/domicilios/adddomicilio/" + id , data);
};

const update = (id, data) => {
  return http.put("/domicilios/editdomicilio/" + id, data);
};

const remove = (id) => {
  return http.delete("/domicilios/" + id);
};

export default {
  getAll,
  get,
  create,
  update,
  remove
};
