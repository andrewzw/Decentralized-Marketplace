import { Link, NavLink } from 'react-router-dom';
import './navbar.css';
const Navbar = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard">Dashboard</NavLink>
                    </li>
                    <li>
                        <NavLink to="/market">Market</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About Us</NavLink>
                    </li>
                    <li>
                        <NavLink to="/faq">FAQ</NavLink>
                    </li>
                </ul>
            </nav>
        </>
    );
};


export default Navbar;