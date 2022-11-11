import { Draggable, Droppable } from "react-beautiful-dnd";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { TrashState } from "../atoms";



export function TrashArea() {
  const trashYN = useRecoilValue(TrashState);
  return (
    <Droppable droppableId="trashbin" type="trash">
      {(magic, info) => (
        <Container
          ref={magic.innerRef} {...magic.droppableProps}
        >
          {trashYN && (
            <TrashIcon >
              <img src="./outline_auto_delete_black_48dp.png"></img>
            </TrashIcon>
          )}
          {info.isDraggingOver && (
            <Alert>Alert</Alert>
          )}
          <Draggable key={1} draggableId={"a1"} index={1}>
            {(magic, snapshot) => (
              <div ref={magic.innerRef} {...magic.dragHandleProps} {...magic.draggableProps} >
                <div>test</div>
              </div>
            )}
          </Draggable>
          {magic.placeholder}
        </Container>
      )}

    </Droppable>
  );
}
const Container = styled.div`
    _position: absolute;
    bottom: 30px;
    right: 30px;
    width: 300px;
    height: 300px;    
    transition: all 0.15s;
    z-index:99;
`;

const TrashIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 300px;
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