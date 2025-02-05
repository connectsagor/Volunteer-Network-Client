import logo from "./logo.svg";
import "./App.css";
import Support from "./components/Support/Support";
import Nav from "./components/Support/Nav/Nav";
import Main from "./components/Main/Main";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";

function App() {
  return (
    <div className="App">
      <Home></Home>
      <Login />
    </div>
  );
}

export default App;
