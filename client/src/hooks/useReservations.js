import { useEffect, useState } from "react";

import reservationsAPI from "../api/reservations-api";

export function useGetAllReservations() {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await reservationsAPI.getAll();

      setReservations(result);
    })();
  }, []);

  return [reservations];
}

export function useGetOneReservations(reservationId) {
  const [reservation, setReservation] = useState( {
    name: '',
    phone: '',
    roomType: '',
    checkIn: '',
    checkOut: ''
});
  useEffect(() => {
    (async () => {
      const result = await reservationsAPI.getOne(reservationId);
      setReservation(result);
    })();
  }, [reservationId]);
  
  return [reservation, setReservation];
}

export function useCreateReservation() {
  const reservationCreateHandler = (reservationData) =>
    reservationsAPI.create(reservationData);

  return reservationCreateHandler;
}

