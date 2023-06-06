import React from "react";

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
