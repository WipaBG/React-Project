import { useGetAllReservations } from '../../hooks/useReservations';
import ReservationItem from './reservaion-item/ReservationItem';

export default function Reservations() {
    const [reservations] = useGetAllReservations();

    return (
        <div className='reservations'>
            <h2>Reservations</h2>
            {reservations.length > 0 ?
                reservations.map(reservation => <ReservationItem key={reservation._id}{...reservation} />)
                : <h3>No reservations yet</h3>
            }


        </div>

    )
}
