import logo from "./logo.svg";
import "./App.css";
import Support from "./components/Support/Support";
import Nav from "./components/Support/Nav/Nav";
import Main from "./components/Main/Main";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import MyList from "./components/MyList/MyList";
import AddEvent from "./components/AddEvent/AddEvent";
import Volunteer from "./components/Volunteer/Volunteer";

function App() {
  return (
    <div className="App">
      <Home></Home>
      <Login />
      <SignUp />
      <MyList />
      <AddEvent></AddEvent>
      <Volunteer></Volunteer>
    </div>
  );
}

export default App;
