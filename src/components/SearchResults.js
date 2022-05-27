import React, { useState } from "react";
import CustomerProfile from "./CustomerProfile";
import Row from "./Row";

const SearchResults = props => {
  const [selectedId, setSelectedId] = useState(undefined);

  return (
    <>
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th scope="col">id</th>
            <th scope="col">Title</th>
            <th scope="col">First Name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room id</th>
            <th scope="col">Check In Date</th>
            <th scope="col">Check Out Date</th>
            <th scope="col">Booking Days</th>
            <th scope="col">Show profile</th>
          </tr>
        </thead>
        <tbody>
          {props.results.map(item => {
            return <Row data={item} setSelectedId={setSelectedId} />;
          })}
        </tbody>
      </table>
      {selectedId ? <CustomerProfile id={selectedId} /> : null}
    </>
  );
};

export default SearchResults;
