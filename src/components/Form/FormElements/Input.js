import React from "react";

const Input = ({ label, type, placeholder, name, id, value, handler }) => {
  return (
    <>
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        id={id}
        value={value}
        onChange={(e) => handler(e.target.value)}
        required
      />
    </>
  );
};

export default Input;
