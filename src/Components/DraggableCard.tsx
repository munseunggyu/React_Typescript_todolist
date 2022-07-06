import React, { FormEvent, useState } from 'react';
import {Draggable} from 'react-beautiful-dnd';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { todoState } from '../atom';

const CardBox = styled.div<{isDragging:boolean}>`
  border-radius: 5px;
  margin-bottom: 5px;
  padding: 10px 10px;
  background-color: ${props => props.isDragging ? '#74b9ff' : "white"};
  box-shadow:${props => props.isDragging ? '0 2px 5px rgba(0,0,0,0.5)' : "none"};
  display: flex;
  justify-content:space-between;
  `;


interface IDraggableCardProps {
    toDoId:number;
    toDoText:string;
    index:number;
    boardId:string;
}

function DraggableCard ({boardId,toDoId,toDoText,index}:IDraggableCardProps){
  const setToDos = useSetRecoilState(todoState)
  const toDos = useRecoilValue(todoState)
  const onClick=()=>{
    setToDos(prev => {
      let newToDos = prev[boardId].filter(todo=> todo.id !== toDoId)
      return {
        ...prev,
        [boardId]:newToDos
      }
    })
  }

  return(
      <Draggable draggableId={toDoId + ''} index={index}>
      {(magic,info) => (
        <CardBox
        isDragging = {info.isDragging}
          ref={magic.innerRef}
          {...magic.dragHandleProps}
          {...magic.draggableProps}
        >
            <span>{toDoText}</span>
            <button onClick={onClick}>x</button>
          </CardBox>
      )}
    </Draggable>
  )
}

export default React.memo(DraggableCard);