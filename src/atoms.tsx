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

interface IBoardState {
  key: string,
  default: string[]
}

//let localData = JSON.parse(localStorage.getItem(TODO_KEY) as any);
let loadData = localStorage.getItem(TODO_KEY);
let localJsonData = loadData !== null ? JSON.parse(loadData) : {};
let boardData = localStorage.getItem(BOARD_KEY);
let boardJsonData = boardData !== null ? JSON.parse(boardData) : ["To_do", "Doing", "Done"];
//let boardJsonData = boardData !== null ? JSON.parse(boardData) : [];
//console.log(boardJsonData);
export const toDoState = atom<IToDoState>({
  key: "toDo",
  //effects_UNSTABLE: [persistAtom],
  default: localJsonData,
});

export const BoardState = atom<string[]>({
  key: "boards",
  default: boardJsonData
});

export const BoardsCreateSelector = selector<any>({
  key: 'BoardsNTodos',
  get: ({ get }) => {
    return "minutes / 60";
  },
  set: ({ get, set }, newItems) => {
    if (newItems !== null) {
      const currentItems = get(BoardState);
      const appendedItems = [...currentItems, newItems];
      set(BoardState, appendedItems);
      const allToDos = get(toDoState);
      set(toDoState, {
        ...allToDos,
        [newItems]: [],
      });
    }
  },
});

interface TrashState {
  todo: boolean,
  board: boolean
}

export const TrashState = atom<TrashState>({
  key: "trash",
  default: { todo: true, board: false },
});


