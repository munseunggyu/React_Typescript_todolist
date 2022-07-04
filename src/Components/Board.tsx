import { useRef } from "react";
import { Draggable,Droppable } from "react-beautiful-dnd"
import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import styled from "styled-components"
import { ITodo, todoState } from "../atom";
import DraggableCard from "./DraggableCard"


const Wrapper = styled.div`
  padding-top: 10px;
  background-color: #DADFE9;
  border-radius: 5px;
  min-height: 200px;
  display:flex;
  flex-direction:column;
`;

const Title = styled.div`
    text-align:center;
    font-weight:600;
    margin-bottom:10px;
    font-size:18px;
`
const Area = styled.div<IAreaProps>`
    background-color:${props=> props.isDraggingOver ? "#dfe6e9" : props.isDraggingFromThis ? "#b2bec3" : "transparent"};
    flex-grow:1;
    transition: background-color .3s ease-in-out;
    padding:20px;
`
const Form = styled.form`
    width:100%;
    input{
        width:100%;
    }
`
interface IAreaProps{
    isDraggingFromThis:boolean,
    isDraggingOver:boolean

}

interface IBoardProps{
    toDos:ITodo[],
    boardId:string
}

interface IForm{
    toDo:string;
}

function Board({toDos,boardId}:IBoardProps){
    const setToDos = useSetRecoilState(todoState)
    const { register,setValue,handleSubmit } = useForm<IForm>()
    const inputRef = useRef<HTMLInputElement>(null);
    const onValid = ({toDo}:IForm) => {
        const newToDo = {
            id:Date.now(),
            text:toDo,
        }
        setToDos(prev => {
            return {
                ...prev,
                [boardId]:[
                    newToDo,
                    ...prev[boardId]
                ]
            }
        })
        setValue("toDo", ""  )
    }
    return(
        <Wrapper>
            <Title> {boardId} </Title>
            <Form onSubmit={handleSubmit(onValid)}>
                <input 
                {...register("toDo",{required:true})}
                type="text" placeholder={`Ask task on ${boardId}`} />
            </Form>
            <Droppable droppableId={boardId}>
                {(magic,info) => (
                <Area 
                isDraggingOver={info.isDraggingOver} 
                isDraggingFromThis = {Boolean(info.draggingFromThisWith)}
                ref={magic.innerRef} {...magic.droppableProps}>
                    {toDos.map((toDo, index) => (
                        <DraggableCard key={toDo.id} toDoId={toDo.id} toDoText={toDo.text} index={index} />
                    ))}
                    {magic.placeholder}
                </Area>
                )}
            </Droppable>
        </Wrapper>
    )
}

export default Board;