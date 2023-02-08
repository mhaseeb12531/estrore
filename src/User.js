import React from "react";

const User = (props) => {
  return (
    <>
      <h1>Name: {props.name}</h1>
      <h1>Age: {props.age}</h1>
      <h1>University: {props.university}</h1>
    </>
  );
};

export default User;
