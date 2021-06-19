import React from "react";
import DoctorPic from "../../images/5790-removebg.png";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Doctors = () => {
  return (
    <section className="doctors-section">
      <div>
        <h3 style={{ color: " #1cc7c1", fontWeight: " 600" }}>Our Doctors</h3>

        <div className="row">
          <div className="col-md-4 DoctorPic">
            <img className="img-fluid" src={`http://localhost:5000/err.png`} />
            <h6 style={{marginTop:"5%", fontWeight: " 600" }}>Dr.Riyaj Mahbub</h6>
            <span>
            <FontAwesomeIcon icon={faPhone} />
            <p>+4373658364</p>

            </span>
          </div>
          <div className="col-md-4 DoctorPic">
            <img className="img-fluid" src={DoctorPic} />
            <h6  style={{marginTop:"5%", fontWeight: " 600" }}>Dr.SaadAf Ahmed</h6>
            <span>
            <FontAwesomeIcon icon={faPhone} />
              <p>+4373658364</p>
            </span>
          </div>
          <div className="col-md-4 DoctorPic">
            <img className="img-fluid" src={DoctorPic} />
            <h6 style={{ marginTop:"5%", fontWeight: " 600" }}>Dr.Mohammad Haolader</h6>
            <span>
            <FontAwesomeIcon icon={faPhone} />
            <p>+4373658364</p>

            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Doctors;
