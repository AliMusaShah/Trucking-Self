import { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Column from './Column';

const KanbanBoard = () => {
    const [columns, setColumns] = useState({
        todo: [
            { id: 1, text: 'Task 1' },
            { id: 2, text: 'Task 2' },
        ],
        inProgress: [
            { id: 3, text: 'Task 3' },
        ],
        done: [
            { id: 4, text: 'Task 4' },
        ],
    });

    const moveCard = (sourceColumn, targetColumn, cardId) => {
        const card = columns[sourceColumn].find(card => card.id === cardId);
        setColumns(prevColumns => {
            const updatedSource = prevColumns[sourceColumn].filter(card => card.id !== cardId);
            const updatedTarget = [...prevColumns[targetColumn], card];
            return {
                ...prevColumns,
                [sourceColumn]: updatedSource,
                [targetColumn]: updatedTarget,
            };
        });
    };

    return (
        <DndProvider backend={HTML5Backend}>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                {Object.keys(columns).map((columnName) => (
                    <Column
                        key={columnName}
                        name={columnName}
                        cards={columns[columnName]}
                        moveCard={moveCard}
                    />
                ))}
            </div>
        </DndProvider>
    );
};

export default KanbanBoard;
