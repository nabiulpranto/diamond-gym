import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Calculation from "../Calculation/Calculation";
import "./List.css";

const List = (props) => {
  const [item, setItem] = useState([]);
  const [time, setTime] = useState([0]);
  useEffect(() => {
    fetch("time.json")
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, []);

  const { list } = props;
  let totalTime = 0;
  for (const item of list) {
    totalTime = totalTime + item.time;
    // setting time in local storage
    localStorage.setItem("time", totalTime);
  }

  let newTime = 0;
  const handleBreakTime = (mytime) => {
    newTime = mytime;
    setTime(newTime);
    // setting time in local storage
    localStorage.setItem("breakTime", newTime);
    Swal.fire(`${newTime} seconds of beak time added`);
  };
  return (
    <div className="list">
      <div className="my-info">
        <img src="../../images/bogura-gym-logo.jpg" alt="Logo" />
        <div>
          {/* change this name */}
          <h3>Jhankar Mahbub</h3>
          <p>Nevada, USA</p>
        </div>
      </div>
      <div>
        <table className="table-1">
          <tbody>
            <tr>
              <td>
                <h3>70KG</h3>
              </td>
              <td>
                <h3>6'0"</h3>
              </td>
              <td>
                <h3>40yrs</h3>
              </td>
            </tr>
            <tr>
              <td>
                <p>Weight</p>
              </td>
              <td>
                <p>Height</p>
              </td>
              <td>
                <p>Age</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div>
        <h2>Add a Break</h2>
      </div>
      <div>
        <div className="break-time-list">
          {item.map((items) => (
            <Calculation
              key={items.id}
              time={items.time}
              handleBreakTime={handleBreakTime}
            ></Calculation>
          ))}
        </div>
      </div>
      <h2>Excersise Details</h2>
      {/* getting time from local storage */}
      <h3>
        Excercise time:{" "}
        {localStorage.getItem("time") ? localStorage.getItem("time") : 0} sec
      </h3>
      <h3>
        Break time:{" "}
        {localStorage.getItem("breakTime")
          ? localStorage.getItem("breakTime")
          : 0}
        sec
      </h3>
      <button className="acticity-btn">
        <p>Activity Completed</p>
      </button>
    </div>
  );
};

export default List;
