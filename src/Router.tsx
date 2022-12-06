import { BrowserRouter, createBrowserRouter, Route, Routes } from "react-router-dom";
import About from "./screens/About";
import Header from "./components/Header";
import Home from "./screens/Home";
import Root from "./Root";
import NotFound from "./screens/NotFound";
import User from "./screens/users/User";

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
      }
    ],
    errorElement: <NotFound />
  }
]);

export default router;