import React, { useState } from "react";

export default function Accordion({ title, content }, key) {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="accordion-item my-3 border border-danger p-3 w-50 m-auto" key={key}>
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div className="text-uppercase font-weight-bold">{title}</div>
      </div>
      {isActive && <div className="accordion-content">{content}</div>}
    </div>
  );
}
