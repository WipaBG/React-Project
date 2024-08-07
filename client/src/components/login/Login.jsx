import { useNavigate } from "react-router-dom";

import { useLogin } from "../../hooks/useAuth"
import { useForm } from "../../hooks/useForm"
import { useState } from "react";

const initialValues = { email: '', password: '' };

export default function Login() {
    const login = useLogin();
    const [error, setError] = useState('')
    const navigate = useNavigate();
    const loginHandler = async ({ email, password }) => {
        try {
            await login(email, password);

            navigate('/');

        } catch (err) {
            setError(err.message);
            console.log(err.message);
        }
    }

    const { values,
        changeHandler,
        submitHandler
    } = useForm(initialValues, loginHandler);


    return (<section className="login">
        <h1>Login</h1>
        <form onSubmit={submitHandler}>
            <label htmlFor="email">Email:</label>
            <input
                type="text"
                id="email"
                name="email"
                value={values.email}
                onChange={changeHandler}
                required />
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password"
                value={values.password}
                onChange={changeHandler}
                required />

            {error &&
                <p className="error">
                    <span>{error}</span>
                </p>
            }
            <button type="submit">Login</button>
        </form>
    </section>
    )
}