export default function CreateReservation() {
    return (
        <section className="reservations">
            <h1>Make a Reservation</h1>
            <form>
                <label htmlFor="name">Full Name:</label>
                <input type="text" id="name" name="name" required />


                <label htmlFor="phone">Phone Number:</label>
                <input type="tel" id="phone" name="phone" required />

                <label htmlFor="roomType">Room Type:</label>
                <select id="roomType" name="roomType" required>
                    <option value="Studio">Studio</option>
                    <option value="apForThree">Apartament for Three</option>
                    <option value="apForFour">Apartament for Four</option>
                    <option value="seaView">Sea view apartament</option>
                </select>

                <label htmlFor="checkIn">Check-In Date:</label>
                <input type="date" id="checkIn" name="checkIn" required />

                <label htmlFor="checkOut">Check-Out Date:</label>
                <input type="date" id="checkOut" name="checkOut" required />

                <button type="submit">Reserve</button>
            </form>
        </section>
    )
}