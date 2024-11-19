import PropTypes from 'prop-types';
import { FaBell } from "react-icons/fa";
import CustomButton from '../../../components/CustomButton'
const WeekEvent = ({ title, totalEvent }) => {
    const events = [
        {
            time: "13:00",
            title: "OBERFIELDS",
            startsIn: "Starts in 1h 20m",
            location: "4033 Alum Creek Dr, Obetz, OH 43207",
        },
        {
            time: "14:55",
            title: "AEP East Transmission RDC",
            startsIn: "Starts in 2h 45m",
            location: "4000 Etna Pkwy, Pataskala, OH 43062, USA",
        },
        {
            time: "14:55",
            title: "AEP East Transmission RDC",
            startsIn: "Starts in 2h 45m",
            location: "4000 Etna Pkwy, Pataskala, OH 43062, USA",
        },
    ];
    return (
        <div className=" p-4">
            <div className="flex items-center justify-between mb-4">
                <div className="flex">
                    <h2 className="text-xl font-bold mr-2"> {title}</h2>
                    {totalEvent && <span className="text-sm bg-defaultBlue text-white px-2 py-1 rounded-lg">{totalEvent ? totalEvent : '0'}</span>}
                </div>
                <CustomButton size="sm">
                    See All
                </CustomButton>
            </div>
            <div className="space-y-4">
                {events.map((event, index) => (
                    <div
                        key={index}
                        className="flex bg-white shadow-md rounded-lg overflow-hidden"
                    >
                        <div className="flex flex-col items-center justify-center bg-defaultBlue text-white px-8">
                            <FaBell size={24} />
                            <span className="text-lg font-semibold">{event.time}</span>
                        </div>
                        <div className="p-4">
                            <h3 className="text-lg font-semibold">{event.title}</h3>
                            <p className="text-sm text-gray-500">{event.startsIn}</p>
                            <p className="text-sm text-gray-600">{event.location}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
WeekEvent.propTypes = {
    title: PropTypes.string.isRequired,
    totalEvent: PropTypes.string, // Optional if not always present
};
export default WeekEvent