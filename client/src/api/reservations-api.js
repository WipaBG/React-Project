import * as request from "./requester";

const BASE_URL = "http://localhost:3030/data/reservations";

const getAll = async () => {
  const result = await request.get(BASE_URL);

  const reservations = Object.values(result);

  return reservations;
};

const getLatest = async () => {
  const urlSearchParams = new URLSearchParams({
    sortBy: "_createdOn desc",
    pageSize: 3, 
  });
  const result = await request.get(`${BASE_URL}?${URLSearchParams.toString()}`);
  const latestGames = Object.values(result);
  return latestGames;
};

const getOne = (reservationId) => request.get(`${BASE_URL}/${reservationId}`);

const create = (reservationData) =>
  request.post(`${BASE_URL}`, reservationData);

const remove = (reservationId) => request.del(`${BASE_URL}/${reservationId}`);

const update = (reservationId, reservationData) =>
  request.put(`${BASE_URL}/${reservationId}`, reservationData);

const reservationsAPI = {
  getAll,
  getOne,
  create,
  remove,
  update,
  getLatest
};

export default reservationsAPI;
