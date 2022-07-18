import React, { useState } from "react";

export default function AccordionItem(props) {
  const { item, index, indexClicked } = props;
  const [isActive, setIsActive] = useState(false);
  return (
    <div
      style={{ height: 100 }}
      className="w-50 m-auto border border-danger rounded"
      key={`item-${index}`}
      onClick={() => setIsActive(!isActive)}
    >
      <div className="title mb-3 font-weight-bold"> {item.title} </div>
      {isActive && <div className="content">{item.content}</div>}
    </div>
  );
}
