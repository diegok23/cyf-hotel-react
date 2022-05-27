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
            <th scope="col" onClick={() => props.onSortBookings("id")}>
              id
            </th>
            <th scope="col" onClick={() => props.onSortBookings("title")}>
              Title
            </th>
            <th scope="col" onClick={() => props.onSortBookings("firstName")}>
              First Name
            </th>
            <th scope="col" onClick={() => props.onSortBookings("surname")}>
              Surname
            </th>
            <th scope="col" onClick={() => props.onSortBookings("email")}>
              Email
            </th>
            <th scope="col" onClick={() => props.onSortBookings("roomId")}>
              Room id
            </th>
            <th scope="col" onClick={() => props.onSortBookings("checkInDate")}>
              Check In Date
            </th>
            <th
              scope="col"
              onClick={() => props.onSortBookings("checkOutDate")}
            >
              Check Out Date
            </th>
            <th scope="col" onClick={() => props.onSortBookings("nights")}>
              Booking Days
            </th>
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
