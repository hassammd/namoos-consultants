import { faCheck } from "@fortawesome/free-solid-svg-icons";
import style from "./ThankYou.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

const ThankYou = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className={style.thankyou_header}>
        <div className="container">
          <div className={style.thankyou_header_wrapper}>
            <div className={style.thankyou_icon_wrapper}>
              <span>
                <FontAwesomeIcon icon={faCheck} />
              </span>

              <h1>Thank You!</h1>
              <p>
                Your requiest has been received. Our team will be back to you{" "}
                <br /> shortly
              </p>

              <button onClick={() => navigate("/")}>Back to Home</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default ThankYou;
