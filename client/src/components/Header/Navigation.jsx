import { Link } from 'react-router-dom'
import { useAuthContext } from '../../contexts/AuthContext'

export default function Navigation() {
    const { isAuthenticated } = useAuthContext();

    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                {isAuthenticated ? (
                    <>
                        <li><Link to="/rooms">Rooms</Link></li>
                        <li><Link to="/logout">Logout</Link></li>
                        <li><Link to='/create-reservation'>Reserve</Link></li>
                        <li><Link to='/reservations'>Reservations</Link></li>


                    </>
                ) : (
                    <>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/register">Register</Link></li>

                    </>
                )}

            </ul>
        </nav>

    )
}





