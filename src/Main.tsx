import { useDeferredValue, useEffect } from "react";
import { DragDropContext, Draggable, Droppable, DropResult } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { BoardState, BOARD_KEY, toDoState, TODO_KEY } from "./atoms";
import Board from "./Components/Board";


const Wrapper = styled.div`  

`;

const Boards = styled.div`
  display: flex;  
  border : 1px solid tomato;
`;


function Main() {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const [boards, setBoards] = useRecoilState(BoardState);
  const onDragEnd = (info: DropResult) => {
    console.log(info);
    const { destination, source, draggableId } = info;
    if (!destination) return;
    setBoards((oldBoard) => {
      const copyBoard = [...oldBoard];
      console.log(copyBoard);
      const taskObj = copyBoard[source.index];
      copyBoard.splice(source.index, 1);
      copyBoard.splice(destination?.index, 0, taskObj);
      return copyBoard;
    });
  }
  useEffect(() => {
    //console.log(toDos, JSON.stringify(toDos));
    localStorage.setItem(TODO_KEY, JSON.stringify(toDos));
    localStorage.setItem(BOARD_KEY, JSON.stringify(boards));
  }, [toDos, boards]);

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>
        <Droppable droppableId="one" type="board" direction="horizontal">
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