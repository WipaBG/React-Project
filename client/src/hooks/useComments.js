import { useEffect, useState } from "react";
import commentsApi from "../api/comments-api";

export function useCreateComment() {
  const createHandler = (roomId, comment, date) =>
  commentsApi.create(roomId, comment, date);

  return createHandler;
}

export function useGetAllComments(roomId) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await commentsApi.getAll(roomId);
      setComments(result);
    })();
  }, [roomId]);

  return [comments, setComments];
}
