import { Link, Links } from "react-router-dom";
import style from "./Footer.module.css";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <>
      <section className={style.footer_section}>
        <div className="container">
          <div className={style.footer_wrapper}>
            <div className={style.footer_logo}>
              <Link>
                <img src={logo} alt="" />
              </Link>
            </div>
            <p>Lahore – Pakistan</p>
            <div className={style.footer_icon}>
              <ul>
                <li>
                  <Link to="https://wa.me/923224600901" target="_blank">
                    <FontAwesomeIcon icon={faWhatsapp} />
                  </Link>
                </li>
                <li>
                  <FontAwesomeIcon icon={faEnvelope} />
                </li>
                <li>
                  <FontAwesomeIcon icon={faPhone} />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* footer bottom */}
      <div className={style.footer_bottom}>
        <div className="container">
          <p>© Copyright 2022 - 2025 | All Rights Reserved</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
