import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { todoState,categoryState } from "../atoms";

interface IForm{
  todo:string;
}


function CreateToDo(){
  const setToDos = useSetRecoilState(todoState);
  const category = useRecoilValue(categoryState)
  const {register,handleSubmit,setValue} = useForm<IForm>()
  const handleValid  = ({todo}:IForm) => {
    setToDos(oldToDos => [{
      text: todo,
      id:Date.now(),
      category: category
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