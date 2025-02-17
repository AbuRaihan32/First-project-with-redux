import App from "@/App";
import Home from "@/pages/Home";
import Task from "@/pages/Task";
import Users from "@/pages/Users";
import { createBrowserRouter } from "react-router-dom";

const route = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/task",
        element: <Task></Task>,
      },
      {
        path: "/users",
        element: <Users></Users>,
      },
    ],
  },
]);

export default route;
