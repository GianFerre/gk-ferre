import Navbar from "./Navbar";
import Menu from "./Menu";
import Footer from "./Footer";
import React from "react";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <div className="content">
        <Menu />
      </div>
      <Footer />
    </div>
  );
}

export default App;
