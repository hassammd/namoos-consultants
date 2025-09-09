import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import TaxCalculate from "./Pages/TaxCalculate/TaxCalculate";
import Layout from "./Components/Layout";
import About from "./Pages/About/About";

import OurServices from "./Pages/Services/OurServices";
import Contact from "./Pages/Contact/Contact";
import ThankYou from "./Pages/ThankYou/ThankYou";
import NotFound from "./Pages/404/NotFound";

function App() {
  return (
    <>
      <Layout />
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="tax_calculator" element={<TaxCalculate />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<OurServices />} />
          <Route path="contact" element={<Contact />} />
          <Route path="ThankYou" element={<ThankYou />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
