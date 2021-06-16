import React from "react";
import "./Services.css"
import Thooth from "../../images/tooth (1).png";
import Thooth2 from "../../images/tooth.png";
import Dantle from "../../images/001-dental.png";

const Services = () => {
  return (
    <section>
      <div className="container p-5 mt-5">
        <div className=" service-header">
          <h4>Our Services</h4>
          <h1>Services We Provide</h1>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="service-contant">
              <img src={Thooth2}></img>
              <h5>Fluoride Treatment</h5>
              <p>
                lorem ipsum dolor sit lorem, consectetur adipiscing el lorem,
                sed diam nonummy lorem,consectetur adipiscing el lore
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="service-contant">
              <img src={Thooth}></img>
              <h5>Fluoride Treatment</h5>
              <p>
                lorem ipsum dolor sit lorem, consectetur adipiscing el lorem,
                sed diam nonummy lorem,consectetur adipiscing el lore
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="service-contant">
              <img src={Dantle}></img>
              <h5>Fluoride Treatment</h5>
              <p>
                lorem ipsum dolor sit lorem, consectetur adipiscing el lorem,
                sed diam nonummy lorem,consectetur adipiscing el lore
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
