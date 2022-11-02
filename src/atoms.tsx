import { atom, selector } from "recoil";

type categorise = "TO_DO" | "DOING" | "DONE";

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
export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);
    return toDos.filter((toDo) => toDo.category === category)

  },
});