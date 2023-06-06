import React from "react";
import Button from "./Button";

/**
 * Menu element
 *
 * Takes a list of items to create a 'Button Menu'
 *
 * @param {*} props All possible props
 * @returns Button elements that function as a menu/navigation
 */
function Menu(props, children) {
  function onButtonClick(item) {
    console.log(item + " clicked");
  }
  return (
    <>
      {props.items.map((item, index) => (
        <Button
          key={item}
          colour="info"
          item={item}
          clickHandler={onButtonClick}
        >
          {item}
        </Button>
      ))}
    </>
  );
}

export default Menu;
