import { Draggable, Droppable } from "react-beautiful-dnd";
import styled from "styled-components";

const Boards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  gap: 20px;
`;

const Board = styled.div`
  background-color: ${(props) => props.theme.boardColor};
  padding: 25px 10px;
  border-radius: 5px;
  min-height: 200px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  text-align: center;
`;

const DroppableBoard = () => {
  return (
    <Droppable droppableId="board1" type="board" direction="horizontal">
      {(provided, snapshot) => (
        <Boards ref={provided.innerRef} {...provided.droppableProps}>
          <Draggable draggableId="1" key="1" index={1}>
            {(magic, snapshot) => (
              <Board ref={magic.innerRef} {...magic.draggableProps} >
                <h1>{"Done"}</h1>
              </Board>
            )}
          </Draggable>
        </Boards>
      )}
    </Droppable>
  );
};

export default DroppableBoard;