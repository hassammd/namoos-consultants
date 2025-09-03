import Achievements from "../../Components/Achievements/Achievements";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Navbar from "../../Components/Navbar/Navbar";
import QuoteSection from "../../Components/Quote/QuoteSection";
import Services from "../../Components/Services/Services";
import TaxCalculator from "../../Components/TaxCalculator/TaxCalculator";
import style from "./Home.module.css";

const Home = () => {
  const banner = [
    {
      title: "20+ YEARS OF TEAM EXPERIENCE",
      subtitle:
        "Ahmad Numan Tahir is a dynamic firm of chartered accountants in Pakistan, providing auditing, accounting, tax consultancy, and advisory services with a strong focus on delivering the highest quality service to clients. Our partner and professional staff bring diversified experience from reputed audit firms and industry.",
      button_text: "Request a quote",
    },
  ];
  return (
    <>
      {banner.map((items) => {
        return (
          <Header
            title={items.title}
            subtitle={items.subtitle}
            button_text={items.button_text}
          />
        );
      })}

      <Achievements />
      <QuoteSection />
      <Services />
      <Footer />
    </>
  );
};

export default Home;
