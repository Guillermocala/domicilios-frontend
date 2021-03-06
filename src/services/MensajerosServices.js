import http from "./http-common";

const getAll = () => {
  return http.get("/mensajeros");
};

const get = (id) => {
  return http.get("/mensajeros/" + id);
};

const create = (data) => {
  return http.post("/mensajeros/addmensajero", data);
};

const update = (id, data) => {
  return http.put("/mensajeros/editmensajero/" + id, data);
};

const remove = (id) => {
  return http.delete("/mensajeros/" + id);
};

export default {
  getAll,
  get,
  create,
  update,
  remove
};
