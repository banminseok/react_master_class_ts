import { HtmlHTMLAttributes } from "react";
import { Outlet } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import Header from "./components/Header";
import styles from "./Global.module.css";


function Root() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default Root;