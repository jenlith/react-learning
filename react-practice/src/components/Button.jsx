import React from "react";
/**
 * Custom button element
 *
 * Props:
 * - item: label
 * - colour: button colour
 * - clickHandler: onClick function
 * @param {*} props All items that can be used by Button
 * @returns Button component
 */
function Button(props) {
  return (
    <button
      className={"btn btn-" + props.colour}
      onClick={() => {
        props.clickHandler(props.item);
      }}
    >
      {props.item}
    </button>
  );
}

export default Button;
