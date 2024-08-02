import { Link } from 'react-router-dom'

export default function CatalogCard({
    number,
    capacity,
    img,
    roomType,
    _id,
}) {
    return (
        <>
            <Link to={`/rooms/${_id}/details`}>
                <div className="room">
                    <img src={img} alt="Studio" data-room="Studio" />
                    <h2>{roomType}</h2>
                </div>
            </Link>

        </>
    )
}