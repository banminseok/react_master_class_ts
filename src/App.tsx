import styled from "styled-components";
import DragDropContainer from "./Components/DragDropContainer";
import Main from "./Main";
import GlobalStyle from "./styles/GlobalStyle";

const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

function App() {
  return (
    <Container>
      <GlobalStyle />
      <Main />
    </Container>
  );
}

export default App;

