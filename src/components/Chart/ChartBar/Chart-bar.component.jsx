import React from "react";
import "./chart-bar.styles.scss";

const ChartBar = ({ label, value, maxValue }) => {
  let barFillHeight = "0%";
  if (maxValue > 0) {
    barFillHeight = Math.round((value / maxValue) * 100) + "%";
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          styles={{
            height: barFillHeight,
          }}
        ></div>
      </div>
      <div className="char-bar__label">{label}</div>
    </div>
  );
};

export default ChartBar;
