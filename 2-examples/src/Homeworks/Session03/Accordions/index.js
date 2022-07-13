import React, { useState } from "react";
import Accordion from "./Accordion";
import "./styles.css";

const Accordions = () => {
  const accordionData = [
    {
      title: "Section 1",
      content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
      laborum cupiditate possimus labore, hic temporibus velit dicta earum
      suscipit commodi eum enim atque at? Et perspiciatis dolore iure
      voluptatem.`,
    },
    {
      title: "Section 2",
      content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
      reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
      quaerat iure quos dolorum accusantium ducimus in illum vero commodi
      pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque
      quidem maiores doloremque est numquam praesentium eos voluptatem amet!
      Repudiandae, mollitia id reprehenderit a ab odit!`,
    },
    {
      title: "Section 3",
      content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
      quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
      dolor ut sequi minus iste? Quas?`,
    },
  ];

  const [isActiveProps, setIsActiveProps] = useState(0);

  return (
    <div>
      <h1>React Accordion</h1>
      <div className="accordion my-3">
        {accordionData.map((item, index) => (
          <div
            onClick={() => setIsActiveProps(index)}
            className="accordion-item border border-danger p-3 w-50 mx-auto rounded"
          >
            state: {isActiveProps} - index: {index}
            {/* <Accordion
              item={item}
              index={index}
              isActiveProps={isActiveProps}
              key={`accordion-${index}`}
            /> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordions;
