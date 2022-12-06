import { BrowserRouter, createBrowserRouter, Route, Routes } from "react-router-dom";
import About from "./screens/About";
import Header from "./components/Header";
import Home from "./screens/Home";
import Root from "./Root";
import NotFound from "./screens/NotFound";

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
    ],
    errorElement: <NotFound />
  }
]);

export default router;