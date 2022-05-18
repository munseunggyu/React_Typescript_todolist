import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { todoState } from "../atoms";

interface IForm{
  todo:string;
}


function CreateToDo(){
  const setToDos = useSetRecoilState(todoState);
  const {register,handleSubmit,setValue} = useForm<IForm>()
  const handleValid  = ({todo}:IForm) => {
    setToDos(oldToDos => [{
      text: todo,
      id:Date.now(),
      category:'To_Do'
    },...oldToDos])
    setValue('todo',"")
  }
  return (
    <form onSubmit={handleSubmit(handleValid)}>
      <input {...register("todo")} />
      <button>Add</button>
    </form>
  )
}

export default CreateToDo;