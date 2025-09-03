import {
  faFacebookF,
  faTiktok,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import style from "./Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, Links } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <div className={style.navbar}>
          <a href="" className={style.logo}>
            Namoos Business{" "}
            <span className={style.consultants}>Consultants</span>
          </a>
          <ul className={style.navList}>
            <li>
              <Link to="">Home</Link>
            </li>
            <li>
              <Link to="/tax_calculator">Tax Calculators 2024-2025</Link>
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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
