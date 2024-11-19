import { CiSearch } from "react-icons/ci";
import ReusableTable from "../../components/ReusableTable";
import SearchInput from "../../components/SearchInput";
import SearchSelect from "../../components/SearchSelect";
import { PiMagnifyingGlassPlusLight } from "react-icons/pi";

const SavedContact = () => {
    const columns = [
        {
            // Radio button column
            render: (row) => (
                <input
                    className="relative  h-[1.125rem] w-[1.125rem]  rounded-[0.25rem] border-[0.125rem] border-solid border-defaultBlue outline-none checked:bg-defaultBlue  "
                    type="checkbox"
                    value=""
                    id="checkboxDefault"
                    onChange={() => console.log(row)}
                />
            ),
        },
        { header: 'Facility Name', accessor: 'Facility Name' },
        { header: 'Facility Address', accessor: 'Facility Address' },
        { header: 'Truck Activity', accessor: 'Truck Activity' },
        { header: 'Company URL', accessor: 'Company URL' },
        { header: 'Truck Equipment', accessor: 'Truck Equipment' },
        { header: 'Facility Commodities', accessor: 'Facility Commodities' },
        {
            header: 'Sales Area', render: (row) => (
                <div className="flex  items-center">
                    <label className="inline-flex items-center cursor-pointer">
                        <select
                            className=" border text-gray-700 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            onChange={(e) => console.log('Selected option for row:', row, e.target.value)}
                        >
                            <option value="">Select an option</option>
                            <option value="Area 1">Area 1</option>
                            <option value="Area 2">Area 2</option>
                            <option value="Area 3">Area 3</option>
                        </select>
                    </label>
                </div>
            ),
        },
        {
            header: 'Pipeline Stage', render: (row) => (
                <div className="flex  items-center">
                    <label className="inline-flex items-center cursor-pointer">
                        <select
                            className=" border text-gray-700 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            onChange={(e) => console.log('Selected option for row:', row, e.target.value)}
                        >
                            <option value="">Select an option</option>
                            <option value="Pipeline 1">Pipeline 1</option>
                            <option value="Pipeline 2">Pipeline 2</option>
                            <option value="Pipeline 3">Pipeline 3</option>
                        </select>
                    </label>
                </div>
            ),
        },

        {
            header: 'Status', render: (row) => (
                <div className="flex  items-center">
                    <label className="inline-flex items-center cursor-pointer">
                        <input
                            type="checkbox"
                            className="sr-only peer"
                            onChange={() => console.log('Toggle status for row:', row)}
                        />
                        <div className="relative w-11 h-6 bg-gray-200  rounded-full  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-defaultBlue"></div>
                    </label>
                </div>
            ),
        },





    ];
    const data = [
        { id: 1, 'Facility Name': 'Silicon Nexus ', 'Facility Address': 'Street # 1, abc, USA', 'Truck Activity': 'aLow', 'Company URL': 'silicon-nexus.com', 'Truck Equipment': 'Dry Van, Refrigerated', 'Facility Commodities': 'Street # 1, abc, USA' },
        { id: 2, 'Facility Name': 'Silicon Nexus ', 'Facility Address': 'Street # 1, abc, USA', 'Truck Activity': 'aLow', 'Company URL': 'silicon-nexus.com', 'Truck Equipment': 'Dry Van, Refrigerated', 'Facility Commodities': 'Street # 1, abc, USA' },
        { id: 3, 'Facility Name': 'Silicon Nexus ', 'Facility Address': 'Street # 1, abc, USA', 'Truck Activity': 'aLow', 'Company URL': 'silicon-nexus.com', 'Truck Equipment': 'Dry Van, Refrigerated', 'Facility Commodities': 'Street # 1, abc, USA' },
        { id: 4, 'Facility Name': 'Silicon Nexus ', 'Facility Address': 'Street # 1, abc, USA', 'Truck Activity': 'aLow', 'Company URL': 'silicon-nexus.com', 'Truck Equipment': 'Dry Van, Refrigerated', 'Facility Commodities': 'Street # 1, abc, USA' },




    ];
    return (
        <>
            <div className="flex justify-between items-center">
                <div className="flex w-1/2">
                    <SearchInput Icon={CiSearch} iconColor='defaultBlue' placeholder='Search' className="pl-10 w-full p-2 bg-white text-sm text-defaultBlue placeholder-defaultBlue	 border border-defaultBlue rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    <SearchSelect Icon={PiMagnifyingGlassPlusLight} iconColor='defaultBlue' placeholder='Saved Search' className="pl-10 w-full p-2 bg-white text-sm text-defaultBlue placeholder-defaultBlue border border-defaultBlue rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />

                </div>
            </div>
            <ReusableTable columns={columns} data={data} />
        </>
    )
}

export default SavedContact