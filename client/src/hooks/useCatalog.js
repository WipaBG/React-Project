import { useEffect, useState } from "react";
import roomsApi from "../api/rooms-api";

export function getAllRooms() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await roomsApi.getAll();

      setRooms(result);
    })();
    roomsApi.getAll().then((result) => setRooms(result));
  }, []);

  return [rooms];
}

export function useGetOneRoom(roomId) {
  const [room, setRoom] = useState({});

  useEffect(() => {
    (async () => {
      const result = await roomsApi.getOne(roomId);

      setRoom(result);
    })();
  }, [roomId]);

  return [room, setRoom];
}
