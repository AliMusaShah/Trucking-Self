import { useState } from 'react';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import CustomButton from '../../../components/CustomButton';
const accordionData = [
    {
        id: 0,
        title: "Facility Address",
        content: [
            {
                label: "Office Address",
                value: "Office 2, st#2, Washington, USA",
            },
            {
                label: "Truck Activity",
                value: "Medium",
            },
            {
                label: "Company URL",
                value: "https://www.silicon-nexus.com",
                isLink: true,
            },
            {
                label: "Truck Equipment Used",
                value: "Dry Van, Refrigerated",
            },
            {
                label: "Miles Away From Center Point",
                value: "6 miles",
            },
        ],

    },
    {
        id: 1,
        title: "Facility Address",
        content: [
            {
                label: "Office Address",
                value: "Office 2, st#2, Washington, USA",
            },
            {
                label: "Truck Activity",
                value: "Medium",
            },
            {
                label: "Company URL",
                value: "https://www.silicon-nexus.com",
                isLink: true,
            },
            {
                label: "Truck Equipment Used",
                value: "Dry Van, Refrigerated",
            },
            {
                label: "Miles Away From Center Point",
                value: "6 miles",
            },
        ],
    },
];

const Accordion = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (id) => {
        setOpenIndex(openIndex === id ? null : id);
    };

    return (
        <div className="space-y-4">

            {/* <div className="border-b">

                <div
                    className="flex justify-between items-center p-4 cursor-pointer"
                    onClick={() => toggleAccordion(0)}
                >
                    <h2 className="text-xl font-semibold">Accordion Item 1</h2>
                    <span
                        className={`transform transition-transform duration-200 ${openIndex === 0 ? 'rotate-180' : ''}`}
                    >

                        <MdOutlineKeyboardArrowDown size={24} />
                    </span>
                </div>
                {openIndex === 0 && (
                    <div className="p-4 text-gray-700">
                        <p>This is the content of the first accordion item.</p>
                    </div>
                )}
            </div> */}
            <div className="border-b border-gray-300 bg-white rounded-md shadow-sm">
                {accordionData.map(({ id, title, content, }) => (
                    <div key={id}>
                        <div
                            className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-100 transition"
                            onClick={() => toggleAccordion(id)}
                        >
                            <h2 className="text-base font-medium text-gray-800">{title}</h2>
                            <span
                                className={`transform transition-transform duration-200 ${openIndex === id ? 'rotate-180' : ''
                                    }`}
                            >
                                <MdOutlineKeyboardArrowDown size={24} />
                            </span>
                        </div>
                        {openIndex === id && (
                            <div className="p-4 text-gray-800">
                                {content.map((item, index) => (
                                    <div key={index} className="mb-4">
                                        <p className="text-gray-500">{item.label}</p>
                                        {item.isLink ? (
                                            <a
                                                href={item.value}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="font-medium text-blue-600 hover:underline"
                                            >
                                                {item.value}
                                            </a>
                                        ) : (
                                            <p className="font-medium text-gray-800">{item.value}</p>
                                        )}
                                    </div>
                                ))}
                                <div className="flex justify-center gap-3">
                                    <CustomButton
                                        // key={index}
                                        className='border border-defaultBlue'
                                        variant='normal'
                                        size='md'
                                    >
                                        View
                                    </CustomButton>
                                    <CustomButton
                                        size='md'
                                    >
                                        Save to List
                                    </CustomButton>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>





        </div>
    );
};

export default Accordion;
