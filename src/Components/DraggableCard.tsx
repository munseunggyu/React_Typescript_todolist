import React from 'react';
import {Draggable} from 'react-beautiful-dnd';
import styled from 'styled-components';

const Card = styled.div<{isDragging:boolean}>`
  border-radius: 5px;
  margin-bottom: 5px;
  padding: 10px 10px;
  background-color: ${props => props.isDragging ? '#74b9ff' : "white"};
  box-shadow:${props => props.isDragging ? '0 2px 5px rgba(0,0,0,0.5)' : "none"}
`;

interface IDraggableCardProps {
    toDo:string,
    index:number;
}

function DraggableCard ({toDo,index}:IDraggableCardProps){
    return(
        <Draggable draggableId={toDo} key={toDo} index={index}>
        {(magic,info) => (
          <Card
          isDragging = {info.isDragging}
            ref={magic.innerRef}
            {...magic.dragHandleProps}
            {...magic.draggableProps}
          >
            {toDo}
          </Card>
        )}
      </Draggable>
    )
}

export default React.memo(DraggableCard);