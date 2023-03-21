import React, { useState } from "react";
import { MouseEvent } from "react";

interface ListGroupProps {
  items: { id: number; text: string }[];
  heading: string;
}
function ListGroup({ items, heading }: ListGroupProps) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const handleClick = (e: MouseEvent, index: number) => {
    setSelectedIndex(index);
  };

  const getClassName = (index: number) => {
    return index === selectedIndex
      ? "list-group-item active"
      : "list-group-item";
  };

  return (
    <ul className="list-group">
      {items.map((item) => (
        <li
          className={getClassName(item.id)}
          key={item.id}
          onClick={(e) => {
            handleClick(e, item.id);
          }}
        >
          {item.text}
        </li>
      ))}
    </ul>
  );
}

export default ListGroup;
