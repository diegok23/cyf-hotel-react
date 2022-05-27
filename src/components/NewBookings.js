import React, { useState } from "react";
import Bookings from "./Bookings";

const NewBookings = ({ onAddBooking, idNumber }) => {
  const [title, setTitle] = useState("");
  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [room, setRoom] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");

  const handleSubmit = e => {
    e.preventDefault();

    const newBooking = {
      id: idNumber,
      title: title,
      firstName: firstName,
      surname: surname,
      email: email,
      roomId: room,
      checkInDate: checkInDate,
      checkOutDate: checkOutDate
    };

    onAddBooking(newBooking);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        id="title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="First Name"
        id="firstName"
        value={firstName}
        onChange={e => setFirstName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Last Name"
        id="surname"
        value={surname}
        onChange={e => setSurname(e.target.value)}
      />
      <input
        type="text"
        placeholder="Email"
        id="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Room Number"
        id="room"
        value={room}
        onChange={e => setRoom(e.target.value)}
      />
      <input
        type="text"
        placeholder="Check In Date"
        id="checkInDate"
        value={checkInDate}
        onChange={e => setCheckInDate(e.target.value)}
      />
      <input
        type="text"
        placeholder="Check Out Date"
        id="checkOutDate"
        value={checkOutDate}
        onChange={e => setCheckOutDate(e.target.value)}
      />
      <button type="submit" className="btn btn-primary">
        Add new booking
      </button>
    </form>
  );
  console.log({ firstName });
};

export default NewBookings;
