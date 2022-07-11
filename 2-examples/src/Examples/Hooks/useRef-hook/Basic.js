import React from 'react';

function Basic() {
  // reference Là 1 tham chiếu, 
  // chỉ tham chiếu đến 1 giá trị, và giữ giá trị, 
  // k tạo object mới khi re-render
  // ví dụ để tính số lần re-render (cải thiện perfomance)

  // CÔng dụng
  // Lưu trữ 1 tham chiếu
  // Sử dụng để truy vấn 1 element ở trên DOM

  // {
  //   current : 0
  // }
  //
  const refInput = React.useRef(null);
  const obj = {
    current: 0
  }

  
  return (
    <div>
      <button
        onClick={() => {
          refInput?.current?.focus();
        }}
      >
        Click me
      </button>
      <input ref={refInput} />
    </div>
  );
}

export default Basic;
