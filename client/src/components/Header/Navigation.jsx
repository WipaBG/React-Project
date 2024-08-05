import { Link } from 'react-router-dom'
import { useAuthContext } from '../../contexts/AuthContext'
import withAuth from '../../HOC/wtihAuth';

function Navigation({
    auth,
}) {
    // const { isAuthenticated } = useAuthContext;
    const {isAuthenticated} = auth;

    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/rooms">Rooms</Link></li>
                {isAuthenticated ? (
                    <>
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

const EnchancedHeader = withAuth(Navigation);

export default EnchancedHeader;





