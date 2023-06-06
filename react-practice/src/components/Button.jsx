import React from "react";

/**
 * Button
 * @param {*} param a label and clickHandler for the button
 * @returns HTML button element
 */
const Button = ({label, clickHandler}) => {
  return (
    <button
      // className={"btn btn-" + props.colour}
      onClick={() => {
        clickHandler();
      }}
    >
      {label}
    </button>
  );
}

export default Button;
