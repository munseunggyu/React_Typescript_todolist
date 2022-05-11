import { text } from "node:stream/consumers";
import React,{useState} from "react";
import { useForm } from "react-hook-form";
import { atom, useRecoilState } from "recoil";
import CreateToDo from "./components/CreateToDo";

interface IForm{
  todo:string;
}

interface ITodo {
  text:string;
  id:number;
  category: 'TO_DO' | 'DOING' | 'DONE';
}
const toDoState = atom<ITodo[]> ({
  key: "todo",
  default:[]
})



function ToDoList(){
  const [toDos ,setToDos] = useRecoilState(toDoState) 
  const {register,handleSubmit,setValue} = useForm<IForm>()
  const onSubmit = ({todo}:IForm) => {
    setToDos((oldToDos) => [{text:todo,id:Date.now(),category:'TO_DO'},...oldToDos])
    setValue("todo","")
  }
  console.log(toDos)
  return(
    <div>
      <CreateToDo />
      <ul>
        {toDos.map((toDo) => <li key={toDo.id}>{toDo.text} </li>)}
      </ul>
    </div>
  )
}

export default ToDoList;

