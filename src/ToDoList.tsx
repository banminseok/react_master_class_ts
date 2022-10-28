import { useState } from "react";
import { useForm } from "react-hook-form"

function ToDoList() {
  const { register, watch, handleSubmit } = useForm();
  const onValid = (data: any) => {
    console.log(data);
  };
  return (
    <>
      <div>
        <form onSubmit={handleSubmit(onValid)}>
          <input {...register("toDo")} placeholder="Write a to do" />
          <button>Add</button>
        </form>
      </div>
    </>
  );
}
/*
function ToDoList() {
  const [toDo, setToDo] = useState("");
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value }
    } = event;
    setToDo(value);
    //console.log(event, event.currentTarget, event.target, value);

  }
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  }
  return (
    <>
      <div>
        <form onSubmit={onSubmit}>
          <input onChange={onChange} value={toDo} placeholder="Write a to do" />
          <button>Add</button>
        </form>
      </div>
    </>
  );
}
*/
export default ToDoList;