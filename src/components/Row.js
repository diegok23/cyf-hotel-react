import React, { useState } from "react";
import moment from "moment";

const nights = (a, b) => {
  const dayOut = moment(a);
  const dayIn = moment(b);
  return dayOut.diff(dayIn, "days");
};

const Row = props => {
  const [selected, setSelected] = useState(false);

  return (
    <tr
      onClick={() => setSelected(!selected)}
      className={selected ? "selectedRow" : ""}
    >
      <td className="dataCentered">{props.data.id}</td>
      <td>{props.data.title}</td>
      <td>{props.data.firstName}</td>
      <td>{props.data.surname}</td>
      <td>{props.data.email}</td>
      <td className="dataCentered">{props.data.roomId}</td>
      <td className="dataCentered">{props.data.checkInDate}</td>
      <td className="dataCentered">{props.data.checkOutDate}</td>
      <td className="dataCentered">
        {nights(props.data.checkOutDate, props.data.checkInDate)}
      </td>
    </tr>
  );
};

export default Row;
