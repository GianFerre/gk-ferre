import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Menu from "./Menu";
import Footer from "./Footer";
import AboutUs from "./AboutUs";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <div className="content">
          <Routes>
            {/* Default to Menu on "/" */}
            <Route path="/" element={<Menu />} />
            <Route path="/about" element={<AboutUs />} />
            {/* Optional: Redirect or handle unmatched routes */}
            <Route path="*" element={<Menu />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
