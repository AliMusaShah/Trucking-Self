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
    const [{ isOver }, dropRef] = useDrop({
        accept: 'Card',
        drop: (item) => handleDrop(item),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
        }),

    })

    const handleDrop = (item) => {
        console.log(item)
        setColumns((column) => {

        })
    }

    return (
        <div className="flex gap-3">
            {
                columns.map((item, index) => (
                    <div key={index} className="flex flex-col items-start shadow-lg bg-gray-100">
                        <h1 className="text-xl font-semibold p-2 text-center mb-4 text-white bg-defaultBlue w-full">{item?.heading}</h1>
                        <div className="space-y-4 p-3" ref={dropRef} style={{ backgroundColor: isOver ? 'lightgreen' : 'white' }}>
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