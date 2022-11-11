import { useDeferredValue, useEffect } from "react";
import { DragDropContext, Draggable, DragStart, DragUpdate, Droppable, DropResult } from "react-beautiful-dnd";
import { useRecoilState, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { BoardState, BOARD_KEY, IToDoState, toDoState, TODO_KEY, TrashState } from "./atoms";
import Board from "./Components/Board";
import CreateBoard from "./Components/CreateBoard";
import TrashArea from "./Components/TrashArea";


const Wrapper = styled.div`  
  width: 100vw;
  margin: 0 auto;
  height: 100vh;
  position: relative;
`;

const Boards = styled.div`
  display: flex;  
  border : 1px solid tomato;
`;


function Main() {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const [boards, setBoards] = useRecoilState(BoardState);
  const [trashYN, setTrash] = useRecoilState(TrashState);
  const onBeforeDragStart = (info: DragStart) => {
    if (info.type === "board") {
      setTrash({ todo: false, board: true });
    }
    if (info.type === "todo") {
      setTrash({ todo: true, board: false });
    }
  };
  const onDragEnd = (info: DropResult) => {
    //setTrash(false);
    const { destination, source, draggableId, type } = info;
    console.log(info);
    if (!destination) return;
    if (destination?.droppableId === ("trashbin")) {
      /// todo 휴지통
      setToDos((allBoards) => {
        const boardCopy = [...allBoards[source.droppableId]];
        const taskObj = boardCopy[source.index];
        boardCopy.splice(source.index, 1); //삭제
        return {
          ...allBoards,
          [source.droppableId]: boardCopy,
        };
      });
      return;
    }
    if (destination?.droppableId === ("trashbin2")) {
      /// board 휴지통
      setBoards((oldBoard) => {
        const copyBoard = [...oldBoard];
        copyBoard.splice(source.index, 1);
        return copyBoard;
      });
      setToDos((allBoards) => {
        const copyBoard = { ...allBoards };
        delete copyBoard[draggableId];
        const result: IToDoState = copyBoard;
        return result;
      });
      return;
    }
    if (type === "board") {
      setBoards((oldBoard) => {
        const copyBoard = [...oldBoard];
        const taskObj = copyBoard[source.index];
        copyBoard.splice(source.index, 1);
        copyBoard.splice(destination?.index, 0, taskObj);
        return copyBoard;
      });
    }
    if (type === "todo") {
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
    console.log(boards, toDos);
  }

  useEffect(() => {
    //console.log(toDos, JSON.stringify(toDos));
    localStorage.setItem(TODO_KEY, JSON.stringify(toDos));
    localStorage.setItem(BOARD_KEY, JSON.stringify(boards));
  }, [toDos, boards]);

  return (
    <DragDropContext onDragEnd={onDragEnd} onBeforeDragStart={onBeforeDragStart} >
      <Wrapper>
        <CreateBoard />
        <Droppable droppableId="board1" direction="horizontal" type="board" >
          {(magic, info) => (
            <Boards ref={magic.innerRef} {...magic.droppableProps}>
              {boards.map((boardId, index) => (
                <Board
                  boardId={boardId}
                  toDos={toDos[boardId]}
                  index={index}
                  key={boardId}
                />
              ))}
              {magic.placeholder}
            </Boards>
          )}
        </Droppable>
        <TrashArea />
      </Wrapper>
    </DragDropContext>
  );
}

export default Main;


// <Boards>
//             <Draggable >
//               <Board>

//               </Board>
//             </Draggable>
//           </Boards>