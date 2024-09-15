import "./Header.css";
import { NavLink } from "react-router-dom";
import logo from "../../images/header-img/logo.svg";
import cart from "../../images/header-img/Cart.svg";

export default function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Логотип" />
      <div className="header__container">
        <div className="header__link-container">
          <NavLink className="header__link" to="/preset">
            Presets
          </NavLink>
          <NavLink className="header__link" to="/prints">
            Prints
          </NavLink>
          <NavLink className="header__link" to="/store">
            Store
          </NavLink>
          <NavLink className="header__link" to="/about">
            About
          </NavLink>
          <NavLink className="header__link" to="/contact">
            Contact
          </NavLink>
        </div>
        <button className="header__button">
          <img className="header__button-icon" src={cart} alt="Корзина" />
          <p className="header__button-text">Cart</p>
          <p className="header__button-counter">0</p>
        </button>
      </div>
    </header>
  );
}
