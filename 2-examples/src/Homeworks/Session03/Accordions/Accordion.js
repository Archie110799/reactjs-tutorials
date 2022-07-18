import React, { useState } from "react";

export default function Accordion(props) {
  const { item, index, isActiveProps } = props;
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div className="text-uppercase font-weight-bold">{item?.title}</div>
      </div>
      
      {/* {isActiveProps === index && (
        <div className={`accordion-content`}>{item?.content}</div>
      )} */}
      {/* {isActive && (
        <div className={`accordion-content`}>{item?.content}</div>
      )} */}
    </>
  );
}
