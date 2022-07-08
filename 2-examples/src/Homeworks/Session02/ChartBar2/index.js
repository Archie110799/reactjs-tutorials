import React from "react";
import './styles.css'

function ChartBar2({
  text = "TEXT",
  color = "pink",
  iconName = "fa-solid fa-house",
  percentage = 50,
}) {
  return (
    <div className="div__bar">
      <i className={iconName}></i>
      <span>{text}</span>
      <div className="process__bar">
        <div className="success" style={{ backgroundColor: color, width: (5*percentage) }}>
          {percentage}%
        </div>
      </div>
    </div>
  );
}

export default ChartBar2;
