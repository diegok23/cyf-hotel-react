import React from "react";

import Bookings from "./components/Bookings";
import Heading from "./components/Heading";
import Restaurant from "./components/Restaurant";
import TouristInfoCards from "./components/TouristInfoCards";
import Footer from "./components/Footer";
import "./App.css";

const footer = [
  "123 Fake Street, London, E1 4UD",
  "hello@fakehotel.com",
  "0123 456789"
];

const App = () => {
  return (
    <div className="App">
      <Heading />
      <Bookings />
      <TouristInfoCards />
      <Footer contactInfo={footer} />
    </div>
  );
};

export default App;
