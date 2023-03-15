import React from "react";
import NavBarStyles from "./NavBarStyles";
import { NavLink } from "react-router-dom";
import Logo from "../../Logo/Logo";
import DrawerToggle from "../DrawerToggle/DrawerToggle";
import BionicReading from "../../BionicReading/BionicReading";

interface NavBarProps {
  drawerToggleClicked?: () => void;
}

const NavBar = ({ drawerToggleClicked }: NavBarProps) => {
  return (
    <NavBarStyles>
      <div>
        {/*Display Logo top right */}
        <Logo className="nav-logo" />
        {/*When screen size is less than 767px then show Mobile toolbar with hamburger icon */}
        <nav>
          <DrawerToggle clicked={drawerToggleClicked} />
        </nav>
      </div>
      {/*When screen size is greater than 767px then show Desktop toolbar */}
      <div className="desktop-nav">
        <nav>
          {/*Display site's title*/}
          <h1>HolteLines</h1>
          <ul>
            {/*When Home is clicked redirect to the Home page */}
            <li>
              <NavLink to="/home">
                <BionicReading text={"Home"} as={"a"} />
              </NavLink>
            </li>
            {/*When Products is clicked redirect to the Products page */}
            <li>
              <NavLink to="/products">
                <BionicReading text={"Products"} as={"a"} />
              </NavLink>
            </li>
            {/*When Blog is clicked redirect to the Blog page */}
            <li>
              <NavLink to="/about-us">
                <BionicReading text={"About Us"} as={"a"} />
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </NavBarStyles>
  );
};
export default NavBar;
