import requester from "./requester";

const BASE_URL = "http://localhost:3030/data/comments";

const create =  (roomId, text, date) =>
  requester.post(BASE_URL, { roomId, text, date });

const getAll = (roomId) => {
  const params = new URLSearchParams({
    where: `roomId="${roomId}"`,
    load: `author=_ownerId:users`
  });

  return requester.get(`${BASE_URL}?${params.toString()}`);
};

export default {
  create,
  getAll,
};
