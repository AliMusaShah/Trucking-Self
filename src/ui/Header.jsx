import FacilityCard from "../components/TextCard"
import Tabs from "../components/Tabs"
import SearchInput from "../components/SearchInput"
import { SlLocationPin } from "react-icons/sl";
import { useLocation } from "react-router-dom";
import SearchSelect from "../components/SearchSelect";


const header = [
    {
        settings: {
            title: 'Page Title',
            description: 'Page description goes here',
            tabs: [
                { label: 'Update Profile', to: '/settings/updateprofile' },
                { label: 'Update Password', to: '/settings/updatepassword' }
            ]
        },
        facilitysearch: {
            title: 'Facility Search',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus molestie tincidunt justo, sit amet hendrerit leo. Integer lobortis elementum nulla, feugiat tempus lorem rutrum a.',
            tabs: [
                { label: 'Map View', to: '/facilitysearch/map-view' },
                { label: 'List View', to: '/facilitysearch/list-view' }
            ]
        },
        savedfacility: {
            title: 'Saved Facilities',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus molestie tincidunt justo, sit amet hendrerit leo. Integer lobortis elementum nulla, feugiat tempus lorem rutrum a.',
            tabs: [
                { label: 'Sales Areas', to: '/savedfacility/sales-area' },
                { label: 'Saved Facilities', to: '/savedfacility/saved-facility' }
            ]
        },
        savedcontact: {
            title: 'Saved Contacts',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus molestie tincidunt justo, sit amet hendrerit leo. Integer lobortis elementum nulla, feugiat tempus lorem rutrum a.',
        },
        calendar: {
            title: 'Calendar',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus molestie tincidunt justo, sit amet hendrerit leo. Integer lobortis elementum nulla, feugiat tempus lorem rutrum a.',
            tabs: [
                { label: 'Weekly', to: '/calendar/weekly' },
                { label: 'Monthly', to: '/calendar/monthly' }
            ]
        },
        pipeline: {
            title: 'Pipelines',
        },
        userManagement: {
            title: 'User Management',
        },
    }
];


const Header = () => {
    const { pathname } = useLocation();
    const getHeaderData = () => {
        if (pathname.includes('update')) {
            return header[0].settings;
        } else if (pathname.includes('facilitysearch')) {
            return header[0].facilitysearch;
        } else if (pathname.includes('sales-area') || pathname.includes('saved-facility')) {
            return header[0].savedfacility;
        }
        else if (pathname.includes('saved-contacts')) {
            return header[0].savedcontact;
        }
        else if (pathname.includes('calendar')) {
            return header[0].calendar;
        } else if (pathname.includes('pipeline')) {
            return header[0].pipeline;
        } else if (pathname.includes('user-management')) {
            return header[0].userManagement;
        }

        else {
            return header[0].savedcontact; // or you can return a default object
        }
    };

    const headerData = getHeaderData();
    const isSettings = pathname.includes('update')
    const isSaleArea = pathname.includes('savedfacility')
    const isSavedContact = pathname.includes('saved-contacts')
    const isPipeline = pathname.includes('pipeline')
    const isCalendar = pathname.includes('calendar')
    const isAdminUsermanagement = pathname.includes('/admin/user-management')
    return (
        <>
            {!isSettings && <FacilityCard title={headerData?.title} description={headerData?.description} />}
            <div className="flex justify-between items-center">
                {isSettings || isSaleArea || isSavedContact || isCalendar || isPipeline || isAdminUsermanagement ? null : (<div className="flex w-full">
                    <SearchInput Icon={SlLocationPin} iconColor='white' placeholder='Address / Zip Code' className="pl-10 w-full p-2 bg-defaultBlue text-sm text-white placeholder-white	 border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    <SearchSelect Icon={SlLocationPin} iconColor='white' placeholder='Select Radius' className="pl-10 w-full p-2 bg-defaultBlue text-sm text-white placeholder-white border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>)}
                {isSavedContact || isPipeline || isAdminUsermanagement ? null : <Tabs data={headerData} />}

            </div>
        </>
    )
}

export default Header