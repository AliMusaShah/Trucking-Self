import Card from './Card';
import { useDrop } from 'react-dnd';

const Column = ({ name, cards, moveCard }) => {
    const [{ isOver }, drop] = useDrop(() => ({
        accept: 'CARD',
        drop: (item) => moveCard(item.columnName, name, item.id),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
        }),
    }));

    return (
        <div
            ref={drop}
            style={{
                width: '300px',
                minHeight: '400px',
                background: isOver ? 'lightgreen' : 'lightgray',
                padding: '10px',
                borderRadius: '8px',
                margin: '10px',
            }}
        >
            <h3>{name}</h3>
            {cards.map((card) => (
                <Card key={card.id} id={card.id} text={card.text} columnName={name} moveCard={moveCard} />
            ))}
        </div>
    );
};

export default Column;
