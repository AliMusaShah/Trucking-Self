import ReusableTable from "../../../components/ReusableTable";


const SavedFacilitiesModal = () => {


    const columns = [
        {
            // Radio button column
            // render: (row) => (
            //     <input
            //         className="relative  h-[1.125rem] w-[1.125rem]  rounded-[0.25rem] border-[0.125rem] border-solid border-defaultBlue outline-none checked:bg-defaultBlue  "
            //         type="checkbox"
            //         value=""
            //         id="checkboxDefault"
            //         onChange={() => console.log(row)}
            //     />
            // ),
        },
        { header: 'Facility Name', accessor: 'Facility Name' },
        { header: 'Facility Address', accessor: 'Facility Address' },
        { header: 'Truck Activity', accessor: 'Truck Activity' },
        { header: 'Company URL', accessor: 'Company URL' },
        { header: 'Truck Equipment', accessor: 'Truck Equipment' },
        { header: 'Facility Commodities', accessor: 'Facility Commodities' },





    ];
    const data = [
        { id: 1, 'Facility Name': 'Silicon Nexus ', 'Facility Address': 'Street # 1, abc, USA', 'Truck Activity': 'aLow', 'Company URL': 'silicon-nexus.com', 'Truck Equipment': 'Dry Van, Refrigerated', 'Facility Commodities': 'Street # 1, abc, USA' },
        { id: 2, 'Facility Name': 'Silicon Nexus ', 'Facility Address': 'Street # 1, abc, USA', 'Truck Activity': 'aLow', 'Company URL': 'silicon-nexus.com', 'Truck Equipment': 'Dry Van, Refrigerated', 'Facility Commodities': 'Street # 1, abc, USA' },
        { id: 3, 'Facility Name': 'Silicon Nexus ', 'Facility Address': 'Street # 1, abc, USA', 'Truck Activity': 'aLow', 'Company URL': 'silicon-nexus.com', 'Truck Equipment': 'Dry Van, Refrigerated', 'Facility Commodities': 'Street # 1, abc, USA' },
        { id: 4, 'Facility Name': 'Silicon Nexus ', 'Facility Address': 'Street # 1, abc, USA', 'Truck Activity': 'aLow', 'Company URL': 'silicon-nexus.com', 'Truck Equipment': 'Dry Van, Refrigerated', 'Facility Commodities': 'Street # 1, abc, USA' },




    ];
    return (
        <ReusableTable columns={columns} data={data} />
    )
}

export default SavedFacilitiesModal