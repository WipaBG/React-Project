import { Link } from 'react-router-dom'
import withAuth from '../../HOC/wtihAuth';

function Navigation({
    auth,
}) {
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
                        <li><Link to='/create-reservation'>Check availability</Link></li>
                        <li><Link to='/reservations'>My reservations</Link></li>


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





