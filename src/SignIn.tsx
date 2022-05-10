import React,{useState} from 'react';
import { useForm } from 'react-hook-form';

// function ToDo(){
//   const [value,setValue] =useState("")
//   const OnChange = (e:React.FormEvent<HTMLInputElement>) => {
//     setValue(e.currentTarget.value);
//   }
//   const [erro,setErro] = useState(false)
//   const onSubmit =(e:React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     if(value.length > 10) {
//       setErro(true)
//     }else{
//       setErro(false)
//     }
//     console.log(value)
//     setValue("")
//   }
//   return(
//     <div>
//       <form onSubmit={onSubmit}>
//         <input onChange={OnChange} value={value} />
//         <button>Add</button>
//         {erro ? "Too long" : null}
//       </form>
//     </div>
//   )
// }
interface  IForm{
email: string;
fristName: string;
lastName: string;
username: string;
password: string;
password1: string;
}

function SignIn(){
  const {register,watch,handleSubmit,formState:{errors},setError} = useForm<IForm>({
    defaultValues:{
      email:"@naver.com"
    }
  });
  const onValid = (data:IForm) => {
    console.log(errors)
    if(data.password !== data.password1){
      setError("password1",
      {message:"Password arer not the same"},
      {shouldFocus:true})
    }
    
  }
  return(
    <div>
      <form style={{display:'flex',flexDirection:'column'}}
       onSubmit={handleSubmit(onValid)}>
      <input {...register('email',{
        required:"Email is required",
        pattern: {
          value: /^[A-Za-z0-9._%+-]+@naver.com$/,
          message: "Only naver.com emails allowed"
        },
        validate:{
        noMSG: (value) => 
        value.includes("msg") ? "no msg allowed" : true
        }
        })} placeholder="Email" />
        <span> {errors?.email?.message} </span>
      <input {...register('fristName',{
        required:"First Name is requred",
      })} placeholder="First Name" />
        <span> {errors?.fristName?.message} </span>
      <input {...register('lastName',{
        required:"Last Name is requred",
      })} placeholder="Last Name" />
        <span> {errors?.lastName?.message} </span>
      <input {...register('username',{
        required:"User name is requred",
        })} placeholder="Username" />
        <span> {errors?.username?.message} </span>
      <input {...register('password',{
        required:"Password is requred",
        minLength:{
          value:5,
          message:'Your password Name is too short'
      }})} placeholder="Password" />
        <span> {errors?.password?.message} </span>
      <input {...register('password1')} placeholder="Password1" />
        <span> {errors?.password1?.message} </span>
        <button>Add</button>
      </form>
    </div>
  )
}
export default SignIn

