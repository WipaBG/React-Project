export default function Rooms() {
    return (
        <section className="rooms">
            <h1>Our Rooms</h1>
            <div className="gallery">
                <div className="room">
                    <img src="../../public/img/StudioPh.jpg" alt="Studio" data-room="Studio"/>
                        <h2>Studio</h2>
                </div>
                <div className="room">
                    <img src="../../public/img/ApForThree.png" alt="Deluxe Room" data-room="deluxe"/>
                        <h2>Apartaments for three</h2>
                </div>
                <div className="room">
                    <img src="../../public/img/ApForFour.png" alt="Standard Room" data-room="standard"/>
                        <h2>Apartaments for four</h2>
                </div>
                <div className="room">
                    <img src="../../public/img/SeaView.png" alt="Deluxe Room" data-room="deluxe"/>
                        <h2>Sea view apartemnts</h2>
                </div>
            </div>
        </section>
    )
}