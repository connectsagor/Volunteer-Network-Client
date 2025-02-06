import React from "react";
import "./Nav.css";
import logo from "../../logos/logo.png";
import { Link } from "react-router";

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="navbar-brand text-start">
          <img className="w-25" src={logo} alt="" />
        </Link>
        <ul className="navbar-nav d-flex flex-row gap-3">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/volunteer" className="nav-link">
              Volunteer
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/add_event">
              Events
            </Link>
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
