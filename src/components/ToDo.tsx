import { useSetRecoilState } from "recoil";
import { Categorise, IToDo, toDoState } from "../atoms";

function ToDo({ text, category, id }: IToDo) {
  const setToDos = useSetRecoilState(toDoState);
  const onDelete = (event: React.MouseEvent<HTMLButtonElement>) => {
    setToDos((oldToDos) => {
      const chToDo = oldToDos.filter((toDo) => id !== toDo.id);
      return chToDo;
    })
  }
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setToDos((oldToDos) => {
      const chToDo = oldToDos.map((toDo) => (
        id == toDo.id ? { text, id, category: name as Categorise } : toDo
      ));
      return chToDo;
      /*
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id)
      const oldToDo = oldToDos[targetIndex];
      const newToDo = { text, id, category: name as IToDo["category"] };
      return [
        ...oldToDos.slice(0, targetIndex),
        newToDo,
        ...oldToDos.slice(targetIndex + 1)
      ];
      */
    })
  };
  return (<>
    <li>
      <span>{text}</span>
      {category !== Categorise.DOING && (
        <button name={Categorise.DOING} onClick={onClick}>
          Doing
        </button>
      )}
      {category !== Categorise.TO_DO && (
        <button name={Categorise.TO_DO} onClick={onClick}>
          To Do
        </button>
      )}
      {category !== Categorise.DONE && (
        <button name={Categorise.DONE} onClick={onClick}>
          Done
        </button>
      )}
      <button name="REMOVE" onClick={onDelete}>
        ❌
      </button>
    </li>
  </>);

}

export default ToDo;