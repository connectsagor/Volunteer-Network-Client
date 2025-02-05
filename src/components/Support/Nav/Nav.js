import React from "react";
import "./Nav.css";
import logo from "../../../logos/logo.png";

const Nav = () => {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container">
        <a className="navbar-brand text-start">
          <img className="w-25" src={logo} alt="" />
        </a>
        <ul ClassName="navbar-nav">
          <li ClassName="nav-item">
            <a ClassName="nav-link active" aria-current="page" href="#Home">
              Home
            </a>
          </li>
          <li ClassName="nav-item">
            <a ClassName="nav-link" href="#Donation">
              Donation
            </a>
          </li>
          <li ClassName="nav-item">
            <a ClassName="nav-link" href="#">
              Events
            </a>
          </li>
        </ul>

        <div>
          <button>Register</button>
          <button>Admin</button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
