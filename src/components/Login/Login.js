import React from "react";
import "./Login.css";
import logo from "../../logos/logo.png";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { Link, useLocation, useNavigate } from "react-router";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const handleLoginWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // Get Google Access Token
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        // Signed-in user info
        const user = result.user;
        console.log("User:", user);

        // Save user data to local storage (optional)
        localStorage.setItem("user", JSON.stringify(user));
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error("Login failed:", error.message);
      });
  };

  return (
    <div className="container login d-flex flex-column justify-content-center align-items-center">
      <img className="w-25 mb-5" src={logo} alt="Logo" />
      <div className="login-box d-flex flex-column justify-content-center align-items-center">
        <h3>Login With</h3>
        <button
          onClick={handleLoginWithGoogle}
          className="primary-btn py-2 px-3 mt-4"
        >
          Login with Google
        </button>
        <p className="mt-2">
          Don't have an account? <Link to="/signup">Create one</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
