import Circle from "./Circle";
import React, { useState } from "react";
import styled from "styled-components";
import { isPropertySignature } from "typescript";

const Container = styled.div`
  background-color : ${(props) => props.theme.bgColor};
`;
const H1 = styled.h1`
  color : ${(props) => props.theme.textColor};
`;

function App() {
  const [value, setValue] = useState("");
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    //const value = event.currentTarget.value;
    const {
      currentTarget: { value },
    } = event;
    setValue(value);
  }
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("hello", value);
  }
  return (
    <div>
      <Container>
        <H1>protected</H1>
        <Circle borderColor="yellow" bgColor="teal" />
        <Circle text="im here." bgColor="tomato" />
        <form onSubmit={onSubmit}>
          <input
            value={value}
            onChange={onChange}
            type="text"
            placeholder="username"
          />
          <button>Log in</button>
        </form>
      </Container>
    </div>
  );
}

export default App;