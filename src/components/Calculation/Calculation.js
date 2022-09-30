import React from "react";

const Calculation = (props) => {
  return (
    <div>
      <button
        style={{
          backgroundColor: "white",
          border: "none",
          marginLeft: "0.6vw",
          padding: "0.5vw",
          borderRadius: "5px",
        }}
        onClick={() => props.handleBreakTime(props.time)}
      >
        {props.time}sec
      </button>
    </div>
  );
};

export default Calculation;
