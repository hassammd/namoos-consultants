import Footer from "../../Components/Footer/Footer";
import style from "./About.module.css";
const About = () => {
  return (
    <>
      <section className={style.about_section}>
        <div className="container">
          <h1> Namoos Business Consultants</h1>

          <p>
            At Namoos Business Consultants, we help businesses grow with
            confidence. Led by Ahmad Numan Tahir (Chartered Accountant), our
            firm specializes in auditing, accounting, tax consultancy, and
            business advisory. With expertise from top audit firms and
            industries, we deliver trusted, value-driven solutions for every
            client.
          </p>
        </div>
      </section>

      <section className={style.approach_section}>
        <div className="container">
          <h2>Our Approach</h2>
          <p>
            At Namoos Business Consultants, led by Ahmad Numan Tahir (Chartered
            Accountant), we follow a comprehensive and client-focused approach
            to deliver exceptional results. Our goal is to build long-term
            relationships while providing reliable, tailored, and professional
            solutions.
          </p>
        </div>
      </section>

      <section className={style.how_we_word}>
        <div className="container">
          <h2>How We Work</h2>

          <div className={style.steps_section}>
            <div className={style.step_box}>
              <span>Step 1</span>
              <h3>Understand Needs</h3>
              <p>
                We listen carefully and analyze your goals, challenges, and
                requirements
              </p>
            </div>
            <div className={style.step_box}>
              <span>Step 2</span>
              <h3>Plan & Strategize</h3>
              <p>A customized roadmap is created to ensure smooth execution</p>
            </div>
            <div className={style.step_box}>
              <span>Step 3</span>
              <h3>Analyze & Assess</h3>
              <p>
                Detailed assessment to identify opportunities, risks, and
                solutions
              </p>
            </div>

            <div className={style.step_box}>
              <span>Step 4</span>
              <h3>Report & Recommend</h3>
              <p>
                We share transparent reports with actionable insights and
                advice.
              </p>
            </div>
            <div className={style.step_box}>
              <span>Step 5</span>
              <h3>Report & Recommend</h3>
              <p>
                We share transparent reports with actionable insights and
                advice.
              </p>
            </div>
            <div className={style.step_box}>
              <span>Step 5</span>
              <h3>Evaluate & Improve</h3>
              <p>Continuous monitoring to ensure lasting results and growth.</p>
            </div>
          </div>
        </div>
      </section>
      {/* footer */}
      <Footer />
    </>
  );
};

export default About;
