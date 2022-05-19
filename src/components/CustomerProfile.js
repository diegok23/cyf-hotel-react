import React from "react";

const CustomerProfile = props => {
  return props.id ? <>Customer Profile {props.id}</> : <></>;
};

export default CustomerProfile;
