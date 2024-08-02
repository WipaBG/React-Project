export default function Login() {
    return (<section className="login">
        <h1>Login</h1>
        <form>
            <label htmlFor="email">Email:</label>
            <input type="text" id="email" name="email" required />
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
            <button type="submit">Login</button>
        </form>
    </section>
    )
}