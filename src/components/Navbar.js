import React, { useState } from "react"
import {Link, NavLink} from "react-router-dom";
import "./Navbar.css"
import {FaBars, FaTimes} from "react-icons/fa"





function Navbar(){
    const [click, setClick] =useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu =() => setClick(false);




    return (
        <>
        <nav className="navbar">
            <div className="navbar-container container">
                <Link to="/"  className="navbar-logo">
                    Logo
                    </Link>
                 <div className="menu-icon" onClick={handleClick}>
                    {click ? <FaTimes /> : <FaBars />}
                    </div>   
                  <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item">
                        <NavLink to="/" className={({isActive}) => "nav-links" + (isActive ? " activated" : "")} onClick={closeMobileMenu}>
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/About" className={({isActive}) => "nav-links" + (isActive ? " activated" : "")} onClick={closeMobileMenu}>
                            About
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/Contact" className={({isActive}) => "nav-links" + (isActive ? " activated" : "")} onClick={closeMobileMenu}>
                            Contact
                        </NavLink>
                    </li>
                    </ul>  
            </div>

        </nav>

        </>
    )
}

export default Navbar