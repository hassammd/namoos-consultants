import {
  faFacebookF,
  faTiktok,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import style from "./Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, Links } from "react-router-dom";
import logo from "../../assets/headerLogo.png";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const mobileNavHandler = (e) => {
    e.preventDefault();
    setIsActive(!isActive);
  };

  console.log(isActive);
  return (
    <nav>
      <div className="container">
        <div className={style.navbar}>
          <Link className={style.logo}>
            <img src={logo} alt="" />
          </Link>

          <ul className={style.navList}>
            <li>
              <Link to="">Home</Link>
            </li>
            <li>
              <Link to="/tax_calculator">Tax Calculators</Link>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Services</a>
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
          <li>
            <Link to="">Home</Link>
          </li>
          <li>
            <Link to="/tax_calculator">Tax Calculators</Link>
          </li>
          <li>
            <a href="">About</a>
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
