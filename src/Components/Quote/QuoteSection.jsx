import style from "./Quote.module.css";

const QuoteSection = () => {
  return (
    <>
      <section className={style.QuoteSection}>
        <div className="container">
          <div className={style.quote_wrapper}>
            <h3>Request a Quote for our Corporate Services!</h3>
            <button className={style.quote_btn}>Request a quote</button>
          </div>
        </div>
      </section>
    </>
  );
};
export default QuoteSection;
