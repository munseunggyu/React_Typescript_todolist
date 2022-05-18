import {  useSetRecoilState } from "recoil";
import { Categories, IToDo, todoState } from "../atoms";

function Todo({text,category,id}:IToDo){
  const setToDos = useSetRecoilState(todoState)
  const onClick = (e:React.MouseEvent<HTMLButtonElement>) => {
    const {currentTarget:{name}} = e;
    console.log(name)
    setToDos((prev) => {
      const targexIndex = prev.findIndex(toDo => toDo.id === id)
      const newToDo = {text,category:name as any,id}
      console.log(newToDo)
     return [
       ...prev.slice(0,targexIndex),
       newToDo,
       ...prev.slice(targexIndex+1)
      ]
    })
  }
  return (
    <li>
      <span>{text}</span>
      {category !== Categories.Doing &&
       <button onClick={onClick} name="Doing" >Doing</button>
       }
      {category !== Categories.To_Do && 
      <button onClick={onClick} name="To_Do" >To Do</button>
      }
      {category !== Categories.Done && 
      <button onClick={onClick} name="Done" >Done</button>
      }
  </li>
  )
}

export default Todo;