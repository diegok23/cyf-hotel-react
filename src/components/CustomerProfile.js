import React, { useState, useEffect } from "react";

const CustomerProfile = ({ id }) => {
  const [customer, setCustomer] = useState({});
  const CUSTOMER_API = "https://cyf-react.glitch.me/customers/";

  useEffect(() => {
    fetch(CUSTOMER_API + id)
      .then(res => res.json())
      .then(json => setCustomer(json));
  }, [id]);

  return (
    <ul>
      <li>Customer ID: {customer.id}</li>
      <li>Email: {customer.email}</li>
      <li>VIP: {customer.vip ? "Yes" : "No"}</li>
      <li>Phone Number: {customer.phoneNumber}</li>
    </ul>
  );
};

export default CustomerProfile;
