import "./NavbarMobile.css";
import { Link } from "react-router-dom";
import Cart from "../../resources/icons/Cart";
import { useNavContext } from "../../context/NavbarContext";

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
        <div
          className={showNav ? "showNavMenuLinks" : "none"}
          aria-label="mobile nav menu link page"
        >
          <Link to="/">
            <h3>HOME</h3>
          </Link>
          <Link to="/Products">
            <h3>PRODUCTS</h3>
          </Link>
          <Link to="/Cart">
            <h3>CART</h3>
          </Link>
          <Link to="/Checkout">
            <h3>CHECKOUT</h3>
          </Link>
          <Link to="/">
            <h3>FAQ</h3>
          </Link>
        </div>
      </section>
    </nav>
  );
};

export default NavbarMobile;
