import React from "react";
import moment from "moment";

const nights = (a, b) => {
  const dayOut = moment(a);
  const dayIn = moment(b);
  return dayOut.diff(dayIn, "days");
};

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
          return (
            <tr>
              <td className="dataCentered">{item.id}</td>
              <td>{item.title}</td>
              <td>{item.firstName}</td>
              <td>{item.surname}</td>
              <td>{item.email}</td>
              <td className="dataCentered">{item.roomId}</td>
              <td className="dataCentered">{item.checkInDate}</td>
              <td className="dataCentered">{item.checkOutDate}</td>
              <td className="dataCentered">
                {nights(item.checkOutDate, item.checkInDate)}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default SearchResults;
