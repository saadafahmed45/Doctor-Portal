import React, { useEffect, useState } from "react";
import AppointmentPassant from "../AppointmentPassant/AppointmentPassant";
import RecentAppointment from "../RecentAppointment/RecentAppointment";
import Sidebar from "../Sidebar/Sidebar";

const AllPassant = () => {

  const [allpassant, setAllPassant] = useState([]);
  useEffect(() => {
      fetch('http://localhost:5000/appointments')
      .then(res => res.json())
      .then(data => setAllPassant(data))
  }, []);

    return (
        <div className="container-fluid row " >
           <Sidebar/>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h5 className="text-brand">All Patients</h5>
                <AppointmentPassant allpassant={allpassant} />
                {/* <RecentAppointment allpassant={allpassant} /> */}

            </div>
        </div>
    );
};

export default AllPassant;
