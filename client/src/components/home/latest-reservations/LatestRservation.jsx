export default function LatestReservation({
    _id,
    name,
    roomType,
    checkIn,
    checkOut

}) {

    return (

        <div className="reservation">
            <p><strong>{name}</strong> reserved a/an {roomType}  </p>
            <p><small>From {checkIn} to {checkOut}</small></p>
        </div>
    )


}