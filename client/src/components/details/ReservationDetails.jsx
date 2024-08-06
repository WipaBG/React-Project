import { Link, useNavigate, useParams } from "react-router-dom"
import { useGetOneReservations } from "../../hooks/useReservations";
import { useAuthContext } from "../../contexts/AuthContext";
import reservationsAPI from "../../api/reservations-api";


export default function ReservationDetails() {
    const { reservationId } = useParams();
    const { userId } = useAuthContext();
    const [reservation, setReservation] = useGetOneReservations(reservationId);
    const navigate = useNavigate();
    const isOwner = userId === reservation._ownerId;

    const reservationDeleteHandler = async () => {
        try {
            const isConfirmed = confirm(`Are you sure you want to cancel your reservation`)
            if (isConfirmed) {
                await reservationsAPI.remove(reservationId);
                navigate('/');
            }
        } catch (err) {
            console.log(err);
        }
    }



    return (

        <div className="reservations">
            <h3>Name: {reservation.name}</h3>
            <p>Phone: {reservation.phone}</p>
            <p>RoomType: {reservation.roomType}</p>
            <p>CheckIn: {reservation.checkIn}</p>
            <p>CheckOut: {reservation.checkOut}</p>

            {isOwner && (
                <div className="button-container">
                    <Link to={`/reservations/${reservationId}/edit`} className="button">Modify reservation</Link>
                    <a href="/" onClick={reservationDeleteHandler} className="button">Cancel reservation</a>
                </div>
            )}

        </div>

    )



}