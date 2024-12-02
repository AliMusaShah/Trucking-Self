import { useDrop } from 'react-dnd';
import Cards from "./Cards";
import { useState } from 'react';





const data = [
    {
        columnId: 1,
        heading: 'Cleveland Cliffs',
        leads: [
            {
                cardId: '1',
                company: "OBERFIELDS",
                switch: "Off",
                person: {
                    name: "Darrick Collins",
                    email: "dcollins@oberfields.com",
                    phone: "(614) 252-0955"
                }
            },
            {
                cardId: '2',
                company: "AEP East Transmission RDC",
                switch: "On",
                person: {
                    name: "Jeff Zerkle",
                    email: "jzerkle@aep.com",
                    phone: "614-425-8505"
                }
            },
            {
                cardId: '3',
                company: "Amsted Rail Griffin Wheel",
                switch: "On",
                person: {
                    name: "Joe Heller",
                    email: "jheller@amstedrail.com",
                    phone: "312-922-4501"
                }
            },
            {
                cardId: '4',
                company: "Cleveland Cliffs Mansfield Works",
                switch: "On",
                person: {
                    name: "Leslie Moll",
                    email: "leslie.moll@clevelandcliffs.com",
                    phone: "219-399-3656"
                }
            },
            {
                cardId: '5',
                company: "Engineered Wire Products",
                switch: "On",
                person: {
                    name: "Dave Jillson",
                    email: "jillsond@keystonesteel.com",
                    phone: "(800) 447-6444"
                }
            }
        ]
    },
    {
        columnId: 2,
        heading: 'Tech Dynamics',
        leads: [
            {
                cardId: '6',
                company: "Tech Dynamics",
                switch: "Off",
                person: {
                    name: "Alice Johnson",
                    email: "alice.johnson@techdynamics.com",
                    phone: "(408) 555-2367"
                }
            },
            {
                cardId: '7',
                company: "GreenTech Solutions",
                switch: "On",
                person: {
                    name: "Bob Smith",
                    email: "bob.smith@greentech.com",
                    phone: "415-987-6543"
                }
            },
            {
                cardId: '8',
                company: "Silverstone Innovations",
                switch: "Off",
                person: {
                    name: "Chris Walker",
                    email: "chris.walker@silverstone.com",
                    phone: "(212) 555-7890"
                }
            },
            {
                cardId: '9',
                company: "Bright Future Labs",
                switch: "On",
                person: {
                    name: "Dana King",
                    email: "dana.king@brightfuturelabs.com",
                    phone: "303-555-1234"
                }
            },
            {
                cardId: '10',
                company: "Nimbus Technologies",
                switch: "On",
                person: {
                    name: "Eric Taylor",
                    email: "eric.taylor@nimbustech.com",
                    phone: "(800) 555-4321"
                }
            }
        ]
    }
];
const Leads = () => {
    const [columns, setColumns] = useState(data)
    // const [sourceColumnId, setSourceColumnId] = useState(null);
    const [{ isOver, }, drop] = useDrop({
        accept: 'Card',
        drop: (item, monitor) => handleDrop(item, item.columnId, monitor),

        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop()
        }),

    })
    console.log(useDrop)
    const handleDrop = (item, targetColumnId, monitor) => {
        // console.log(item);
        console.log(monitor.getDropResult(), 'monitor')

        // Update columns by moving the dropped card to the correct column
        setColumns((prevColumns) => {
            // Find the column where the card is currently located (the source column)
            const sourceColumn = prevColumns.find((column) =>
                column.leads.some((lead) => lead.cardId === item.cardId)
            );
            console.log(sourceColumn, 'sourceColumn')
            // If the card is found, we need to remove it from the source column
            if (sourceColumn) {
                //     // Remove the item from the source column's leads
                const updatedSourceColumn = {
                    ...sourceColumn,
                    leads: sourceColumn.leads.filter((lead) => lead.cardId !== item.cardId),

                };
                console.log(updatedSourceColumn, 'updatedSourceColumn')
                //     // Find the target column where the card is dropped
                const targetColumn = prevColumns.find(
                    (column) => column.columnId === targetColumnId
                );
                console.log(targetColumn, 'targetColumn')

                //     // Add the item to the target column
                const updatedTargetColumn = {
                    ...targetColumn,
                    leads: [...targetColumn.leads, item],
                };
                console.log(updatedTargetColumn, 'updatedTargetColumn')


                //     // Return the updated columns
                return prevColumns.map((column) =>
                    column.columnId === sourceColumn.columnId
                        ? updatedSourceColumn
                        : column.columnId === targetColumnId
                            ? updatedTargetColumn
                            : column
                );
            }

            // If the card is not found, just return the previous columns (no changes)
            return prevColumns;
        });
    };


    return (
        <div className="flex gap-3">
            {
                columns.map((item, index) => (
                    <div key={index} className="flex flex-col items-start shadow-lg bg-gray-100">
                        <h1 className="text-xl font-semibold p-2 text-center mb-4 text-white bg-defaultBlue w-full">{item?.heading}</h1>
                        <div className="space-y-4 p-3" ref={drop} style={{ backgroundColor: isOver ? 'lightgreen' : 'white' }}>
                            {item?.leads.map((lead, index) => (
                                <Cards lead={lead} key={index} columnId={item.columnId} />
                            ))}
                        </div>
                        {isOver && <div>Drop Here!</div>}
                    </div>

                ))}
        </div>
    );
};

export default Leads;
// const { lead, columnId: sourceColumnId } = item;

// setColumns((prevColumns) => {
//     // Remove the lead from the source column
//     const sourceColumn = prevColumns.find(col => col.columnId === sourceColumnId);
//     const updatedSourceLeads = sourceColumn.leads.filter(l => l.cardId !== lead.cardId);

//     // Add the lead to the target column
//     const targetColumn = prevColumns.find(col => col.columnId === item.columnId);
//     const updatedTargetLeads = [...targetColumn.leads, lead];

//     return prevColumns.map(col => {
//         if (col.columnId === sourceColumnId) {
//             return { ...col, leads: updatedSourceLeads };
//         }
//         if (col.columnId === item.columnId) {
//             return { ...col, leads: updatedTargetLeads };
//         }
//         return col;
//     });
// });