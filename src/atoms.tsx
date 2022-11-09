import { atom, selector } from "recoil";
//import { recoilPersist } from 'recoil-persist';
//const { persistAtom } = recoilPersist();

export const TODO_KEY = "myToDoList"
export const BOARD_KEY = "myBoards"

export interface ITodo {
  id: number,
  text: string
}

export interface IToDoState {
  [key: string]: ITodo[];
}

//let localData = JSON.parse(localStorage.getItem(TODO_KEY) as any);
let loadData = localStorage.getItem(TODO_KEY);
let localJsonData = loadData !== null ? JSON.parse(loadData) : {};
let boardData = localStorage.getItem(BOARD_KEY);
let boardJsonData = boardData !== null ? JSON.parse(boardData) : ["To_do", "Doing", "Done"];
console.log(boardJsonData);
export const toDoState = atom<IToDoState>({
  key: "toDo",
  //effects_UNSTABLE: [persistAtom],
  default: localJsonData,
});

export const BoardState = atom<string[]>({
  key: "boards",
  default: boardJsonData
});

export const TrashState = atom<boolean>({
  key: "trash",
  default: false,
});