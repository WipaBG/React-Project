import { Link } from 'react-router-dom'

export default function Navigation() {
    return (
        <nav>
            <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/rooms">Rooms</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">Register</Link></li>
                    <li><Link to="/logout">Logout</Link></li>
                    <li><Link to ='/create-reservation'>Reserve</Link></li>
                    <li><Link to ='/reservations'>Reservations</Link></li>




            </ul>
        </nav>

    )
}





