import React from "react";
import "./Terms.css"
import KidDantle from "../../images/Mask Group 3.png";
const Terms = () => {
  return (
    <section className="Terms-sec  mt-5 p-5" >
        <div className="container">
      <div className="row">
        <div className="col-md-6 terms-img">
          <img style={{width: "70%"}} className="img-fluid" src={KidDantle} />
        </div>
        <div className="col-md-6 ">
            <div className="terms-contant">
          <h1>
            Exeptional Dentle
            <br /> Care,on you Terms
          </h1>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters,  the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opp
          </p>
        </div>
        <div className="terms-btn">
          <button className=" btn btn-danger appointment-btn ">Learn More</button>

        </div>
        </div>
       
      </div>
    </div>
    </section>
  );
};

export default Terms;
