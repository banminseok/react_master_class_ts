import { DragDropContext, DragStart, DropResult, ResponderProvided } from "react-beautiful-dnd";
import styled from "styled-components";
import DroppableBoard from "./DroppableBoard";
import DroppableGarbage from "./DroppableGarbage";

const BoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
const Garbage = styled.div`
  position: fixed;
  bottom: 0px;
  right: 0px;
  width: 150px;
  height: 150px;
`;
const DragDropContainer = () => {
  const onDragEnd = ({ draggableId, destination, source }: DropResult) => {
    console.log("draggableId", draggableId, "destination", destination, "source", source);
  }
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <BoardContainer>
        <DroppableBoard />
      </BoardContainer>
      <Garbage>
        <DroppableGarbage />
      </Garbage>
    </DragDropContext>
  );
}


export default DragDropContainer;
