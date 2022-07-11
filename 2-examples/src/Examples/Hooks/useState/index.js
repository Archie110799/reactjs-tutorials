import React, { useState } from "react";

const getComplicatedColor = () => {
  //   abc..xyz
  return "red";
};
export default function ColorBox() {
  //   const initColor = getComplicatedColor();
  //   const [color, setColor] = useState(initColor);

  const [color, setColor] = useState(() => {
    // You're safe here
    // This function will be called once
    const initColor = getComplicatedColor();
    return initColor;
  });

  // useState là một hook cho phép bạn thêm React state vào function components.
  // Array destructoring syntax
  // Nó nghĩa là bạn đang tạo hai biến mới count và setCount.
  // Trong đó, count là giá trị đầu tiên trả về bởi useState,
  // và setCount là giá trị thứ hai.

  // useState() giúp functional component có thể dùng state.
  // useState() trả về một mảng 2 phần tử [name, setName].
  // useState() áp dụng replacing thay vì merging như bên class component.
  // Initial state callback chỉ thực thi 1 lần đầu.

  // setState() in class component: MERGING
  // this.state = { name: 'Bạn gì đó ơi', color: 'red' };
  // this.setState({ color: 'green' });
  // --> { name: 'Bạn gì đó ơi', color: 'green' }

  //// useState() in functional component: REPLACING
  // const [person, setPerson] = useState({ name: 'Bạn gì đó ơi', color: 'red' });
  // setPerson({ color: 'green' });
  // --> { color: 'green' }

  // useState() in functional component: REPLACING
  // const [person, setPerson] = useState({ name: 'Bạn gì đó ơi', color: 'red' });
  // setPerson({ ...person, color: 'green' });
  // --> { name: 'Bạn gì đó ơi', color: 'green' }

  function handleBoxClick() {
    setColor("green");
  }

  return (
    <div
      className="color-box"
      style={{ backgroundColor: color }}
      onClick={handleBoxClick}
    ></div>
  );
}
