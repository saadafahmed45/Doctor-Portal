import React from "react";
import "./Testimonials.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import Testimonial from "../Testimonial/Testimonial";
import wilson from "../../images/Ellipse 1.png";
import ema from "../../images/Ellipse 2.png";
import aliza from "../../images/Ellipse 3.png";
const Testimonials = () => {
  const testimonialData = [
    {
      quote:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ",
      name: "Wilson Harry",
      from: "California",
      img: wilson,
    },
    {
      quote:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ",
      name: "Ema Gomez",
      from: "California",
      img: ema,
    },
    {
      quote:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ",
      name: "Aliza Farari",
      from: "California",
      img: aliza,
    },
  ];
  return (
    <div className="testimonials mt-5 container">
      <div className="row">
        <div className="col-md-6 testimonials-header">
          <h5>Testimonials</h5>
          <h1>
            What's Our patiens <br /> Says
          </h1>
        </div>

        <div className="col-md-6 testimonials-icon">
          <FontAwesomeIcon icon={faQuoteLeft} />
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-md-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <p className="card-text text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! </p>
            </div>
            <div className="card-footer d-flex  align-items-center">
              <img className="mx-3" src={wilson} alt="" width="60" />
              <div>
                <h6 className="text-primary">Wilson Harry</h6>
                <p className="m-0">California</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <p className="card-text text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! </p>
            </div>
            <div className="card-footer d-flex  align-items-center">
              <img className="mx-3" src={ema} alt="" width="60" />
              <div>
                <h6 className="text-primary">Ema Gomez</h6>
                <p className="m-0">California</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <p className="card-text text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! </p>
            </div>
            <div className="card-footer d-flex  align-items-center">
              <img className="mx-3" src={aliza} alt="" width="60" />
              <div>
                <h6 className="text-primary">Aliza Farari</h6>
                <p className="m-0">California</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
