import React,{useState} from 'react';

function ToDo(){
  const [value,setValue] =useState("")
  const OnChange = (e:React.FormEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  }
  const onSubmit =(e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(value)
    setValue("")
  }
  return(
    <div>
      <form onSubmit={onSubmit}>
        <input onChange={OnChange} value={value} />
        <button>Add</button>
      </form>
    </div>
  )
}

export default ToDo