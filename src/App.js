import logo from "./logo.svg";
import "./App.css";
import Support from "./components/Support/Support";
import Nav from "./components/Nav/Nav";
import Main from "./components/Main/Main";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import MyList from "./components/MyList/MyList";
import AddEvent from "./components/AddEvent/AddEvent";
import Volunteer from "./components/Volunteer/Volunteer";
import { BrowserRouter as Router, Routes, Route } from "react-router";
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
