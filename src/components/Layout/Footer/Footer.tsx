import React from "react";
import { NavLink } from "react-router-dom";
import FooterStyles from "./FooterStyles";
import Logo from "../../Logo/Logo";
import BionicReading from "../../BionicReading/BionicReading";

const Footer = () => {
  return (
    <FooterStyles>
      <nav className="Footer">
        <Logo className="footer-logo" />
        <ul>
          <li>
            {/*When Home is clicked redirect to the Home page */}
            <NavLink to="/home">
              <BionicReading text={"Home"} as={"a"} />
            </NavLink>
          </li>
          <li>
            {/*When Products is clicked redirect to the Products page */}
            <NavLink to="/products">
              <BionicReading text={"Products"} as={"a"} />
            </NavLink>
          </li>
          <li>
            {/*When Blog is clicked redirect to the Blog page */}
            <NavLink to="/about">
              <BionicReading text={"About Us"} as={"a"} />
            </NavLink>
          </li>
        </ul>
      </nav>
    </FooterStyles>
  );
};
export default Footer;
