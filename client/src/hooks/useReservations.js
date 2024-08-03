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