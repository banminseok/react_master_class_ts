import { HtmlHTMLAttributes } from "react";
import styled, { keyframes } from "styled-components";
import styles from "./Global.module.css";

interface backgroundColor {
  bgColor: string
}
const rotationAnimation = keyframes`
  0% {
    transform:rotate(0deg);
    border-radius:0px;
  }
  50% {
    border-radius:100px;
  }
  100%{
    transform:rotate(360deg);
    border-radius:0px;
  }
`;

const Father = styled.div`
  display:flex;
`;

const Box = styled.div<backgroundColor>`
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
`;

const Emoji = styled.span`
  font-size:48px;
`;
const Showbox = styled.div`
  background-color: teal;
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  animation:${rotationAnimation} 1s linear infinite;
  ${Emoji}:hover{
    font-size:90px;
  }

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
        <Showbox>
          <Emoji>🤩</Emoji>
        </Showbox>
        <Emoji>👹</Emoji>
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