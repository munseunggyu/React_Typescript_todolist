import React from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {DragDropContext, Draggable, Droppable, DropResult} from 'react-beautiful-dnd'
import styled from "styled-components";
import { todoState } from "./atom";

const Wrapper = styled.div`
  display: flex;
  max-width: 480px;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;

`;

const Boards = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(1, 1fr);
`;

const Board = styled.div`
  padding: 20px 10px;
  padding-top: 30px;
  background-color: #DADFE9;
  border-radius: 5px;
  min-height: 200px;
`;

const Card = styled.div`
  border-radius: 5px;
  margin-bottom: 5px;
  padding: 10px 10px;
  background-color: white;
`;

function Hey(){
  const [toDos,setToDos] = useRecoilState(todoState)
  const onDragEnd =({destination,source,draggableId}:DropResult) => {
    if(!destination) return;
    setToDos(prev => {
      let copyToDos = [...prev]
      copyToDos.splice(source.index,1)
      copyToDos.splice(destination?.index,0,draggableId);
      return copyToDos;
    })
  }
  return(
    <DragDropContext onDragEnd={onDragEnd}>
       <Wrapper>
        <Boards>
          <Droppable droppableId="one">
            {(magic) => (
              <Board ref={magic.innerRef} {...magic.droppableProps}>
                {toDos.map((toDo, index) => (
                  <Draggable draggableId={toDo} key={toDo} index={index}>
                    {(magic) => (
                      <Card
                        ref={magic.innerRef}
                        {...magic.dragHandleProps}
                        {...magic.draggableProps}
                      >
                        {toDo}
                      </Card>
                    )}
                  </Draggable>
                ))}
                {magic.placeholder}
              </Board>
            )}
          </Droppable>
        </Boards>
      </Wrapper>
    </DragDropContext>
  )
}

export default Hey;