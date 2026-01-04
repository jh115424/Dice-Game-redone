import React from "react";
import "./die.css";

export default function Die(props) {
  const renderDots = () => {
    const dots = [];

    const positions = {
      1: ["center"],
      2: ["top-left", "bottom-right"],
      3: ["top-left", "center", "bottom-right"],
      4: ["top-left", "top-right", "bottom-left", "bottom-right"],
      5: ["top-left", "top-right", "center", "bottom-left", "bottom-right"],
      6: [
        "top-left",
        "top-right",
        "middle-left",
        "middle-right",
        "bottom-left",
        "bottom-right",
      ],
    };

    positions[props.value]?.forEach((pos, index) => {
      dots.push(<div key={index} className={`dot ${pos}`}></div>);
    });

    return dots;
  };

  return (
    <>
      <div className="dieBox">{renderDots()}</div>
    </>
  );
}
