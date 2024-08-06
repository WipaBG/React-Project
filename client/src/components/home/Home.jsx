import { useEffect, useState } from "react";
import reservationsAPI from "../../api/reservations-api";
import LatestReservation from "./latest-reservations/LatestRservation";

export default function Home() {
    const [latestReservations, setLatestReservations] = useState([]);

    useEffect(() => {
        (async () => {
            
            const result = await reservationsAPI.getLatest();

            setLatestReservations(result)

        })();
    }, [])

    return (
        <>
            <section className="home">
                <h1>VILLA ALEXA</h1>
                <p>Experience luxury and comfort during your stay with us.</p>
            </section>

            <section className="recent-comments">
                <h1>Recent Reservations</h1>
                <div id="resrvations-container">

                    {latestReservations.length > 0 ?
                        latestReservations.map(reservation => <LatestReservation key={reservation._id}{...reservation} />) :
                        <p>No recent reservations</p>
                    }




                </div>
            </section>

        </>

    )
}

