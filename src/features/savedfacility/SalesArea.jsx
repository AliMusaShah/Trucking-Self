import { CiSearch } from "react-icons/ci"
import { PiMagnifyingGlassPlusLight } from "react-icons/pi"
import SearchInput from "../../components/SearchInput"
import SearchSelect from "../../components/SearchSelect"
import ReusableTable from "../../components/ReusableTable"
import CustomModal from "../../components/CustomModal"
import SavedFacilitiesModal from "./components/SavedFacilitiesModal"
import { useState } from "react"
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
    { header: 'Group Name', accessor: 'Group Name' },
    { header: 'Number of Facilities', accessor: 'Number of Facilities' },
    { header: 'Notes', accessor: 'notes' },
    { header: 'Number of Contacts', accessor: 'Number of Contacts' },
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
    { id: 1, 'Group Name': 'Group_Name_1 ', 'Number of Facilities': '123', 'notes': 'abc....xyz', 'Number of Contacts': '3', },
    { id: 1, 'Group Name': 'Group_Name_1 ', 'Number of Facilities': '123', 'notes': 'abc....xyz', 'Number of Contacts': '3', },



];

const SalesArea = () => {
    const [ModalSate, setModalSate] = useState(false)
    const handleOpenModal = () => {
        setModalSate(true)
    }
    const CloseModal = () => {
        setModalSate(false);
    }
    return (
        <>
            <div className="flex justify-between items-center">
                <div className="flex w-1/2">
                    <SearchInput Icon={CiSearch} iconColor='defaultBlue' placeholder='Search' className="pl-10 w-full p-2 bg-white text-sm text-defaultBlue placeholder-defaultBlue	 border border-defaultBlue rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    <SearchSelect Icon={PiMagnifyingGlassPlusLight} iconColor='defaultBlue' placeholder='Saved Search' className="pl-10 w-full p-2 bg-white text-sm text-defaultBlue placeholder-defaultBlue border border-defaultBlue rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />

                </div>
            </div>
            <div className="">
                <ReusableTable columns={columns} data={data} onClick={handleOpenModal} />
            </div>

            <CustomModal
                title='Saved Facilities'
                isOpen={ModalSate}
                onClose={CloseModal}
            >
                <SavedFacilitiesModal />
            </CustomModal>
        </>
    )
}

export default SalesArea