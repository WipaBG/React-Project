import { useEffect, useState } from "react";

import reservationsAPI from '../api/reservations-api';

export function useGetAllReservations(){
    const [reservations, setReservations] = useState([]);

    useEffect(() => {
        (async () => {
            const result = await reservationsAPI.getAll();

            setReservations(result);
        })();
    }, []);

    return [reservations];
}

export function useGetOneReservations(reservationId){
    const [reservation, setReservation] = useState({});
    

    useEffect(() => {
        (async () => {
           const result = await reservationsAPI.getOne(reservationId)
           setReservation(result);
        })();

        
    },[reservationId]);

    return [reservation, setReservation]
}   