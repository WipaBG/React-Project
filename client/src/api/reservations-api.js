import * as request from "./requester";

const BASE_URL = "http://localhost:3030/jsonstore/reservations";

 const getAll = async () => {
  const result = await request.get(BASE_URL);

  const reservations = Object.values(result);

  return reservations;
};

 const getOne =  (reservationId) => request.get(`${BASE_URL}/${reservationId}`);;

const reservationsAPI = {
  getAll,
  getOne,
};

export default reservationsAPI;
