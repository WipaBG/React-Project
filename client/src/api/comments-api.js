import requester from "./requester";

const BASE_URL = "http://localhost:3030/jsonstore/rooms";
const buildUrl = (roomId) => `${BASE_URL}/${roomId}/comments`;
console.log(buildUrl)

const create = async (roomId, username, text) => requester.post(buildUrl(roomId), { username, text });



const getAll = async (gameId)=>{
  const result = await requester.get(buildUrl(gameId));
  const comments = Object.values(result);

  return comments;

}


export default{
    create,
    getAll
}
