import { useDrag } from 'react-dnd';

const Card = ({ id, text, columnName, moveCard }) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'CARD',
        item: { id, columnName },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    }));

    return (
        <div
            ref={drag}
            style={{
                padding: '10px',
                margin: '10px 0',
                backgroundColor: isDragging ? 'lightblue' : 'white',
                border: '1px solid gray',
                borderRadius: '4px',
                cursor: 'move',
            }}
        >
            {text}
        </div>
    );
};

export default Card;
