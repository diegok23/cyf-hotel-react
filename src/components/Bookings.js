import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults";

const Bookings = () => {
  const [initialBookings, setInitialBookings] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_URL = "https://cyf-react.glitch.me";

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        setBookings(data);
        setInitialBookings(data);
      })
      .catch(error => console.log(error));
  }, []);

  const search = searchVal => {
    if (searchVal.lenght === 0) {
      setBookings(initialBookings);
      return;
    }
    const filteredBookings = bookings.filter(
      data =>
        data.firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
        data.surname.toLowerCase().includes(searchVal.toLowerCase())
    );
    setBookings(filteredBookings);
  };

  return loading ? (
    <h1>Loading...</h1>
  ) : (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {<SearchResults results={bookings} />}
      </div>
    </div>
  );
};

export default Bookings;
