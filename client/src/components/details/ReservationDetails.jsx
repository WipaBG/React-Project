import { useParams } from "react-router-dom"
import { useGetOneReservations } from "../../hooks/useReservations";
import { useAuthContext } from "../../contexts/AuthContext";


export default function ReservationDetails() {
    const { reservationId } = useParams();
    const { userId } = useAuthContext();
    const [reservation, setReservation] = useGetOneReservations(reservationId);

    const isOwner = userId === reservation._ownerId;

    if(isOwner){
        return (
                
            <div className="reservations">
                <h3>Name: {reservation.name}</h3>
                <p>Phone: {reservation.phone}</p>
                <p>RoomType: {reservation.roomType}</p>
                <p>CheckIn: {reservation.checkIn}</p>
                <p>CheckOut: {reservation.checkOut}</p>
    
                {isOwner && (
                    <div className="button-container">
                        <a href="" className="button">Edit</a>
                        <a href="" className="button">Delete</a>
                    </div>
                )}
    
            </div>
    
        )
    }else{

    }

   
}