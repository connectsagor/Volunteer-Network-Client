import React from "react";
import "./Nav.css";
import logo from "../../logos/logo.png";
import { Link, useNavigate } from "react-router";
import { getAuth, signOut } from "firebase/auth";
const Nav = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const handleLogOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        localStorage.removeItem("user");
        navigate("/");
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
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

        <div className="d-flex justify-content-center align-items-center">
          {!user ? (
            <Link to="/signup" className="primary-btn py-2 px-4 ">
              Register
            </Link>
          ) : (
            <Link to="/my_list" className="primary-btn py-2 px-4 ">
              {user.displayName}
            </Link>
          )}

          {user ? (
            <Link onClick={handleLogOut} className="primary-btn py-2 px-4 ms-3">
              Logout
            </Link>
          ) : (
            <Link className="primary-btn py-2 px-4 ms-3">Admin</Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
