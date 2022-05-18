import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { Categories, categoryState, toDoSelector, todoState } from "./atoms";
import CreateToDo from "./components/CreateToDo";
import Todo from './components/Todo';

function ToDoList(){
  const toDos = useRecoilValue(toDoSelector)
  const [category,setCategory] = useRecoilState(categoryState)
  const onInput = (e:React.FormEvent<HTMLSelectElement>) => {
    setCategory(e.currentTarget.value as any)
  }
  console.log(category)
  return(
    <div>
      <h1>To Dos</h1>
      <hr />
      <select value={category} onInput={onInput}>
        <option value={Categories.To_Do} >To Do</option>
        <option value={Categories.Doing} >Doing</option>
        <option value={Categories.Done} >Done</option>
      </select>
      <CreateToDo />
      {toDos?.map((toDo) =><Todo key={toDo.id} {...toDo} /> ) }
    </div>
  )
}

export default ToDoList;

