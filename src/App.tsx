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

const Btn = styled.button`
  color : white;
  background-color : tomato;
  border:0;
  border-radius:15px;
`;
const Input = styled.input.attrs({ required: true, minLength: 10 })`
  background-color : tomato;
`;

function App() {
  return (
    <>
      <Father>
        <Box bgColor="teal" />
        <Box bgColor="tomato" />
        <Circle bgColor="blue" />
      </Father>
      <Father>
        <Btn>Log in</Btn>
        <Btn as="a" href="/login">Log in</Btn>
      </Father>
      <Father>
        <Input />
        <Input />
        <Input />
        <Input />
        <Input />
      </Father>
      <div className={styles.movie} style={{ display: "flex" }}>
        <div style={{ backgroundColor: "teal", width: "100px", height: "100px" }}></div>
        <div style={{ backgroundColor: "tomato", width: "100px", height: "100px" }}></div>
      </div>
    </>
  )
}

export default App;