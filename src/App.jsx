import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import TaxCalculate from "./Pages/TaxCalculate/TaxCalculate";
import Layout from "./Components/Layout";

function App() {
  return (
    <>
      <Layout />
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="tax_calculator" element={<TaxCalculate />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
