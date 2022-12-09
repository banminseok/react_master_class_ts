import { BrowserRouter, createBrowserRouter, Route, Routes } from "react-router-dom";
import About from "./screens/About";
import Header from "./components/Header";
import Home from "./screens/Home";
import Root from "./Root";
import NotFound from "./screens/NotFound";
import User from "./screens/users/User";
import Followers from "./screens/users/Followers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "users/:userId",
        element: <User />,
        children: [
          {
            path: "followers",
            element: <Followers />,
          },
        ]
      }
    ],
    errorElement: <NotFound />
  }
], { basename: process.env.PUBLIC_URL });

export default router;