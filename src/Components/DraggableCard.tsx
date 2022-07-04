import {Draggable} from 'react-beautiful-dnd';
import styled from 'styled-components';

const Card = styled.div`
  border-radius: 5px;
  margin-bottom: 5px;
  padding: 10px 10px;
  background-color: white;
`;

interface IDraggableCardProps {
    toDo:string,
    index:number;
}

function DraggableCard ({toDo,index}:IDraggableCardProps){
    return(
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
    )
}

export default DraggableCard;