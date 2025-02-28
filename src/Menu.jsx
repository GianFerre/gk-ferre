import React from "react";
import "./Menu.css";
import logo from "./assets/gkFerreLogo.jpg";
import foodItem from "./assets/food-item.png";

export default function Menu() {
  return (
    <>
      <h1 className="center">Menu</h1>
      <div className="menu-grid">
        <h2 className="grid-header">Tub</h2>
        <div className="menu-item">
          <img src={foodItem} alt="Chicken Biryani" />
          <span>Chicken Biryani</span><span>₱185</span>
        </div>
        <div className="menu-item">
          <img src={foodItem} alt="Beef Biryani" />
          <span>Beef Biryani</span><span>₱225</span>
        </div>
        <div className="menu-item">
          <img src={foodItem} alt="Chicken Kabsa" />
          <span>Chicken Kabsa</span><span>₱205</span>
        </div>
        <div className="menu-item">
          <img src={foodItem} alt="Beef Kabsa" />
          <span>Beef Kabsa</span><span>₱250</span>
        </div>
        
        <h2 className="grid-header">Family Treat</h2>
        <div className="menu-item">
          <img src={foodItem} alt="Chicken Biryani" />
          <span>Chicken Biryani</span><span>₱780</span>
        </div>
        <div className="menu-item">
          <img src={foodItem} alt="Mix Beef Chicken" />
          <span>Mix Beef Chicken</span><span>₱880</span>
        </div>
        <div className="menu-item">
          <img src={foodItem} alt="Beef Biryani" />
          <span>Beef Biryani</span><span>₱950</span>
        </div>
        
        <h2 className="grid-header">Party Tray</h2>
        <div className="menu-item">
          <img src={foodItem} alt="Chicken Biryani Party Tray" />
          <span>Chicken Biryani Party Tray</span><span>₱1400</span>
        </div>
        <div className="menu-item">
          <img src={foodItem} alt="Half Chicken Half Beef Party Tray" />
          <span>Half Chicken Half Beef Party Tray</span><span>₱1500</span>
        </div>
        <div className="menu-item">
          <img src={foodItem} alt="Beef Biryani Party Tray" />
          <span>Beef Biryani Party Tray</span><span>₱1600</span>
        </div>
        
        <h2 className="grid-header">Extra</h2>
        <div className="menu-item">
          <img src={foodItem} alt="Garlic Paste" />
          <span>Garlic Paste</span><span>₱13</span>
        </div>
        <div className="menu-item">
          <img src={foodItem} alt="Basmati Rice" />
          <span>Basmati Rice</span><span>₱70</span>
        </div>
        <div className="menu-item">
          <img src={foodItem} alt="Green Chili" />
          <span>Green Chili</span><span>₱10</span>
        </div>
        <div className="menu-item">
          <img src={foodItem} alt="Sauce" />
          <span>Sauce</span><span>₱10</span>
        </div>
        <div className="menu-item">
          <img src={foodItem} alt="Cheese Samosa" />
          <span>Cheese Samosa</span><span>₱130</span>
        </div>
        <div className="menu-item">
          <img src={foodItem} alt="Vegetable Samosa" />
          <span>Vegetable Samosa</span><span>₱130</span>
        </div>
      </div>
    </>
  );
}
