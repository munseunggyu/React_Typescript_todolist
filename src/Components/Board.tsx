import { Draggable,Droppable } from "react-beautiful-dnd"
import styled from "styled-components"
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

interface IAreaProps{
    isDraggingFromThis:boolean,
    isDraggingOver:boolean

}

interface IBoardProps{
    toDos:string[],
    boardId:string
}

function Board({toDos,boardId}:IBoardProps){
    return(
        <Wrapper>
            <Title> {boardId} </Title>
            <Droppable droppableId={boardId}>
                {(magic,info) => (
                <Area 
                isDraggingOver={info.isDraggingOver} 
                isDraggingFromThis = {Boolean(info.draggingFromThisWith)}
                ref={magic.innerRef} {...magic.droppableProps}>
                    {toDos.map((toDo, index) => (
                        <DraggableCard key={toDo} toDo={toDo} index={index} />
                    ))}
                    {magic.placeholder}
                </Area>
                )}
            </Droppable>
        </Wrapper>
    )
}

export default Board;