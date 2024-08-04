import { useNavigate } from "react-router-dom";

import { useRegister } from "../../hooks/useAuth"
import { useForm } from "../../hooks/useForm";
import { useState } from "react";

const initialValues = { email: '', password: '', rePassword: '' };

export default function Register() {
    const [error, setError] = useState('');
    const register = useRegister();

    const navigate = useNavigate();

    const registerHandler = async ({ email, password, rePassword }) => {
        if (password !== rePassword) {
            return setError('Passwords do not match');
        }
        try {
            await register(email, password);

            navigate('/');

        } catch (err) {
            setError(err.message);

        }
    }

    const {
        values,
        changeHandler,
        submitHandler
    } = useForm(initialValues, registerHandler)
    return (
        <section className="register">
            <h1>Register</h1>
            <form onSubmit={submitHandler}>
                <label htmlFor="email">Email:</label>
                <input type="text"
                    id="email"
                    name="email"
                    value={values.email}
                    onChange={changeHandler}
                    required />

                <label htmlFor="password">Password:</label>
                <input type="password"
                    id="password"
                    name="password"
                    value={values.password}
                    onChange={changeHandler} required />

                <label htmlFor="email">Repeat password:</label>
                <input type="password"
                    id="rePassword"
                    name="rePassword"
                    value={values.rePassword}
                    onChange={changeHandler}
                    required />


                {error &&
                    <p className="error">
                        <span>{error}</span>
                    </p>
                }

                <button type="submit">Register</button>
            </form>
        </section>
    )
}