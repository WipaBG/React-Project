import { useEffect, useState } from 'react'
import * as reservationAPI from '../../api/reservations-api'
import ReservationItem from './reservaion-item/ReservationItem';

export default function Reservations() {
    const [reservations, setReservations] = useState([]);

    useEffect(() => {
        reservationAPI.getAll()
            .then(result => setReservations(result))
    }, [])

    return (
        <div className='reservations'>
            <h2>Reservations</h2>
            {reservations.map(reservation => <ReservationItem key={reservation._id}{...reservation} />)}

        </div>
    )
}
