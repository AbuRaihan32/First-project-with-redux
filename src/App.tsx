import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Layout/Navbar";

function App() {
  return (
    <div className="w-[85%] mx-auto">
      <Navbar></Navbar>
      <Outlet />
    </div>
  );
}

export default App;
