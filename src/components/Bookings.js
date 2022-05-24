import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [initialBookings, setInitialBookings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_URL = "https://cyf-react.glitch.me";
  const API_URL_DELAY = "https://cyf-react.glitch.me/delayed";
  const API_URL_ERROR = "https://cyf-react.glitch.me/error";

  useEffect(() => {
    setLoading(true);
    fetch(API_URL_DELAY)
      .then(res => res.json())
      .then(data => {
        setBookings(data);
        setInitialBookings(data);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setError(err.error);
        setLoading(false);
      });
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
    <h1 className="loading">Please wait, data is loading...</h1>
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
