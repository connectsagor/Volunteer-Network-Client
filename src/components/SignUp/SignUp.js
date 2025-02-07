import React, { useState } from "react";
import logo from "../../logos/logo.png";
import "./SignUp.css";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router";

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleRegistration = (e) => {
    e.preventDefault();

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        // Save user data to local storage (optional)
        localStorage.setItem("user", JSON.stringify(user));
        navigate("/");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };
  return (
    <div className="container login d-flex flex-column justify-content-center align-items-center">
      <img className="w-25" src={logo} alt="Logo" />

      <div className="registration-page">
        <h4 className="my-4">Register as a Volunteer</h4>
        <form
          onSubmit={handleRegistration}
          className="d-flex flex-column"
          action=""
        >
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            className="input mt-3"
            type="text"
            name="name"
            placeholder="Enter your name"
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="input mt-3"
            type="email"
            name="email"
            placeholder="Enter your Email"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="input mt-3"
            type="password"
            name="password"
            placeholder="Enter Your Password"
          />
          <input
            type="submit"
            value=" Registration"
            className="primary-btn py-2 px-4 mt-4"
          />
          <p className="mt-3">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
