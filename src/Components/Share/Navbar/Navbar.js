import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light">
      <a class="navbar-brand" href="#">Dentle Care</a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link to="/home" className="text-white">
                <a className="nav-link mr-5" href="">
                  Home <span className="sr-only">(current)</span>
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="text-white">
                <a className="nav-link mr-5" href="">
                  About
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/doctor/allPatients" className="text-white">
                <a className="nav-link mr-5 " href="">
                  Dashboard
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/doctor/allPatients" className="text-white">
                <a className="nav-link mr-5 text-white" href="#">
                  Reviews
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/blog" className="text-white">
                <a className="nav-link mr-5 text-white" href="#">
                  Blogs
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="text-white">
                <a className="nav-link mr-5 text-white" href="#">
                  Contact Us
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
