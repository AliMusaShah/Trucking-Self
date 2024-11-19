
import PropTypes from 'prop-types';

import logo from "../../assets/logo2.png";
import Notification from './Notification';
import ProfileDropdown from './ProfileDropdown';
import NavigationTabs from './NavigationTabs';

function Navbar({ children }) {

    return (
        <>
            <div className={`flex justify-between p-5 bg-defaultBlue `}>
                <img src={logo} alt="logo" />
                <NavigationTabs />
                <div className="flex gap-4">
                    <Notification />
                    <ProfileDropdown />

                </div>
            </div>
            <div className='flex flex-col justify-between bg-defaultBlue p-5 ' >
                {children}
            </div>
        </>
    );
}
Navbar.propTypes = {
    children: PropTypes.node,
};
export default Navbar;
