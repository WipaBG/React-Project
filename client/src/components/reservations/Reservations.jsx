export default function Reservations() {
    return (
        <section className="reservations">
            <h1>Make a Reservation</h1>
            <form>
                <label htmlFor="name">Full Name:</label>
                <input type="text" id="name" name="name" required/>

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required/>

                        <label htmlFor="phone">Phone Number:</label>
                        <input type="tel" id="phone" name="phone" required/>

                            <label htmlFor="room-type">Room Type:</label>
                            <select id="room-type" name="room-type" required>
                                <option value="deluxe">Studio</option>
                                <option value="standard">Apartament for Three</option>
                                <option value="standard">Apartament for Four</option>
                                <option value="standard">Sea view apartament</option>
                            </select>

                            <label htmlFor="check-in">Check-In Date:</label>
                            <input type="date" id="check-in" name="check-in" required/>

                                <label htmlFor="check-out">Check-Out Date:</label>
                                <input type="date" id="check-out" name="check-out" required/>

                                    <button type="submit">Reserve</button>
                                </form>
                            </section>
                            )
}