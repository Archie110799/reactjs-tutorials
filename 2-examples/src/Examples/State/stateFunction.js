import React, { useState } from "react";

function StateFunction() {
  // Sử dụng state
  const [color, setColor] = useState("Black");

  return (
    <div>
      {color}
      <button onClick={() => setColor("Black")}>Change Black</button>
      <button onClick={() => setColor("Red")}>Change Red</button>
    </div>
  );
}

export default StateFunction;
