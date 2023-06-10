/*eslint-disable*/
import React from "react";
import PropTypes from "prop-types";

export default function Button({ value, className, handleClick }) {
  return (
    <button
      type="button"
      name={value}
      className={className}
      onClick={handleClick}
    >
      {value}
    </button>
  );
}
