import React, { useState } from "react";
import Row from "./Row";
import CustomerProfile from "./CustomerProfile";

const SearchResults = props => {
  const [customerProfileId, setCustomerProfileId] = useState(undefined);

  function handleClickProfile(id) {
    setCustomerProfileId(id);
    console.log(id);
  }

  return (
    <>
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th>id</th>
            <th>Title</th>
            <th>First Name</th>
            <th>Surname</th>
            <th>Email</th>
            <th>Room id</th>
            <th>Check In Date</th>
            <th>Check Out Date</th>
            <th>Booking Days</th>
            <th>Show profile</th>
          </tr>
        </thead>
        <tbody>
          {props.results.map(item => {
            return <Row handleClickProfile={handleClickProfile} data={item} />;
          })}
        </tbody>
      </table>
      <CustomerProfile id={customerProfileId} />
    </>
  );
};

export default SearchResults;
