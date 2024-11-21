import { CiSearch } from "react-icons/ci";
import SearchInput from "../../components/SearchInput";
import ReusableTable from "../../components/ReusableTable";
import CustomModal from "../../components/CustomModal";
import { useState } from "react";
import CustomButton from "../../components/CustomButton";
import AddNewUserFrom from "./components/AddNewUserFrom";

const AdminUserManagement = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    // const [selectedRow, setSelectedRow] = useState(null);
    const handleModal = () => { setModalIsOpen(true) }
    const closeModal = () => { setModalIsOpen(false) }
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
        { header: 'Full Name', accessor: 'FullName' },
        { header: 'Company', accessor: 'company' },
        { header: 'Title', accessor: 'title' },
        { header: 'Email', accessor: 'email' },
        { header: 'Membership Plan', accessor: 'membershipPlan' },
        { header: 'Created Date', accessor: 'createdDate' },


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
        { id: 1, 'FullName': 'Syed Ali Musa Shah ', 'company': 'Silicon', 'title': 'FE', 'email': 'silicon-nexus.com', 'membershipPlan': 'Basic', 'createdDate': '25-07-2024' },




    ];
    return (
        <>
            <div className="flex justify-between items-center">
                <SearchInput Icon={CiSearch} iconColor='defaultBlue' placeholder='Search' className="pl-10 w-full p-2 bg-white text-sm text-defaultBlue placeholder-defaultBlue	 border border-defaultBlue rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <CustomButton size="md" onClick={handleModal}>
                    +Invite User
                </CustomButton>

            </div>
            <ReusableTable columns={columns} data={data} />
            <CustomModal
                title='Add New User'
                isOpen={modalIsOpen}
                onClose={closeModal}

            >
                <AddNewUserFrom onSubmit={closeModal} />


            </CustomModal>
        </>
    )
}

export default AdminUserManagement