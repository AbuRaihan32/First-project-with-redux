import { ModeToggle } from "@/components/ui/mode-toggle";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full border-b flex items-center p-4">
      <div className="flex items-center">
        <img className="w-12" src="logo.png" alt="" />
        <h1 className="text-xl text-blue-400 font-bold">Task Management</h1>
      </div>
      <div className="flex gap-4 ml-52">
        <Link to={"/task"}>Task</Link>
        <Link to={"/users"}>Users</Link>
      </div>
      <div className="ml-auto">
        <ModeToggle></ModeToggle>
      </div>
    </div>
  );
};

export default Navbar;
