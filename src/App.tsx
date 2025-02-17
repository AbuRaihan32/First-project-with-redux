import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./Layout/Navbar";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet />
    </div>
  );
}

export default App;
