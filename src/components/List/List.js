import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Calculation from "../Calculation/Calculation";
import "./List.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const List = (props) => {
  const notify = () => toast("Great Job! Your Workout is Successful");
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
        <img className="photo" src="https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-6/302679426_405059965094937_6044425997672801417_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=v8Oge4BJZhwAX8F9ygY&_nc_ht=scontent.fdac14-1.fna&oh=00_AT-c2KKA77iyRaAOVgdruuGE470dU72b2jjzDanEucK5nQ&oe=633C27DE" alt="" srcset="" />
        <div>
          {/* change this name */}
          <h3>Md.Nabiul Islam Pranto</h3>
          <p>Gulshan, Dhaka</p>
        </div>
      </div>
      <div>
        <table className="table-1">
          <tbody>
            <tr>
              <td>
                <h3>80KG</h3>
              </td>
              <td>
                <h3>5'9"</h3>
              </td>
              <td>
                <h3>24 Years</h3>
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
      <div>
        <button onClick={notify} className='actv-btn'>Activity Completed</button>
        <ToastContainer />
      </div>
    </div>
  );
};

export default List;
