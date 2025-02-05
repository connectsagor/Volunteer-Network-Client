import React from "react";
import logo from "../../logos/logo.png";
import "./SignUp.css";

const SignUp = () => {
  return (
    <div className="container login d-flex flex-column justify-content-center align-items-center">
      <img className="w-25" src={logo} alt="Logo" />

      <div className="registration-page">
        <h4 className="my-4">Register as a Volunteer</h4>
        <form className="d-flex flex-column" action="">
          <input
            className="input mt-3"
            type="text"
            name="name"
            placeholder="Enter your name"
          />
          <input
            className="input mt-3"
            type="email"
            name="email"
            placeholder="Enter your Email"
          />
          <input
            className="input mt-3"
            type="password"
            name="password"
            placeholder="Enter Your Password"
          />
          <button className="primary-btn py-2 px-4 mt-4">Registration</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
