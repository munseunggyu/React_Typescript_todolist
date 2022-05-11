import React from "react";
import { useForm } from "react-hook-form";
import { atom, useRecoilState } from "recoil";

interface IToDo{
  text:string;
  id:number;
  category: 'To_Do' | 'Doing' | 'Done'
}
interface IForm{
  todo:string;
}

const toDoState = atom<IToDo[]>({
  key:'todo',
  default:[]
})

function CreateToDo(){
  const [ToDos,setToDos] = useRecoilState(toDoState);
  const {register,handleSubmit,setValue} = useForm<IForm>()
  const onSubmit = ({todo}:IForm) => {
    setToDos(oldToDos => [{
      text: todo,
      id:Date.now(),
      category:'To_Do'
    },...oldToDos])
    setValue('todo',"")
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("todo")} />
      <button>Add</button>
    </form>
  )
}

export default CreateToDo;