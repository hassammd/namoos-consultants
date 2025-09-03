import { useState } from "react";
import style from "./TaxCalculator.module.css";
const TaxCalculator = () => {
  const [salary, setSalary] = useState("");
  const [myTax, setMyTax] = useState("");
  const [grossSalary, setGrossSalary] = useState("");
  const [error, setError] = useState("");
  const [appliedTax, setAppliedTax] = useState("");
  const [noTax, setNoTax] = useState("");

  const mySalary = Number(salary);

  const submitHandler = (e) => {
    e.preventDefault();
    if (salary.trim() === "" || isNaN(salary)) {
      setError("Please enter a valid salary amount before calculating. ");
    } else {
      setError("");
    }
    let salaryNum = Number(salary);
    console.log(typeof salaryNum);
    let taxRate = 0;
    if (salary.trim() > 0 && salary <= 50000) {
      setNoTax("No Tax Applied");
    } else if (salary >= 500001 && salary <= 100000) {
      taxRate = 2.5;
    } else if (salary >= 100001 && salary <= 200000) {
      taxRate = 12.5;
    } else if (salary >= 200001 && salary <= 300000) {
      taxRate = 20;
    } else if (salary >= 300001 && salary <= 500000) {
      taxRate = 25;
    } else if (salary >= 500001 && salary <= 1000000) {
      taxRate = 32.5;
    } else if (salary >= 1000000) {
      taxRate = 35;
    }
    setAppliedTax(taxRate);
    let tax = (taxRate * salaryNum) / 100;
    let netSalary = salary - tax;
    setGrossSalary(netSalary);
    setMyTax(tax);
    setTimeout(() => {
      setError("");
    }, 3000);
  };

  return (
    <>
      <section className={style.TaxCalculator_section}>
        <div className="container">
          <div className={style.TaxCalculator_wrapper}>
            <h2>
              Calculate Tax on Your Salary
              <span className={style.heading_color}> Instantly</span>{" "}
            </h2>
            <p>
              Easily calculate your income and salary tax in Pakistan with our
              FBR-approved online tax calculator. Designed for both individuals
              and businesses, it provides fast and accurate annual tax estimates
              in seconds.
            </p>

            <div className={style.Calculator}>
              <div className={style.Calculator_form_wrapper}>
                <div>
                  <h3>Tax Calculator Pakistan 2025-2026</h3>
                  <span>
                    This is latest tax calculator as per 2025-2026 budget
                    presented by government of Pakistan.
                  </span>
                  <form action="" onSubmit={submitHandler}>
                    <input
                      type="text"
                      className={style.salary}
                      placeholder="Your Monthly Salary "
                      onChange={(e) => setSalary(e.target.value)}
                    />
                    <select name="" className={style.salary_month}>
                      <option value="">Monthly</option>
                      <option value="">Yearly</option>
                    </select>

                    <button type="submit">Calculate Tax</button>
                  </form>
                </div>

                <div>
                  {myTax ? (
                    <div className={style.tax_box}>
                      <div>
                        <span>Monthly Income</span>
                        <span>{mySalary.toLocaleString()} PKR</span>
                      </div>
                      <div>
                        <span>Tax Applied</span>
                        <span>{appliedTax}%</span>
                      </div>
                      <div>
                        <span>Monthly Tax</span>
                        <span>{myTax.toLocaleString()} PKR</span>
                      </div>
                      <div>
                        <span>Salary After Tax</span>
                        <span>{grossSalary.toLocaleString()} PKR</span>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>

              <div className={style.notification_box}>
                {error ? <span className={style.error}>{error}</span> : ""}
                {noTax ? <span className={style.noTax}>{noTax}</span> : ""}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TaxCalculator;
