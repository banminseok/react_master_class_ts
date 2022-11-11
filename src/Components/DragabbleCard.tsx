import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { toDoState } from "../atoms";

const Card = styled.div<{ isDragging: boolean }>`
  position:relative;
  border-radius: 5px;
  margin-bottom: 5px;
  padding: 10px;
  background-color: ${(props) =>
    props.isDragging ? "#e4f2ff" : props.theme.cardColor};
  box-shadow: ${(props) =>
    props.isDragging ? "0px 2px 5px rgba(0, 0, 0, 0.05)" : "none"};
`;
const DeleteIcon = styled.div`
  position : absolute;
  right :1px;
  top : 8px;
`;


interface IDraggabbleCardProps {
  toDoId: number;
  toDoText: string;
  index: number;
  boardId: string;
}

const DraggabbleCard = ({ toDoId, toDoText, index, boardId }: IDraggabbleCardProps) => {
  const setToDos = useSetRecoilState(toDoState);
  const onDelete = () => {
    setToDos((allBoards) => {
      const boardCopy = [...allBoards[boardId]];
      const taskObj = boardCopy[index];
      boardCopy.splice(index, 1);
      return {
        ...allBoards,
        [boardId]: boardCopy
      }
    });
  }
  return (
    <>
      <Draggable key={toDoId} draggableId={toDoId + ""} index={index}>
        {(magic, snapshot) => (
          <Card isDragging={snapshot.isDragging} ref={magic.innerRef} {...magic.dragHandleProps} {...magic.draggableProps} >
            <span>{toDoText}</span>
            <DeleteIcon onClick={onDelete}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" ><path d="M9.172 16.242 12 13.414l2.828 2.828 1.414-1.414L13.414 12l2.828-2.828-1.414-1.414L12 10.586 9.172 7.758 7.758 9.172 10.586 12l-2.828 2.828z"></path><path d="M12 22c5.514 0 10-4.486 10-10S17.514 2 12 2 2 6.486 2 12s4.486 10 10 10zm0-18c4.411 0 8 3.589 8 8s-3.589 8-8 8-8-3.589-8-8 3.589-8 8-8z"></path></svg>
            </DeleteIcon>

          </Card>
        )}
      </Draggable>
    </>);

}

export default React.memo(DraggabbleCard);