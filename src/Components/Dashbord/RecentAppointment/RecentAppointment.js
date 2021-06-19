import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";

const RecentAppointment = () => {
  const [allpassant, setAllPassant] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/appointments")
      .then((res) => res.json())
      .then((data) => setAllPassant(data));
  }, []);
  return (
    <div>
    <div className="row" >
        <div className="col-md-2">
        <Sidebar></Sidebar>

        </div>


    <div className="col-md-10 mt-2 ">
        <h3 className="text-left">Dashboard:</h3>
        <table className="table mt-3">
          <thead>
            <tr>

              <th scope="col">Date</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Prescriptions</th>
              <th scope="col">Action</th>

            </tr>
          </thead>
          <tbody>
            {
              allpassant.map(allpassants => (
                <tr>
                  <td>{allpassants.date}</td>
                  <td>{allpassants.name}</td>
                  <td> {allpassants.email} </td>
                  <td> {allpassants.phone} </td>
                  <td>
                      <button  className="btn text-white bg-brand px-2">View</button>
                  </td>
                  <td>
                      <button  className="btn btn-danger px-2">Peinding</button>
                  </td>
                </tr>
              ))
            }
  
          </tbody>
        </table>
      </div>
    </div>
    </div>
        
  );
};

export default RecentAppointment;
