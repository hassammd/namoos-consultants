import Card from "../Card/Card";
import style from "./Service.module.css";

const Services = () => {
  const servicesList = [
    {
      title: "ASSURANCE",
      point1: "Statutory Audit",
      point2: "Special Audit",
      point3: "Cost Audit",
      point4: "Internal Audit",
      point5: "Management Audit",
    },
    {
      title: "ACCOUNTING",
      point1: "Accounting Services",
      point2: "Financial Statements",
      point3: "Cost Audit",
      point4: "Management Reports",
      point5: "Payroll Services",
    },
    {
      title: "TAXATION",
      point1: "Income & Sales Tax Filing",
      point2: "Tax Consultancy & Advisory",
      point3: "Sales Tax Register Maintenance",
      point4: "Income Tax Tribunal Representation",
      point5: "Expert advice on personal taxes",
    },
  ];
  return (
    <>
      <section className={style.Services_section}>
        <div className="container">
          <div className={style.services_wrapper}>
            <h2>Our Services</h2>
          </div>
          <div className={style.Services_card}>
            {servicesList.map((items) => {
              return (
                <Card
                  title={items.title}
                  point1={items.point1}
                  point2={items.point2}
                  point3={items.point3}
                  point4={items.point4}
                  point5={items.point5}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
