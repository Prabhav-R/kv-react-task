import React from "react";

const Select = ({ label, id, name, options, value, handler }) => {
  return (
    <>
      <label>{label}</label>
      <select
        id={id}
        name={name}
        value={value}
        onChange={(e) => handler(e.target.value)}
        required
      >
        {options.map((option, key) => (
          <option key={key} value={option.value}>
            {option.display}
          </option>
        ))}
      </select>
    </>
  );
};

export default Select;
