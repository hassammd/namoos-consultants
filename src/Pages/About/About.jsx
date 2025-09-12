import Footer from "../../Components/Footer/Footer";
import style from "./About.module.css";
import Understand from "../../assets/Understand.png";
import strategy from "../../assets/strategy.png";
import Research from "../../assets/Research.png";
import implementation from "../../assets/implementation.png";
import checklist from "../../assets/checklist.png";
import delivery from "../../assets/delivery.png";

const About = () => {
  const steps = [
    {
      title: "Step 1",
      heading: "Understand Needs",
      content:
        "We listen carefully and analyze your goals, challenges, and requirements",
      img: Understand,
    },
    {
      title: "Step 2",
      heading: "Research & Planning",
      content: "We create a clear and based on our research",
      img: Research,
    },
    {
      title: "Step 3",
      heading: "Strategy Development",
      content: "Define actionable steps to achieve your goals",
      img: strategy,
    },
    {
      title: "Step 4",
      heading: "Implementation",
      content: "Execute the strategy according to the plan",
      img: implementation,
    },
    {
      title: "Step 5",
      heading: "Testing & Feedback",
      content: "Test the solution and gather feedback",
      img: checklist,
    },
    {
      title: "Step 6",
      heading: "Delivery & Support",
      content: "Deliver the final and provide ongoing support",
      img: delivery,
    },
  ];

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
            {steps.map((items) => {
              return (
                <div className={style.step_box}>
                  <div className={style.step_box_wrapper}>
                    <div className={style.step_box_wrapper_left}>
                      <div className={style.step_box_icon_wrapper}>
                        <img src={items.img} alt="" />
                      </div>
                      <span>{items.title}</span>
                    </div>
                    <div className={style.step_box_wrapper_right}>
                      <h3>{items.heading}</h3>
                      <p>{items.content}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* footer */}
      <Footer />
    </>
  );
};

export default About;
