import React, { useContext, useEffect, useState } from "react";
import AppointmentByDate from "../AppointmentByDate/AppointmentByDate";
import Sidebar from "../Sidebar/Sidebar";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Dashbord.css";
import { UserContext } from "../../../App";
const containerStyles = {
  //   background: "#ddd",
  height: "700px",
};

const Dashbord = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const [selectedDate, setSelectedDate] = useState(new Date());

  const [appointments, setAppointments] = useState([]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  useEffect(() => {
    fetch("http://localhost:5000/appointmentByDate", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ date: selectedDate , email:loggedInUser.email}),
    })
      .then((res) => res.json())
      .then((data) => setAppointments(data));
  }, [selectedDate]);

  return (
    // <section>
    <div style={containerStyles} className=" row">
      <div className="col-md-2">
        <Sidebar></Sidebar>
      </div>

      <div className="col-md-5 mt-2 cld">
        <h3>Appointment</h3>
        <Calendar onChange={handleDateChange} value={new Date()} />
      </div>
      <div className="col-md-5">
        <AppointmentByDate appointments={appointments}></AppointmentByDate>
      </div>
    </div>

    // </section>
  );
};

export default Dashbord;
