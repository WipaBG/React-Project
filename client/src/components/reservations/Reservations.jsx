import { useEffect, useState } from 'react'
import * as reservationAPI from '../../api/reservations-api'

export default function Reservations() {
    const [reservations, setReservations] = useState([]);

    useEffect(() => {
        reservationAPI.getAll()
            .then(result => setReservations(result))
    }, [])

    return (
        <>

        </>
    )
}
