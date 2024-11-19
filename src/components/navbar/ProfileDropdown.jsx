import { useState } from "react";
import { Link } from "react-router-dom";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import HelpIcon from '../../assets/help.png'
import SettingIcon from '../../assets/setting.png'
import LogoutIcon from '../../assets/logout.png'
import ProfileAvatar from "../../assets/profile-avatar.png";





function ProfileDropdown() {
    const [isOpen, setIsOpen] = useState(false);


    const handleLogOut = () => {
        console.log('logout Clicked')

    }
    const toggleDropdown = () => setIsOpen(!isOpen);

    return (
        <div className="w-[184px] h-[50px] relative  ">
            <div
                className="flex items-center justify-evenly text-white cursor-pointer"
                onClick={toggleDropdown}
            >
                <img
                    src={ProfileAvatar}
                    alt="Profile Picture"
                    className="w-[40px] h-[40px] rounded-[8px]"
                />
                <div className="ml-3">
                    <div className="text-white text-[16px] font-semibold ">
                        {`Ali Musa `}
                    </div>
                </div>

                {isOpen ? (<MdKeyboardArrowUp color="white" size={24} />) : (<MdKeyboardArrowDown color="white" size={24} />)}
            </div>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
                    <div
                        className="py-1"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="options-menu"
                    >
                        <Link
                            to="/help"
                            className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            role="menuitem"
                        >
                            <img src={HelpIcon} alt="" className="mr-2" />
                            Help

                        </Link>
                        <Link
                            to="/settings/updateprofile"
                            className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            role="menuitem"
                        >
                            <img src={SettingIcon} alt="" className="mr-2" />
                            Settings

                        </Link>
                        <div
                            to="/"
                            className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                            role="menuitem"
                            onClick={handleLogOut}
                        >
                            <img src={LogoutIcon} alt="" className="mr-2" />
                            Logout

                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ProfileDropdown;
