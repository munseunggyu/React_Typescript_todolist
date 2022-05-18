import { useRecoilValue } from "recoil";
import { todoState } from "./atoms";
import CreateToDo from "./components/CreateToDo";
import Todo from './components/Todo';

function ToDoList(){
  const toDos = useRecoilValue(todoState)
  return(
    <div>
      <CreateToDo />
      <ul>
        {
          toDos.map((toDo)=>(
                <Todo key={toDo.id} {...toDo} />
            ))
        }
      </ul>
    </div>
  )
}

export default ToDoList;

