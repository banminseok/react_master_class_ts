import { atom, selector } from "recoil";

type categorise = "TO_DO" | "DOING" | "DONE";

export const LOCAL_KEY = "myToDoList"

export enum Categorise {
  "TO_DO" = "TO_DO",
  "DOING" = "DOING",
  "DONE" = "DONE",
}
export interface IToDo {
  text: string;
  id: number;
  category: Categorise;
}
export const categoryState = atom<Categorise>({
  key: "category",
  default: Categorise.TO_DO
})

//let localData = JSON.parse(localStorage.getItem(LOCAL_KEY) as any);
let loadData = localStorage.getItem(LOCAL_KEY);
let localJsonData = loadData !== null ? JSON.parse(loadData) : [];

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: localJsonData,
});

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);
    return toDos.filter((toDo) => toDo.category === category)

  },
});