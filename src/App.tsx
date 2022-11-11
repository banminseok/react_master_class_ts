import { DragDropContext, Draggable, Droppable, DropResult } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { toDoState } from "./atoms";
import Board from "./Components/Board";
import DragabbleCard from "./Components/DragabbleCard";

const Wrapper = styled.div`
  display: flex;
  max-width: 680px;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-wrap: wrap;
`;

const Boards = styled.div`
  display: grid;
  width: 100%;
  gap: 10px;
  grid-template-columns: repeat(3, 1fr);
`;

const TrashContainer = styled.div`
  width: 300px;
  height: 300px;    
`;
interface ITrashProps {
  isDraggingFromThis: boolean;
  isDraggingOver: boolean;
}

const Trash = styled.div<ITrashProps>`
  border : 1px solid ${props => props.isDraggingOver
    ? "#dfe6e9"
    : props.isDraggingFromThis
      ? "#b2bec3"
      : "tomato"};
`;



const TrashIcon = styled.div`
  width: 100px;
  height: 100px;    
  background-color : #f0f0f0;  
  font-size : 20px;
`;

function App() {
  const [toDos, setToDos] = useRecoilState(toDoState);
  //const onDragEnd = ({ draggableId, destination, source }: DropResult) => {
  const onDragEnd = (info: DropResult) => {
    console.log(info);
    const { destination, draggableId, source } = info;
    if (!destination) return;
    if (destination?.droppableId === source.droppableId) {
      // same board movement.
      setToDos((allBoards) => {
        const boardCopy = [...allBoards[source.droppableId]];
        const taskObj = boardCopy[source.index];
        boardCopy.splice(source.index, 1);
        boardCopy.splice(destination?.index, 0, taskObj);
        return {
          ...allBoards,
          [source.droppableId]: boardCopy,
        };
      });
    }
    if (destination?.droppableId !== source.droppableId) {
      // cross board movement
      setToDos((allBoards) => {
        const sourceBoard = [...allBoards[source.droppableId]];
        const taskObj = sourceBoard[source.index];
        const destinationBoard = [...allBoards[destination.droppableId]];
        sourceBoard.splice(source.index, 1);
        destinationBoard.splice(destination?.index, 0, taskObj);
        return {
          ...allBoards,
          [source.droppableId]: sourceBoard,
          [destination.droppableId]: destinationBoard,
        };
      });
    }
  }
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>
        <Boards>
          {Object.keys(toDos).map((boardId) => (
            <Board key={boardId} boardId={boardId} toDos={toDos[boardId]} />
          ))}
        </Boards>
        <TrashContainer>
          <Droppable droppableId="trashbin" type="trash">
            {(magic, info) => (
              <Trash ref={magic.innerRef} {...magic.droppableProps}
                isDraggingOver={info.isDraggingOver}
                isDraggingFromThis={Boolean(info.draggingFromThisWith)}>
                <TrashIcon >
                  휴지통
                </TrashIcon>
              </Trash>
            )}
          </Droppable>
        </TrashContainer>
      </Wrapper>
    </DragDropContext>
  );
}

export default App;