import { Droppable, DroppableProvided, DroppableStateSnapshot } from "react-beautiful-dnd";
import styled from "styled-components";


const Container = styled.div`
width: 150px;
height: 150px;
border : 1px solid tomato;
`;

const Content = styled.div`
  font-size: 20px;
  width: 120px;
  height: 120px;
  padding: 10px;
  background-color: rgba(223, 230, 233,0.3)};
`;

const DroppableGarbage = () => {
  return (
    <Container>
      <Droppable droppableId="garbage" type="garbage">
        {(provided: DroppableProvided, snapshot: DroppableStateSnapshot) => (
          <Content ref={provided.innerRef} {...provided.droppableProps}>
            휴지통....
          </Content>
        )}
      </Droppable>
    </Container>
  );
};

export default DroppableGarbage;
