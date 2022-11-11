import { Draggable, Droppable } from "react-beautiful-dnd";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { TrashState } from "../atoms";



export function TrashArea() {
  const trashYN = useRecoilValue(TrashState);

  return (
    <>
      <Droppable droppableId="trashbin" type="todo">
        {(magic, info) => (
          <Container
            ref={magic.innerRef} {...magic.droppableProps}
          >
            {trashYN.todo && (
              <TrashIcon >
                todo<img src="./outline_auto_delete_black_48dp.png"></img>
              </TrashIcon>
            )}
            {magic.placeholder}
          </Container>
        )}
      </Droppable>


      <Droppable droppableId="trashbin2" type="board">
        {(magic, info) => (
          <Container
            ref={magic.innerRef} {...magic.droppableProps}
          >
            {trashYN.board && (
              <TrashIcon >
                board<img src="./outline_auto_delete_black_48dp.png"></img>
              </TrashIcon>
            )}
            {magic.placeholder}
          </Container>
        )}
      </Droppable>

    </>

  );
}
const Container = styled.div`
    position: absolute;
    bottom: 30px;
    right: 30px;
    width: 100px;
    height: 100px;    
    transition: all 0.15s;
    z-index:99;
`;

const TrashIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  border: 2px solid #111;
  img{
    width : 100%;
  }
`;

const Alert = styled.div`
  background-color:red;
  border : 3px solid blue;
  width : 100%;
  height : 50px;
`;
export default TrashArea;