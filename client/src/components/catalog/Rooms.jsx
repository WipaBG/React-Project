import { useState, useEffect } from "react";
import roomsApi from "../../api/rooms-api";
import CatalogCard from "./catalog-card/CatalogCards";

export default function Rooms() {
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        (async () => {
            const result = await roomsApi.getAll();

            setRooms(result);
        })();
        roomsApi.getAll()
            .then(result => setRooms(result))
    }, []);

    return (
        <section className="rooms">
            <h1>Our Rooms</h1>
            <div className="gallery">

                {rooms.map(room=><CatalogCard key={room._id}{...room} />)}


            </div>
        </section>
    )
}