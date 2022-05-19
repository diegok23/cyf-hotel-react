import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults";
import FakeBookings from "../data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch("https://cyf-react.glitch.me")
      .then(res => res.json())
      .then(data => {
        setBookings(data);
      })
      .catch(error => console.log(error));
    //      setBookings(FakeBookings)
  }, []);

  const search = searchVal => {
    //console.info('TO DO!', searchVal);
    const filteredBookings = bookings.filter(
      data =>
        data.firstName.toLowerCase() === searchVal.toLowerCase() ||
        data.surname.toLowerCase() === searchVal.toLowerCase()
    );
    console.log(filteredBookings);
    return setBookings(filteredBookings);
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {<SearchResults results={bookings} />}
      </div>
    </div>
  );
};

export default Bookings;
