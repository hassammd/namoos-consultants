import style from "./TaxCalculater.module.css";
import Header from "../../Components/Header/Header";
import TaxCalculator from "../../Components/TaxCalculator/TaxCalculator";
import Footer from "../../Components/Footer/Footer";

const TaxCalculate = () => {
  return (
    <>
      <section className={style.TaxCalculate}>
        <div className="container">
          <div className={style.TaxCalculate_wrapper}>
            <div>
              <TaxCalculator />
            </div>
            <div></div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default TaxCalculate;
