import { useState } from 'react';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import CustomButton from '../../../components/CustomButton';
import { GoChevronLeft, GoChevronRight } from 'react-icons/go';
const accordionData = [
    {
        id: 0,
        title: "Silicon Nexus",
        url: 'www.silicon-nexus.com',
        industry: 'silicon Nexus',
        description: 'Lorem Ipsum',
        distance: '6 miles',
    },
    // {
    //     id: 1,
    //     title: "Facility Address",
    //     content: [
    //         {
    //             label: "Office Address",
    //             value: "Office 2, st#2, Washington, USA",
    //         },
    //         {
    //             label: "Truck Activity",
    //             value: "Medium",
    //         },
    //         {
    //             label: "Company URL",
    //             value: "https://www.silicon-nexus.com",
    //             isLink: true,
    //         },
    //         {
    //             label: "Truck Equipment Used",
    //             value: "Dry Van, Refrigerated",
    //         },
    //         {
    //             label: "Miles Away From Center Point",
    //             value: "6 miles",
    //         },
    //     ],
    // },
];

const Accordion = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (id) => {
        setOpenIndex(openIndex === id ? null : id);
    };

    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-100 rounded-lg shadow-md">
                <div>
                    <h2 className="text-lg font-semibold text-gray-700">Location Details</h2>
                    <p className="text-sm  text-gray-500">(Results: 15 Locations)</p>
                </div>
                <div className="flex items-center space-x-2">
                    <button
                        className="p-1 bg-blue-100 text-blue-600 rounded-md hover:bg-blue-200 transition"
                        aria-label="Previous"
                    >
                        <GoChevronLeft size={22} />
                    </button>
                    <button
                        className="p-1 bg-defaultBlue text-white rounded-md hover:bg-blue-700 transition"
                        aria-label="Next"
                    >
                        <GoChevronRight size={22} />
                    </button>
                </div>
            </div>
            <div className="border-b border-gray-300 bg-white rounded-md shadow-sm">
                {accordionData.map((item, index) => (
                    <div key={index}>

                        <div
                            className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-100 transition gap-2"

                        >
                            <input
                                className="relative  h-[1.125rem] w-[1.125rem]  rounded-[0.25rem] border-[0.125rem] border-solid border-defaultBlue outline-none checked:bg-defaultBlue  "
                                type="checkbox"
                                value=""
                                id="checkboxDefault"
                            />
                            <div className='flex justify-between w-full items-center gap-2' onClick={() => toggleAccordion(item?.id)}>

                                <h2 className="text-base font-medium text-gray-800">{item?.title}</h2>
                                <span
                                    className={`transform transition-transform duration-200 ${openIndex === item?.id ? 'rotate-180' : ''
                                        }`}
                                >
                                    <MdOutlineKeyboardArrowDown size={24} />
                                </span>
                            </div>

                        </div>
                        {openIndex === item?.id && (
                            <div className="p-4 text-gray-800">
                                <div className="mb-4">
                                    <p className="text-sm text-gray-500">Company URL</p>
                                    <a
                                        href={item.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="font-medium text-blue-600 hover:underline"
                                    >
                                        {item.url}
                                    </a>

                                </div>
                                <div className="mb-4">
                                    <p className="text-sm text-gray-500">Company Industry</p>
                                    <span
                                        className="font-medium hover:underline"
                                    >
                                        {item.industry}
                                    </span>

                                </div>
                                <div className="mb-4">
                                    <p className="text-sm text-gray-500">Short Description</p>
                                    <span
                                        className="font-medium hover:underline"
                                    >
                                        {item.description}
                                    </span>

                                </div>
                                <div className="mb-4">
                                    <p className="text-sm text-gray-500">Miles Away From Center Point</p>
                                    <span
                                        className="font-medium hover:underline"
                                    >
                                        {item.distance}
                                    </span>

                                </div>
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
