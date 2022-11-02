import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { Categorise, categoryState, toDoSelector, toDoState } from "../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";






function ToDoList() {
  //const toDos = useRecoilValue(toDoState);
  //const value = useRecoilValue(toDoState);
  //const modFn = useSetRecoilState(toDoState);
  const toDos = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any);
  }

  console.log(category);
  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <select value={category} onInput={onInput}>
        <option value={Categorise.TO_DO}>To Do</option>
        <option value={Categorise.DOING}>Doing</option>
        <option value={Categorise.DONE}>Done</option>
      </select>
      <CreateToDo />
      {toDos?.map((toDo) => (
        <ToDo key={toDo.id} {...toDo} />
      ))}
    </div>
  );

}
export default ToDoList;









/*return (
  <>
    <div>
      <h1>To Dos</h1>
      <hr />
      <CreateToDo />
      <h2>To Do</h2>
      <ul>
        {toDo.map((toDo) => (
          <ToDo key={toDo.id} text={toDo.text} category={toDo.category} id={toDo.id} />
          // <ToDo {...toDo}/>
        ))}
      </ul>
      <hr />
      <h2>Doing</h2>
      <ul>
        {doing.map((toDo) => (
          <ToDo key={toDo.id} text={toDo.text} category={toDo.category} id={toDo.id} />
          // <ToDo {...toDo}/>
        ))}
      </ul>
      <hr />
      <h2>Done</h2>
      <ul>
        {done.map((toDo) => (
          <ToDo key={toDo.id} text={toDo.text} category={toDo.category} id={toDo.id} />
          // <ToDo {...toDo}/>
        ))}
      </ul>
    </div>
  </>
);*/