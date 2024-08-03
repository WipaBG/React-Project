import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import reservationsAPI from "../../api/reservations-api";
import { useGetOneReservations } from "../../hooks/useReservations";


export default function ReservationDetails() {
    const { reservationId } = useParams();
    const [reservation, setReservation] = useGetOneReservations(reservationId);
    
    return (
        <div className="reservations">
            <h3>Name: {reservation.name}</h3>
            <p>Email: {reservation.email}</p>
            <p>Phone: {reservation.phone}</p>
            <p>RoomType: {reservation.roomType}</p>
            <p>CheckIn: {reservation.checkIn}</p>
            <p>CheckOut: {reservation.checkOut}</p>
        </div>
    )
}