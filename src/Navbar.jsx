import React, { useState } from "react";
import "./Navbar.css"; // Import the CSS file for styling
import logo from "./assets/gkFerreLogo.jpg"; // Import the logo

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
        <button className="nav-button">Menu</button>
        <button className="nav-button">About Us</button>
        <button className="nav-button order">Order Now</button>
      </div>
    </nav>
  );
}