import { BrowserRouter, createBrowserRouter, Route, Routes } from "react-router-dom";
import About from "./About";
import Header from "./components/Header";
import Home from "./Home";
import Root from "./Root";

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
      }
    ]
  }
]);

export default router;