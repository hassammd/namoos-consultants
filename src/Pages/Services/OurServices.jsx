import { useState } from "react";
import style from "./OurServices.module.css";

const OurServices = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [servicesTab, setServicesTab] = useState(0);

  const tabs = [
    {
      title: "Knowledge",
      content:
        "We are Team of Highly Qualified & Experienced Accountants & Finance Professionals. We keep our members up-to-date with laws and practices.",
    },
    {
      title: "Certified",
      content:
        "Our Team Members are having qualification of CA, ACCA & CA (F).",
    },
    {
      title: "Satisfaction",
      content:
        "We have earned the trust and loyalty of many clients who rely on us as their trusted partner.",
    },
  ];

  const servicesTabs = [
    {
      title: "ASSURANCE",
      content:
        "Our audit approach is supported by the core objective of financial statements auditing; which is to express an independent opinion on whether the financial statements as a whole have been prepared in accordance with International Financial Reporting Standards (IFRS) to give a true and fair view of the financial position and results of the entity. To achieve this objective, we perform our audit in accordance with International Standards on Auditing. We focus on obtaining sufficient, reliable and relevant audit evidence to form an opinion. This involves making the best use of resources available to us, the expertise of our professional staff and their time. Given the objective and the diversity of clients we serve, we have developed an audit approach that provides a high degree of flexibility with an emphasis on exercise of professional judgment in performing the audit to meet the specific requirements of each client. Our approach has four key factors:",
    },
    {
      title: "ACCOUNTING",
      content:
        "Our accounting services provide accurate and detailed management information on a timely basis and tailored to the clients’ requirements; ensuring the fact that informed business decisions can be made by the management. We believe that management accounting drives business performance. Our firm has vast experience and expertise of accounting softwares like SAP Business One, Peachtree (sage 50), Quick Books, Tally ERP – 9 and an in house custom built accounting software namely “Back Office”. We have been providing accounting and book keeping services to many clients on these softwares. Our accounting department operates the softwares on behalf of the clients and all the data entries are reviewed by senior level staff before final reflection in the general ledgers. In this way, the general and subsidiary ledgers are maintained from which trial balance is generated and monthly, quarterly, annual or semi-annual financial statements are prepared. Our accounting department personnel also prepare the annual financial statement as per the statutory requirements along-with all relevant disclosures for on-ward submission to regulators. In addition to this, we work closely with our clients to develop the management packs as per their specific requirements. They have a distinctive ‘look and feel’ and are easy to read. These management reporting packs enable our clients to focus on their own expertise and highlight particular areas in the business that are not producing the correct results. The management packs provide comparatives to budget, forecast, prior year (where applicable) and include cash flow forecasting and value-add metrics such as break-even point and profitability by sector. We also provide a comprehensive audit file providing reconciliations of all the balance sheet accounts. We work closely with the external auditors to ensure that all the relevant information required is prepared as per audit standards. This enables the client to negotiate a competitive price for the audit. We discuss all the numbers within accounts in detail with our client and explain anything that requires clarification.",
    },
    {
      title: "TAXATION",
      content: "Our taxation services include:",
    },
    {
      title: "CONSULTANCY",
      content:
        "NBC provides on-going consultancy, advisory and outsourcing services related to the accounting functions involving monthly, quarterly or yearly reporting and review of general ledgers and supporting subsidiary ledgers. We assist the accounting personnel of our clients in meeting their day to day operational needs and provide them the desired technical support and recommend improvements, where necessary. We also provide financial record analysis and a deep insight of the operations through dashboard reporting. We bring our experience in business practices and expertise in delivering complex outsourcing projects. We can do the job better with our knowledge and understanding of the domain. This leads to an increase in productivity and efficiency in the process thereby contributing to the bottom-line of our clients. We ensure that after outsourcing the business processes would free our client energies and enable them to focus on building their brand, invest in research and development and move on to providing higher value added services.",
    },
    {
      title: "INFORMATION TECHNOLOGY",
      content:
        "We implement off the shelf accounting software with the objective to automate all the business operations. The computerized ledger system is fully integrated. This means that when a business transaction is inputted on the computer it is recorded in a number of different accounting records at the same time. We tend to serve our clients with a view that they realise the advantages of a computerized accounting system like",
    },
  ];
  return (
    <>
      <section className={style.our_services_section}>
        <div className="container">
          <h1>SERVICES</h1>
        </div>
      </section>
      {/* WHY CHOOSE US? */}
      <section className={style.why_chose_section}>
        <div className="container">
          <h2>WHY CHOOSE US?</h2>

          <div className={style.tabs}>
            {tabs.map((tabs, index) => {
              return (
                <>
                  <button
                    onClick={() => setActiveTab(index)}
                    className={style.tab_link}
                  >
                    {tabs.title}
                  </button>
                </>
              );
            })}
          </div>
          <div className={style.tab_content}>
            <p>{tabs[activeTab].content}</p>
          </div>
        </div>
      </section>

      {/* service section */}

      <section className={style.services_section}>
        <div className="container">
          <h2>Our Service</h2>

          <div className={style.services_tab}>
            {servicesTabs.map((tabs, index) => {
              return (
                <button
                  onClick={() => setServicesTab(index)}
                  className={style.tab_link}
                >
                  {tabs.title}
                </button>
              );
            })}
          </div>
          <div>
            <p>{servicesTabs[servicesTab].content}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurServices;
