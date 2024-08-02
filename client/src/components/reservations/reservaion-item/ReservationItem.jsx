export default function ReservationItem({
    name,
    email,
    phone,
    roomType,
    checkIn,
    checkOut

}) {
    return (
        <>
            <div className="reservations">
                <div className="allReservations-info">
                    <h2>Name: {name}</h2>
                    <p>Room type: {roomType}</p>
                    <p>Period: {checkIn}-{checkOut}</p>
                    <p>Phone number: {phone}</p>
                </div>
            </div>
        </>
    )
}