import { Link } from "react-router-dom";
import { useNavContext } from "../../context/NavbarContext";
import Cart from "../../resources/icons/Cart";
import "./NavbarMobile.css";

const NavbarMobile = () => {
  const { showNav, toggleShowNav } = useNavContext();
  return (
    <nav className="navbarMobile">
      
      <div className="navMobileHamburger" onClick={toggleShowNav}>
        <div className={showNav ? "hamburgerOpen" : "hamburgerClosed"}></div>
      </div>

      <section className="navSection" aria-label="home link and icons">
        <div className="homeLinkNav">
          <Link to="/">
            <h3>FUGHESI ink</h3>
          </Link>
        </div>
        <div className="cartIconNav">
          <Cart className="navbarCart" />
        </div>
      </section>
    </nav>
  );
};

export default NavbarMobile;
