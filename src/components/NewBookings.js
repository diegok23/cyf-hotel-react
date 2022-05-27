import React, { useState } from "react";

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

    if (
      title.length > 0 &&
      firstName.length > 0 &&
      surname.length > 0 &&
      email.length > 0 &&
      room.length > 0 &&
      checkInDate.length > 0 &&
      checkOutDate.length > 0
    ) {
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
      setFirstName("");
      setSurname("");
      setEmail("");
      setRoom("");
      setCheckInDate("");
      setCheckOutDate("");
    }
  };

  return (
    <div className="sectionName">
      <h3>New Booking</h3>
      <form className="newBookingForm" onSubmit={handleSubmit}>
        <div>
          <div>
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
          </div>
          <div>
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
          </div>
          <div>
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
          </div>
        </div>
        <div>
          <button type="submit" className="btn btn-primary profile">
            Add new booking
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewBookings;
