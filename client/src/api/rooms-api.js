import * as request from "./requester";

const BASE_URL = "http://localhost:3030/jsonstore/rooms";

export const getAll = async () => {
  const result = await request.get(BASE_URL);

  const rooms = Object.values(result);

  return rooms;
};

export const getOne =  (roomId) => request.get(`${BASE_URL}/${roomId}`);



const roomsApi = {
  getAll,
  getOne,
};

export default roomsApi;
