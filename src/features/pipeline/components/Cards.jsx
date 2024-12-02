
import PropTypes from 'prop-types';
import { useDrag } from 'react-dnd'

const Cards = ({ lead, columnId }) => {
    const [{ isDragging }, drag] = useDrag({
        type: 'Card',
        item: () => ({ ...lead, columnId }),
        collect: (monitor) => {
            return {
                isDragging: monitor.isDragging(),
            };
        },


    })
    // const handleDrag = (lead) => {
    //     console.log(lead)
    // }
    return (
        <div className=" p-1 cursor-grab bg-white rounded shadow" ref={drag} onClick={() => console.log(columnId)} style={{ opacity: isDragging ? 0.5 : 1 }}>
            {/* <div className="text-sm text-gray-600 w-full"> */}
            <div className="flex justify-between p-2  font-normal text-defaultBlue">
                <span className="font-semibold">{lead.company}</span>
                {isDragging && 'emoji'}
                <span>
                    <label className="inline-flex items-center cursor-pointer">
                        <input
                            type="checkbox"
                            className="sr-only peer"
                            onChange={() => console.log('Toggle status for row:')}
                        />
                        <div className="relative w-11 h-6 bg-gray-200  rounded-full  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-defaultBlue"></div>
                    </label>
                </span>
            </div>
            <div className="flex justify-between p-2  text-xs text-gray-600">
                <span>Person Name:</span>
                <span className="font-semibold">{lead.person.name}</span>
            </div>
            <div className="flex justify-between p-2 text-xs text-gray-600">
                <span>Person Email:</span>
                <span className="font-semibold">{lead.person.email}</span>
            </div>
            <div className="flex justify-between p-2 text-xs text-gray-600 w-full">
                <span>Person Phone:</span>
                <span className="font-semibold">{lead.person.phone}</span>
            </div>

        </div>
    )
}
Cards.propTypes = {
    lead: PropTypes.object.isRequired, // Define lead as an object
    columnId: PropTypes.number.isRequired,
};
export default Cards