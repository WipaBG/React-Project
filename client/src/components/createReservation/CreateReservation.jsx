import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { useCreateReservation, useGetAllReservations } from "../../hooks/useReservations";
import { useState } from "react";

const intitialValues = {
    name: '',
    phone: '',
    roomType: 'Studio',
    checkIn: '',
    checkOut: ''
}

const roomCounts = {
    "Studio": 2,
    "Apartament for three people": 2,
    "Apartament for four people": 4,
    "Sea view apartament": 2
}

export default function CreateReservation() {
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const createReservation = useCreateReservation();
    const [allReservations] = useGetAllReservations();

    const createHandler = async (values) => {
        try {
            const overlappingReservations = allReservations.filter(reservation => {
                return reservation.roomType === values.roomType &&
                    ((reservation.checkIn >= values.checkIn && reservation.checkIn < values.checkOut) ||
                        (reservation.checkOut > values.checkIn && reservation.checkOut <= values.checkOut) ||
                        (reservation.checkIn <= values.checkIn && reservation.checkOut >= values.checkOut));
            });

            if (overlappingReservations.length >= roomCounts[values.roomType]) {
                setError("No available rooms for the selected period");
                return;
            }

            const { _id: reservationId } = await createReservation(values);
            navigate(`/reservations/${reservationId}/details`);

        } catch (err) {
            console.log(err.message);
        }
    }

    const { values, changeHandler, submitHandler } = useForm(intitialValues, createHandler);

    return (
        <section className="reservations">
            <h1>Check available dates</h1>
            <form onSubmit={submitHandler}>
                <label htmlFor="name">Full Name:</label>
                <input type="text"
                    id="name"
                    name="name"
                    value={values.name}
                    onChange={changeHandler}
                    required
                />


                <label htmlFor="phone">Phone Number:</label>
                <input type="tel"
                    id="phone"
                    name="phone"

                    value={values.phone}
                    onChange={changeHandler}
                    required />

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

                    required />

                <label htmlFor="checkOut">Check-Out Date:</label>
                <input type="date"
                    id="checkOut"
                    name="checkOut"
                    value={values.checkOut}
                    onChange={changeHandler}

                    required />

                {error &&
                    <p className="error">
                        <span>{error}</span>
                    </p>
                }

                

                <button type="submit">Check</button>
            </form>
        </section>
    )
}