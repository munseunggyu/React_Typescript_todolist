import { atom,selector } from "recoil";

export interface IToDo{
  text:string;
  id:number;
  category: Categories
}

export enum Categories {
  'To_Do' = 'To_Do',
  'Doing' = 'Doing',
  'Done' = 'Done'
}

export const todoState = atom<IToDo[]>({
  key:'toDos',
  default:[],
})

export const categoryState = atom<Categories>({
  key: 'category',
  default:Categories.To_Do
})

export const toDoSelector = selector({
  key:'toDoSelector',
  get: ({get}) => {
    const toDos = get(todoState)
    const category = get(categoryState)
    return toDos.filter(v => v.category === category)
  }
})