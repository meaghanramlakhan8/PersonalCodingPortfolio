import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-container">
                <div className="nav-logo">
                    Meaghan <span> Ramlakhan </span>
                </div>
                <ul className="nav-menu">
                    <li className="nav-item">
                        <NavLink to="/" exact activeClassName="active-link">
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="About.js" activeClassName="active-link">
                            About
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="nothing.js" activeClassName="active-link">
                            Work
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/contact" activeClassName="active-link">
                            Contact Me
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
