import logo from "./logo.svg";
import "./App.css";

import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import MyList from "./components/MyList/MyList";
import AddEvent from "./components/AddEvent/AddEvent";
import Volunteer from "./components/Volunteer/Volunteer";
import { BrowserRouter as Router, Routes, Route } from "react-router";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function App() {
  return (
    <Router className="App">
      <Routes>
        <Route exact path="/" element={<Home></Home>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/signup" element={<SignUp></SignUp>} />
        <Route path="/my_list" element={<MyList></MyList>} />
        <Route path="/add_event" element={<AddEvent></AddEvent>} />
        <Route path="/volunteer" element={<Volunteer></Volunteer>} />
      </Routes>
    </Router>
  );
}

export default App;
