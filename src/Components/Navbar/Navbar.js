import { NavLink } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
    return (
        <div className='container'>
            <NavLink to="/" className="left-container">
                <img src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80" alt="Profile" className="logo-img" />
                <div className='line'><h2>Safespace</h2></div>
            </NavLink>

            <nav className="right-container">

                <input type="text" placeholder="Search..." className="search-bar" />
                <NavLink to="/" className="nav-button">Market</NavLink>
                <NavLink to="/about" className="nav-button">About Us</NavLink>
                <NavLink to="/faq" className="nav-button">FAQ</NavLink>

                <NavLink to="/dashboard" className="profile-button">
                    <img src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80" alt="Profile" className="profile-img" />
                </NavLink>

            </nav>

        </div>
    );
};


export default Navbar;
