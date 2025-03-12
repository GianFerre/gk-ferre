import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link
import "./Navbar.css";
import logo from "./assets/gkFerreLogo.jpg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <img src={logo} alt="Logo" className="logo-image" />
      </div>

      {/* Burger Menu */}
      <button className="burger" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>

      {/* Navigation Buttons */}
      <div className={`nav-buttons ${isOpen ? "open" : ""}`}>
        <Link to="/" className="nav-button" onClick={() => setIsOpen(false)}>
          Menu
        </Link>
        <Link to="/about" className="nav-button" onClick={() => setIsOpen(false)}>
          About Us
        </Link>
        <button className="nav-button order">Order Now</button>
      </div>
    </nav>
  );
}
