import { useNavigate } from "react-router-dom";

import { useForm } from "../../hooks/useForm"
import { useCreateReservation } from "../../hooks/useReservations";

const intitialValues = {
    name: '',
    phone: '',
    roomType: '',
    checkIn: '',
    checkOut: ''
}
export default function CreateReservation() {
    const navigate = useNavigate();
    const createReservation = useCreateReservation();

    const createHandler = async (values) => {
        try {
            const { _id: resevationId } = await createReservation(values);
            navigate(`/reservations/${resevationId}/details`)

        }catch(err){
            //Set error state and display error
            console.log(err.message)
        }
    }

    const { values,
        changeHandler,
        submitHandler

    } = useForm(intitialValues, createHandler);



    return (
        <section className="reservations">
            <h1>Make a Reservation</h1>
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

                <button type="submit">Reserve</button>
            </form>
        </section>
    )
}