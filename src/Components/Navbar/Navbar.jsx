import {
  faFacebookF,
  faTiktok,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import style from "./Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import logo from "../../assets/headerLogo.png";
import blackLogo from "../../assets/logo.png";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const stickyHandler = () => {
      if (window.scrollY > 10) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", stickyHandler);
    return () => {
      window.removeEventListener("scroll", stickyHandler);
    };
  }, []);

  const mobileNavHandler = (e) => {
    e.preventDefault();
    setIsActive(!isActive);
  };

  //closes mobile nav
  const closeNav = () => {
    setIsActive(false);
  };
  return (
    <nav className={`${isSticky ? style.sticky : ""}`}>
      <div className="container">
        <div className={style.navbar}>
          <NavLink className={style.logo}>
            <img src={`${isSticky ? blackLogo : logo}`} alt="" />
          </NavLink>

          <ul className={style.navList}>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? style.active : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/tax_calculator"
                className={({ isActive }) => (isActive ? style.active : "")}
              >
                Tax Calculator
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? style.active : "")}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className={({ isActive }) => (isActive ? style.active : "")}
              >
                Services
              </NavLink>
            </li>
          </ul>
          <div>
            <button className={style.contact_btn}>Contact Us</button>
          </div>
          {/* <ul className={style.Icons_navList}>
            <li>
              <FontAwesomeIcon icon={faFacebookF} />
            </li>
            <li>
              <FontAwesomeIcon icon={faYoutube} />
            </li>
            <li>
              <FontAwesomeIcon icon={faTiktok} />
            </li>
          </ul> */}
          <div className={style.bar_icon} onClick={mobileNavHandler}>
            {isActive ? (
              <FontAwesomeIcon icon={faXmark} />
            ) : (
              <FontAwesomeIcon icon={faBars} />
            )}
          </div>
        </div>
      </div>
      {isActive ? (
        <ul className={style.mobileNavList}>
          <li onClick={closeNav}>
            <NavLink to="">Home</NavLink>
          </li>
          <li onClick={closeNav}>
            <NavLink to="/tax_calculator">Tax Calculators</NavLink>
          </li>
          <li onClick={closeNav}>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <a href="">Services</a>
          </li>
        </ul>
      ) : (
        ""
      )}
    </nav>
  );
};

export default Navbar;
