import { HtmlHTMLAttributes } from "react";
import styled from "styled-components";
import styles from "./Global.module.css";

interface backgroundColor {
  bgColor: string
}
const Father = styled.div`
  display:flex;
`;

const Box = styled.div<backgroundColor>`
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
`;

const Text = styled.span`
  color: white;
`;

const Circle = styled(Box)`
  // // background-color: ${(props) => props.bgColor};
  // // width: 100px;
  // // height: 100px;
  border-radius: 50px;
`;

function App() {
  return (
    <>
      <Father>
        <Box bgColor="teal" />
        <Box bgColor="tomato" />
        <Circle bgColor="blue" />

      </Father>
      <div className={styles.movie} style={{ display: "flex" }}>
        <div style={{ backgroundColor: "teal", width: "100px", height: "100px" }}></div>
        <div style={{ backgroundColor: "tomato", width: "100px", height: "100px" }}></div>
      </div>
    </>
  )
}

export default App;