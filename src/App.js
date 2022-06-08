/** @format */

import "./App.css";

import logo from "./assets/img/logo.png";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import Loading from './Loading';
import Homepage from "./Homepage";
import ToursList from "./ToursList";
import TourDetail from "./TourDetail";
function App({ tours }) {
  return (
    <div className="page-wrapper">
      <img src={logo} className="logo" alt="logo" />
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Tourslist" element={<ToursList />} />
          <Route
            path="/Tour-Detail/:id"
            element={<TourDetail tours={tours} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
