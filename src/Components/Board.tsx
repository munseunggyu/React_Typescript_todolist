import { Draggable,Droppable } from "react-beautiful-dnd"
import styled from "styled-components"
import DraggableCard from "./DraggableCard"


const Wrapper = styled.div`
  padding: 10px 10px;
  background-color: #DADFE9;
  border-radius: 5px;
  min-height: 200px;
`;

const Title = styled.div`
    text-align:center;
    font-weight:600;
    margin-bottom:10px;
    font-size:18px;
`

interface IBoardProps{
    toDos:string[],
    boardId:string
}

function Board({toDos,boardId}:IBoardProps){
    return(
        <Wrapper>
            <Title> {boardId} </Title>
            <Droppable droppableId={boardId}>
                {(magic) => (
                <div ref={magic.innerRef} {...magic.droppableProps}>
                    {toDos.map((toDo, index) => (
                        <DraggableCard key={toDo} toDo={toDo} index={index} />
                    ))}
                    {magic.placeholder}
                </div>
                )}
            </Droppable>
        </Wrapper>
    )
}

export default Board;