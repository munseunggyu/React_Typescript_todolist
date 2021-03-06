import { atom, selector } from "recoil"

export interface ITodo{
  id:number;
  text:string;
}

interface IToDoState{
  [key: string] : ITodo[]
}

export const todoState = atom<IToDoState>({
  key:'todo',
  default:{
    "To Do":[],
    Doing:[],
    Done:[]
  }
})
interface ISign{
  number:number
}

export const signState = atom({
  key:'sign',
  default:false
})