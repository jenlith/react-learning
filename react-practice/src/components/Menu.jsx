import React from "react";
import Button from "./Button";

const Menu = ({ title, names, links, isVertical, toggleVisibility }) => {
  // determine what's included in the menu & how it's displayed
  const displayTitle = title && <h2>{title}</h2>;
  const displayDirection = isVertical === true ? "vertical" : "horizontal";

  // Returning the full menu
  return (
    <div className={"menu " + displayDirection}>
      {displayTitle}
      {names.map((name, index) => (
        <a key={name} href={links[index]} target="_blank">
          {name}
        </a>
      ))}
      <Button label="Close" clickHandler={toggleVisibility} />
    </div>
  );
};

export default Menu;
