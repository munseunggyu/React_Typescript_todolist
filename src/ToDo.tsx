import React,{useState} from "react";
import { useForm } from "react-hook-form";

interface ITodo {
  todo:string;
}

function Todo(){
  const {register,handleSubmit,setValue} = useForm<ITodo>()
  const onSubmit = (data:ITodo) => {
    
    console.log(data.todo)
    setValue("todo","")
  }
  return(
    <div>
      <form onSubmit={handleSubmit(onSubmit)} >
        <input {...register("todo")} />
        <button>Add</button>
      </form>
    </div>
  )
}

export default Todo;

