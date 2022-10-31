import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/pages/Home";
import Company from "./components/pages/Company";
import Contact from "./components/pages/Contact";
import NewProject from "./components/pages/NewProject";
import Footer from "./components/layout/Footer";

import logo from "./img/costs_logo.png";

export default function App() {
  return (
    <Router>
      <nav>
        <div className="header">
          <img src={logo} alt="Costs" />
          <div className="menu">
            <Link to="/" className="link">
              HOME
            </Link>
            <Link to="/company" className="link">
              COMPANY
            </Link>
            <Link to="/contact" className="link">
              CONTACT
            </Link>
            <Link to="/newproject" className="link">
              NEW PROJECT
            </Link>
          </div>
        </div>
      </nav>
      <div className="title">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/company" element={<Company />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/newproject" element={<NewProject />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}
