import React from "react";
import './HeaderMain.css'
import chair from "../../images/chair.png"
const HeaderMain = () => {
  return (
    <main style={{height:"600px",}} className="row d-flex align-items-center">
   
      
        <div className="col-md-4 offset-md-1">
     <h1  style={{color:"#3a4556", fontWeight:"600"}}>Your New Smile <br/> Start Hare</h1>
     <p>lorem ipsum dolor sit amet, consectetur adip dolor sit amet, consectetur adip</p>
     <button className="btn btn-primary appointment-btn"> Get Appointment</button>
        </div>
       
       <div className="col-md-6">
           <img className="img-fluid" src={chair}></img>
       </div>
    </main>
  );
};

export default HeaderMain;
