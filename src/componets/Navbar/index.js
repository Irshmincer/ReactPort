import React from 'react';
import {Nav, NavLink, Bars, NavMenu, NavBtnLink, NavBtn} from './NavbarElement'

const Navbar = () => {
  return (
    <>
    <Nav>
      <NavLink to="/">
        <h1>Logo</h1>
      </NavLink>
      <Bars />
      <NavMenu>
        <NavLink to="/about" activestyle="true">
          About
        </NavLink>
        <NavLink to="/pricing" activestyle="true">
          pricing
        </NavLink>
        <NavLink to="/contact-us" activestyle="true">
          Contact Us
        </NavLink>
        <NavLink to="/sign-up" activestyle="true">
          Sign Up
        </NavLink>
        </NavMenu>
    <NavBtn>
      <NavBtnLink to="/sign-in">
        Sign In
      </NavBtnLink>
    </NavBtn>

    </Nav>
    </>
  );
}

export default Navbar