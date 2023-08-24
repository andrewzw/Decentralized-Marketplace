import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './navbar.css';
import logo from '../../Assets/logo.png'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchInput, setSearchInput] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
const currentPath = location.pathname;

    const handleSearch = () => {
        if (searchInput.toLowerCase() === "home") {
            navigate("/");
        } else if (searchInput.toLowerCase() === "about") {
            navigate("/about");

        } else if (searchInput.toLowerCase() === "aboutus") {
            navigate("/about");

        } else if (searchInput.toLowerCase() === "about us") {
            navigate("/about");

        } else if (searchInput.toLowerCase() === "dashboard") {
            navigate("/dashboard");
        } else if (searchInput.toLowerCase() === "profile") {
            navigate("/dashboard");
        }else if (searchInput.toLowerCase() === "faq") {
            navigate("/faq");
        } else {
            alert("Page not found! Check your spelling");
        }
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 800) {
                setIsOpen(false);
            }
        };

        // Attach the event listener
        window.addEventListener('resize', handleResize);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []); // Empty dependency array ensures this effect runs once on mount and cleanup on unmount

    return (
        <div className='container'>
            <NavLink to="/" className="left-container">
                <img src={logo} alt="Profile" className="logo-img" />
                <div className='line'><h2>SafeSpace</h2></div>
            </NavLink>

            <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
                ☰
            </button>

            <nav className={`right-container ${isOpen ? 'open' : ''}`}>

                <input
                    type="text"
                    placeholder="Search for a page: Home, About, FAQ, Profile"
                    className="search-bar"
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            handleSearch();
                        }
                    }}
                />


<NavLink to="/" className={`nav-button ${currentPath === '/' ? 'active-tab' : ''}`}>Home</NavLink>
<NavLink to="/about" className={`nav-button ${currentPath === '/about' ? 'active-tab' : ''}`}>About</NavLink>
<NavLink to="/faq" className={`nav-button ${currentPath === '/faq' ? 'active-tab' : ''}`}>FAQ</NavLink>


{isOpen ?
    <NavLink to="/dashboard" className={`nav-button ${currentPath === '/dashboard' ? 'active-tab' : ''}`}>Profile</NavLink>
    :
    <NavLink to="/dashboard" className={`profile-button ${currentPath === '/dashboard' ? 'active-tab' : ''}`}>
        <img src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80" alt="Profile" className="profile-img" />
    </NavLink>
}




            </nav>
        </div>
    );
};

export default Navbar;

