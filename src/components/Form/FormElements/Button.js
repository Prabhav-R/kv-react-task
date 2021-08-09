import React from "react";

const Button = ({ type = "submit", id, text }) => {
  return (
    <button type={type} id={id}>
      {text}
    </button>
  );
};

export default Button;
