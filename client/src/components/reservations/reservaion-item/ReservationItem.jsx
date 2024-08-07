import { Link } from 'react-router-dom'
import { useGetOneReservations } from '../../../hooks/useReservations';
import { useAuthContext } from '../../../contexts/AuthContext';

export default function ReservationItem({
    _id,
    name,
    phone,
    roomType,
    checkIn,
    checkOut

}) {
    const [reservation, setReservation] = useGetOneReservations(_id);
    const { userId } = useAuthContext();

    return (
        <>
            {reservation._ownerId === userId &&
                <Link to={`/reservations/${_id}/details`}>
                    <div className="reservation">
                        <div className="allReservations-info">
                            <h2>Name: {name}</h2>
                            <p>Room type: {roomType}</p>
                            <p>Check in: {checkIn}</p>
                            <p>Checl out: {checkOut}</p>
                            <p>Phone number: {phone}</p>
                        </div>
                    </div>

                </Link>}

        </>

    )
}