import { useNavigate } from "react-router-dom";

import { useLogin } from "../../hooks/useAuth"
import { useForm } from "../../hooks/useForm"

export default function Login() {
    const login = useLogin();
    
    const navigate = useNavigate(); 

    const { values, changeHandler, submitHandler } = useForm(
        { email: '', password: '' },
        ({ email, password }) => login(email, password),
    );


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
            <button type="submit">Login</button>
        </form>
    </section>
    )
}