import React from "react";
import PropTypes from "prop-types";
import "./styles.css";
import ColumnBar from "./components/ColumnBar";

const MIN = 0;
const MAX = 100;

function Block4({
  text = "VISSITORS",
  total = 0,
  unit = "",
  percentageItems = [50, 50, 50, 50, 50],
}) {
  const randomColor = "#" + (((1 << 24) * Math.random()) | 0).toString(16);
  const color = ["red", "green", "yellow", "blue", "orange"];
  return (
    <div className="div__bar4">
      <ColumnBar
        text="MON"
        percentage={percentageItems[0]}
        total={1234121}
        color={color[0]}
      />
      <ColumnBar
        text="TUE"
        percentage={percentageItems[1]}
        total={1234}
        color={color[1]}
      />
      <ColumnBar
        text="WED"
        percentage={percentageItems[2]}
        total={12321}
        color={color[2]}
      />
      <ColumnBar
        text="THU"
        percentage={percentageItems[3]}
        total={1234121}
        color={color[3]}
      />
      <ColumnBar text="FRI" percentage={percentageItems[4]} color={color[4]} />
    </div>
  );
}

Block4.propTypes = {
  percentage: PropTypes.number,
};

Block4.defaultProps = {
  percentage: 50,
};

export default Block4;
