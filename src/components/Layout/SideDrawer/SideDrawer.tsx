import React from "react";
import { NavLink } from "react-router-dom";
import SideDrawerStyles from "./SideDrawerStyles";
import BionicReading from "../../BionicReading/BionicReading";

//Typed properties
interface SideDrawerProps {
  open: boolean;
  closed: () => void;
}
const SideDrawer = ({ open, closed }: SideDrawerProps) => {
  return (
    //If open is set to true then store SideDrawer is open
    //Custom styling is implemented using styled components
    <SideDrawerStyles
      className={`SideDrawer ${open ? "Open" : "Close"}`}
      onClick={closed}
    >
      {/*Display close button top right and onClick closes the side drawer */}
      <h1 onClick={closed}>X</h1>
      {/*Create Navigational List for SideDrawer menu*/}
      <nav>
        <ul>
          <li>
            {/*When Home is clicked redirect to the Home page */}
            <NavLink to="/">
              <BionicReading text={"Home >"} as={"a"} />
            </NavLink>
          </li>
          {/*When Products is clicked redirect to the Products page */}
          <li>
            <NavLink to="/products">
              <BionicReading text={"Products >"} as={"a"} />
            </NavLink>
          </li>
          {/*When About Us is clicked redirect to the About us page */}
          <li>
            <NavLink to="/about-us">
              <BionicReading text={"About Us >"} as={"a"} />
            </NavLink>
          </li>
           </ul>
      </nav>
    </SideDrawerStyles>
  );
};

export default SideDrawer;
