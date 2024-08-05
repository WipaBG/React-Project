import { act, useEffect ,useReducer } from "react";
import commentsApi from "../api/comments-api";

export function useCreateComment() {
  const createHandler = (roomId, comment, date) =>
  commentsApi.create(roomId, comment, date);

  return createHandler;
}

function commentsReducer(state, action){
  switch (action.type) {
    case 'GET_ALL':
      return action.payload.slice();
    case'ADD_COMMENT':
      return[...state, action.payload]
  
    default:
      return state;
  }


}

export function useGetAllComments(roomId) {
  const [comments, dispatch] = useReducer(commentsReducer, []);

  useEffect(() => {
    (async () => {
      const result = await commentsApi.getAll(roomId);
      dispatch({type: 'GET_ALL', payload:result});
    })();
  }, [roomId]);

  return [comments, dispatch];
}
