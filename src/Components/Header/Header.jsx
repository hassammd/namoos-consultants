import accountVideo from "../../assets/accounts.mp4";
import Navbar from "../Navbar/Navbar";
import TaxCalculator from "../TaxCalculator/TaxCalculator";
import style from "./Header.module.css";
import videoBg from "../../assets/accounts.mp4";

const Header = ({ title, subtitle, button_text }) => {
  return (
    <>
      <div className={style.video_wrapper}>
        <video src={videoBg} autoPlay loop muted />
        <div className="container">
          {/* <Navbar /> */}
          <div className={style.header_wrapper}>
            <h1>{title}</h1>
            <p>{subtitle}</p>
            <button className={style.quote_btn}>{button_text}</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
