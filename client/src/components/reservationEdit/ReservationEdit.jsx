import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "../../hooks/useForm"
import { useGetOneReservations } from "../../hooks/useReservations";
import reservationsAPI from "../../api/reservations-api";
import { useMemo } from "react";


export default function ReservationEdit() {
    const navigate = useNavigate();
    const { reservationId } = useParams();
    const [reservation, setReservation] = useGetOneReservations(reservationId);
    const {
        changeHandler,
        submitHandler,
        values,
        setValues,
    } = useForm(reservation, async (values) => {
        const isConfirmed = confirm('Are you sure you want to save changes')
        
        if (isConfirmed) {
            const updatedReservation = await reservationsAPI.update(reservationId, values)
            navigate(`/reservations/${reservationId}/details`)
        }
    });



    return (
        <>
            <section className="reservations">
                <h1>Edit yourr eservation</h1>
                <form onSubmit={submitHandler}>
                    <label htmlFor="name">Full Name:</label>
                    <input type="text"
                        id="name"
                        name="name"
                        value={values.name}
                        onChange={changeHandler}
                    />


                    <label htmlFor="phone">Phone Number:</label>
                    <input type="tel"
                        id="phone"
                        name="phone"

                        value={values.phone}
                        onChange={changeHandler}
                    />

                    <label htmlFor="roomType">Room Type:</label>
                    <select id="roomType"
                        name="roomType"
                        value={values.roomType}
                        onChange={changeHandler}
                        required>
                        <option value="Studio">Studio</option>
                        <option value="Apartament for three people">Apartament for Three</option>
                        <option value="Apartament for four people">Apartament for Four</option>
                        <option value="Sea view apartament">Sea view apartament</option>
                    </select>

                    <label htmlFor="checkIn">Check-In Date:</label>
                    <input type="date"
                        id="checkIn"
                        name="checkIn"
                        value={values.checkIn}
                        onChange={changeHandler}

                    />

                    <label htmlFor="checkOut">Check-Out Date:</label>
                    <input type="date"
                        id="checkOut"
                        name="checkOut"
                        value={values.checkOut}
                        onChange={changeHandler}

                    />

                    <button type="submit">Edit reservation</button>
                </form>
            </section>
        </>
    )
}