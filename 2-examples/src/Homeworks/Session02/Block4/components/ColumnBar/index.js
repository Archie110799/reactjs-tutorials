import React from "react";

function numberWithCommas(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function ColumnBar({ text = "MON", percentage = 50, total = 0, color = 'red' }) {
  return (
    <div style={{ margin: 10 }}>
      <div
        style={{
          border: "1px solid #ccc",
          height: 200,
          position: "relative",
          width: 50,
          margin: 'auto'
        }}
      >
        <div
          className="column"
          style={{
            backgroundColor: color,
            position: "absolute",
            bottom: 0,
            height: 2*percentage,
            width: "100%",
          }}
        ></div>
      </div>

      <span>{text}</span>
      <br></br>
      <span>{numberWithCommas(total)}</span>
    </div>
  );
}

export default ColumnBar;
