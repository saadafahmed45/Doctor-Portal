import React from "react";
import "../BusinessInfo/BusinessInfo.css";
import {
  faClock,
  faPhone,
  faMapMarker,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BusinessInfo = () => {
  const infosData = [
    {
      title: "Opening Hours",
      discription: "We Are Open 7 Days",
      icon: faClock,
      background: "primary",
    },
    {
      title: "Visit Our Locations",
      discription: "Broklyn, NY 10083 USA",
      icon: faMapMarker,
      background: "Dark",
    },
    {
      title: "Call Ue Now",
      discription: "+1379437593",
      icon: faPhone,
      background: "primary",
    },
  ];
  return (
    <div className="container">
      <section className="row d-flex align-items-center ">
        <div className="col-md-4 ">
          <div className="info-box">
            <div>
              <FontAwesomeIcon icon={faClock} />
            </div>
            <h6>Opening Hours</h6>
            <p>We Are Open 7 Days</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="info-box" style={{ background: "#3a4556" }}>
            <div>
              <FontAwesomeIcon icon={faMapMarker} />
            </div>
            <h6>Broklyn, NY 10083 USA</h6>
            <p>We Are Open 7 Days</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="info-box">
            <div>
              <FontAwesomeIcon icon={faPhone} />
            </div>
            <h6>Broklyn, NY 10083 USA</h6>
            <p>We Are Open 7 Days</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BusinessInfo;
