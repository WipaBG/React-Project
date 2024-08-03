import * as request from "./requester";

const BASE_URL = "http://localhost:3030/data/reservations";

const getAll = async () => {
  const result = await request.get(BASE_URL);

  const reservations = Object.values(result);

  return reservations;
};

const getOne = (reservationId) => request.get(`${BASE_URL}/${reservationId}`);

const create = (reservationData) =>
  request.post(`${BASE_URL}`, reservationData);


const reservationsAPI = {
  getAll,
  getOne,
  create,
};

export default reservationsAPI;
