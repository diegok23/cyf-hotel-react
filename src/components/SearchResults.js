import React from "react";
import Row from "./Row";

const SearchResults = props => {
  return (
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
        </tr>
      </thead>
      <tbody>
        {props.results.map(item => {
          return <Row data={item} />;
        })}
      </tbody>
    </table>
  );
};

export default SearchResults;
