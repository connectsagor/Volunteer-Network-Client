import React from "react";
import "./Nav.css";
import logo from "../../../logos/logo.png";

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <a href="#home" className="navbar-brand text-start">
          <img className="w-25" src={logo} alt="" />
        </a>
        <ul className="navbar-nav d-flex flex-row gap-3">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#Home">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#Donation">
              Donation
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#events">
              Events
            </a>
          </li>
        </ul>

        <div>
          <button className="primary-btn py-2 px-4 ">Register</button>
          <button className="primary-btn py-2 px-4 ms-3">Admin</button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
