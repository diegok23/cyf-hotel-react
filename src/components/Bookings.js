import React, { useEffect, useState } from "react";
import NewBookings from "./NewBookings.js";
import Search from "./Search.js";
import SearchResults from "./SearchResults";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [initialBookings, setInitialBookings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [order, setOrder] = useState(true);

  const API_URL = "https://cyf-react.glitch.me";
  //const API_URL_DELAY = 'https://cyf-react.glitch.me/delayed';
  //const API_URL_ERROR = 'https://cyf-react.glitch.me/error';

  useEffect(() => {
    setLoading(true);
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        if (data.error) {
          setLoading(false);
          setError(data.error);
        } else {
          setBookings(data);
          setInitialBookings(data);
          setLoading(false);
        }
      })
      .catch(err => {
        console.log(err);
        setError(err.error);
        setLoading(false);
      });
  }, []);

  const search = searchVal => {
    if (searchVal === "") {
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

  const handleAddToBooking = newBooking => {
    setBookings([...bookings, newBooking]);
  };

  const handleSortBookings = key => {
    bookings.sort((a, b) => compare(a, b, key, order));
    setBookings([...bookings]);
  };

  function compare(a, b, key, asc) {
    setOrder(!asc);
    let comparison = 0;
    if (a[key] > b[key]) {
      comparison = 1;
    } else if (a[key] < b[key]) {
      comparison = -1;
    }
    return asc === false ? comparison * -1 : comparison;
  }

  function compareValues(key, order = "asc") {
    return function innerSort(a, b) {
      if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
        return 0;
      }
      const varA = typeof a[key] === "string" ? a[key].toUpperCase() : a[key];
      const varB = typeof b[key] === "string" ? b[key].toUpperCase() : b[key];
      let comparison = 0;
      if (varA > varB) {
        comparison = 1;
      } else if (varA < varB) {
        comparison = -1;
      }
      return order === "desc" ? comparison * -1 : comparison;
    };
  }

  return loading ? (
    <h1 className="loading">Please wait, data is loading...</h1>
  ) : error ? (
    <h1 className="error">{error}</h1>
  ) : (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {
          <SearchResults
            results={bookings}
            onSortBookings={handleSortBookings}
          />
        }
        <NewBookings
          idNumber={bookings.length + 1}
          onAddBooking={handleAddToBooking}
        />
      </div>
    </div>
  );
};

export default Bookings;
