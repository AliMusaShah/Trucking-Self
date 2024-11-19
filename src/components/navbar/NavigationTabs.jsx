
import { useLocation, Link } from "react-router-dom";

const tabs = [
    { label: "Home", to: '/home', url: 'home' },
    { label: "Facility Search", to: '/facilitysearch/map-view', url: '/facilitysearch' },
    { label: "Saved Facilities", to: '/savedfacility/sales-area', url: 'savedfacility' },
    { label: "Saved Contacts", to: '/saved-contacts', url: 'saved-contacts' },
    { label: "Calendar", to: '/calendar/weekly', url: 'calendar' },
    { label: "Pipeline", to: '/pipeline', url: 'pipeline' },
];

const NavigationTabs = () => {
    const { pathname } = useLocation();

    return (
        <div className="flex items-center my-2">
            <div className="w-full flex">
                {tabs.map((tab, index) => {
                    const isActive = pathname.includes(tab.url);

                    return (
                        <Link
                            key={index}
                            to={tab.to}
                            className={`px-4 py-2 mx-1 cursor-pointer transition-colors duration-200 text-white${isActive
                                ? " text-base font-bold border-b-2 border-white "
                                : " text-base"
                                }`}
                        >
                            <div className="flex items-center">
                                {tab.label}
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default NavigationTabs;
