import { useState } from 'react';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Accordion = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="space-y-4">
            {/* Accordion Item 1 */}
            <div className="border-b">

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
            </div>

            {/* Accordion Item 2 */}
            <div className="border-b">
                <div
                    className="flex justify-between items-center p-4 cursor-pointer"
                    onClick={() => toggleAccordion(1)}
                >
                    <h2 className="text-xl font-semibold">Accordion Item 2</h2>
                    <span
                        className={`transform transition-transform duration-200 ${openIndex === 1 ? 'rotate-180' : ''}`}
                    >
                        <MdOutlineKeyboardArrowDown size={24} />
                    </span>
                </div>
                {openIndex === 1 && (
                    <div className="p-4 text-gray-700">
                        <p>This is the content of the second accordion item.</p>
                    </div>
                )}
            </div>

            {/* Accordion Item 3 */}
            <div className="border-b">
                <div
                    className="flex justify-between items-center p-4 cursor-pointer"
                    onClick={() => toggleAccordion(2)}
                >
                    <h2 className="text-xl font-semibold">Accordion Item 3</h2>
                    <span
                        className={`transform transition-transform duration-200 ${openIndex === 2 ? 'rotate-180' : ''}`}
                    >
                        <MdOutlineKeyboardArrowDown size={24} />
                    </span>
                </div>
                {openIndex === 2 && (
                    <div className="p-4 text-gray-700">
                        <p>This is the content of the third accordion item.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Accordion;
