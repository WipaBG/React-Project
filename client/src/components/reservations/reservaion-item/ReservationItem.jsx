import { Link } from 'react-router-dom'

export default function ReservationItem({
    _id,
    name,
    phone,
    roomType,
    checkIn,
    checkOut

}) {
    return (
        <Link to={`/reservations/${_id}/details`}>  
                <div className="reservations">
                    <div className="allReservations-info">
                        <h2>Name: {name}</h2>
                        <p>Room type: {roomType}</p>
                        <p>Period: {checkIn}-{checkOut}</p>
                        <p>Phone number: {phone}</p>

                    </div>
                </div>

        </Link>
    )
}