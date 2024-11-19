import PropTypes from 'prop-types';
import CustomButton from './CustomButton'
import { useLocation } from "react-router-dom";

function Tabs({ data, }) {
    console.log(data)

    const { pathname } = useLocation();



    return (
        <div className="flex justify-around bg-white p-2 rounded-lg w-1/5">
            {data?.tabs.map((tab, index) => (
                <CustomButton
                    key={index}
                    variant={pathname === tab.to ? 'primary' : 'normal'}
                    to={tab?.to}
                >
                    {tab.label}
                </CustomButton>
            ))}
        </div>
    );
}
Tabs.propTypes = {
    data: PropTypes.object.isRequired
};
export default Tabs;
