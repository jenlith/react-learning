// import React from "react";
// import { MouseEvent } from "react";

import { useState } from "react";

// interface in typescript
interface Props {
  items: any[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  //useState is a hook - it allows tapping into built-in functions in react. it is composed of the variable (index 0, selectedIndex) and the updater function (index 1, setSelectedIndex)

  /* how to check if there are items and provide different value if there aren't any:
  items.length === 0 ? <p>No items found</p> : null;
  faster implementation:
  items.length === 0 && <p>No item found</p>
  */

  /* event handler:
   const handleClick = (event: MouseEvent) => console.log(event);
  */

  // return html of list group
  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
