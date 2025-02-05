import React from "react";
import "./Login.css";
import logo from "../../logos/logo.png";

const Login = () => {
  return (
    <div className="container login d-flex flex-column justify-content-center align-items-center">
      <img className="w-25 mb-5" src={logo} alt="Logo" />
      <div className="login-box d-flex flex-column justify-content-center align-items-center">
        <h3>Login With</h3>
        <button className="primary-btn py-2 px-3 mt-4">
          Login with Google
        </button>
        <p className="mt-2">
          Don't have an account? <a href="">Create one</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
