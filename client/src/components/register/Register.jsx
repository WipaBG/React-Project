export default function Register() {
    return (
        <section className="register">
            <h1>Register</h1>
            <form>
                <label htmlFor="email">Email:</label>
                <input type="text" id="email" name="email" required />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required />
                <label htmlFor="email">Repeat password:</label>
                <input type="password" id="rePassword" name="rePassword" required />
                <button type="submit">Register</button>
            </form>
        </section>
    )
}