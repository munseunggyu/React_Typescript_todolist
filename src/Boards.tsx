import React from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {DragDropContext, Draggable, Droppable, DropResult} from 'react-beautiful-dnd'
import styled from "styled-components";
import { signState, todoState } from "./atom";
import Board from "./Components/Board";
import Nav from "./Components/Nav";

export const Wrapper = styled.div`
  display: flex;
  max-width: 680px;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Boards = styled.div`
  display: grid;
  width: 100%;
  gap:10px;
  grid-template-columns: repeat(3, 1fr);
`;




function Hey(){
  const [toDos,setToDos] = useRecoilState(todoState)
  const onDragEnd =(info:DropResult) => {
    const {destination,draggableId,source} = info;
    console.log(destination,draggableId,source)
    if(!destination) return;
    if(destination?.droppableId === source.droppableId){
    setToDos(prev => {
          const boardCopy = [...prev[source.droppableId]]
          const taskObj = boardCopy[source.index]
          boardCopy.splice(source.index,1)
          boardCopy.splice(destination?.index,0,taskObj);
          return {
            ...prev,
            [source.droppableId]: boardCopy
          };
        })
    }
    if(destination.droppableId !== source.droppableId){
      setToDos(prev => {
        const sourceBoard = [...prev[source.droppableId]]
        const taskObj = sourceBoard[source.index]
        const destinationBoard= [...prev[destination.droppableId]]
        sourceBoard.splice(source.index,1)
        destinationBoard.splice(destination.index,0,taskObj)
        return {
          ...prev,
          [source.droppableId]:sourceBoard,
          [destination.droppableId]:destinationBoard
        }
      })
    }
  }
  return(
    <DragDropContext onDragEnd={onDragEnd}>
      <Nav />
       <Wrapper>
        <Boards>
          {Object.keys(toDos).map(boardId => <Board boardId={boardId} key={boardId} toDos={toDos[boardId]} />)}
        </Boards>
      </Wrapper>
    </DragDropContext>
  )
}

export default Hey;