import React from "react";
import NavBarStyles from "./NavBarStyles";
import { NavLink } from "react-router-dom";
import Logo from "../../Logo/Logo";

const NavBar = () => {
  return (
    <NavBarStyles>
      <div>
        {/*Display Logo top right */}
        <Logo className="header-logo" />
        {/*When screen size is less than 767px then show Mobile toolbar with hamburger icon */}
        {/*<nav className="mobile-header">*/}
        {/*  <DrawerToggle clicked={drawerToggleClicked} />*/}
        {/*</nav>*/}
      </div>
      {/*When screen size is greater than 767px then show Desktop toolbar */}
      <nav>
        {/*Display site's title*/}
        <h1>HolteLines</h1>
        <ul>
          {/*When Home is clicked redirect to the Home page */}
          <li>
            <NavLink to="/home">Home</NavLink>
          </li>
          {/*When Products is clicked redirect to the Products page */}
          <li>
            <NavLink to="/products">Products</NavLink>
          </li>
          {/*When Blog is clicked redirect to the Blog page */}
          <li>
            <NavLink to="/about-us">About Us</NavLink>
          </li>
        </ul>
      </nav>
    </NavBarStyles>
  );
};
export default NavBar;
