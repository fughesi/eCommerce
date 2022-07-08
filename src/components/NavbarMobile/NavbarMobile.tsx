import { useContext } from "react";
import "./NavbarMobile.css";

const NavbarMobile = () => {
  return (
    <nav className="navbarMobile">
      <div className="navMobileHamburger">
        <div className="hamburgerLine"></div>
      </div>

      <div className="productIconNav"></div>

      <div className="cartIconNav"></div>
    </nav>
  );
};

export default NavbarMobile;
