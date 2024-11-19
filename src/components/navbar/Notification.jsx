import { IoNotificationsOutline } from "react-icons/io5";

function Notification() {
    return (
        <div className='w-[50px] h-[50px] border border-white rounded-full flex justify-center items-center cursor-pointer'>
            <IoNotificationsOutline color="white" size={24} />

        </div>
    )
}

export default Notification