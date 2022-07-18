import React, { useState } from "react";
import "./styles.css";
import AccordionItem from "./AccordionItem";

const dumpData = [
  { title: "Title 1", content: "Content 1" },
  { title: "Title 2", content: "Content 2" },
  { title: "Title 3", content: "Content 3" },
];

function ListAccordions() {
  const [indexClicked, setIndexClicked] = useState(0);
  return (
    <div>
      {dumpData.map((item, index) => {
        return (
          <AccordionItem indexClicked={indexClicked} key={`item-${index}`} index={index} item={item} />
        );
      })}
    </div>
  );
}

export default ListAccordions;
