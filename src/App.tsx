import styled from "styled-components";
import styles from "./Global.module.css";

const Father = styled.div`
  display:flex;
`;

const BoxOne = styled.div`
  background-color: teal;
  width: 100px;
  height: 100px;
`;
const BoxTwo = styled.div`
  background-color: tomato;
  width: 100px;
  height: 100px;
`;
const Text = styled.span`
  color: white;
`;
function App() {
  return (
    <>
      <Father>
        <BoxOne>
          <Text>Hello</Text>
        </BoxOne>
        <BoxTwo />

      </Father>
      <div className={styles.movie} style={{ display: "flex" }}>
        <div style={{ backgroundColor: "teal", width: "100px", height: "100px" }}></div>
        <div style={{ backgroundColor: "tomato", width: "100px", height: "100px" }}></div>
      </div>
    </>
  )
}

export default App;