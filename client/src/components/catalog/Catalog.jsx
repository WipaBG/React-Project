import { getAllRooms } from "../../hooks/useCatalog";
import CatalogCard from "./catalog-card/CatalogCards";

export default function Catalog() {
   
    const [rooms] = getAllRooms();
    return (
        <section className="rooms">
            <h1>Our Rooms</h1>
            <div className="gallery">

                {rooms.map(room => <CatalogCard key={room._id}{...room} />)}


            </div>
        </section>
    )
}