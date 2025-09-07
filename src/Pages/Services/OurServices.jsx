import { useState } from "react";
import style from "./OurServices.module.css";

const OurServices = () => {
  const [isActive, setIsActive] = useState(0);
  console.log(isActive);
  const tabs = [
    {
      title: "Knowledge",
      content: "Tab1",
    },
    {
      title: "Certified",
      content: "Tab2",
    },
    {
      title: "Satisfaction",
      content: "Tab",
    },
  ];
  return (
    <>
      <section className={style.our_services_section}>
        <div className="container">
          <h1>SERVICES</h1>
        </div>
      </section>

      <section className={style.why_chose_section}>
        <div className="container">
          <h2>WHY CHOOSE US?</h2>

          <div className={style.tabs}></div>
          <div>
            <p>sd</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurServices;
