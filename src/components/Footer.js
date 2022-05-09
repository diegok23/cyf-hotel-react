import React from "react";

const Footer = props => {
  return (
    <ul className="contactInfo">
      {props.contactInfo.map(prop => (
        <li key={prop}>{prop}</li>
      ))}
    </ul>
  );
};

export default Footer;
