import SearchInput from "../../components/SearchInput"
import SearchSelect from "../../components/SearchSelect"
import CutomButton from '../../components/CustomButton'
import { CiSearch } from "react-icons/ci"
import { PiMagnifyingGlassPlusLight } from "react-icons/pi"
import ReusableTable from "../../components/ReusableTable"
import CustomModal from "../../components/CustomModal"
import { useState } from "react"
import AddNewSaleForm from "./components/AddNewSaleForm"
import CompanyInformation from "./components/CompanyInformationForm"
import ContactListModal from "./components/ContactListModal"
import Tick from '../../assets/tick-success.png'
const ListView = () => {
    const [addNewSalesModal, setAddNewSalesModal] = useState(false);
    const [companyDetailModal, setCompanyDetailModal] = useState(false);
    const [ContactList, setContactList] = useState(false);
    const [successModal, setSuccessModal] = useState(false);


    const handleAddNewSalesModal = () => setAddNewSalesModal(true);
    const closeSuccessModal = () => setSuccessModal(false);

    const CloseSalesModal = () => {
        setAddNewSalesModal(false)
        setCompanyDetailModal(true)
    }
    const hanldeGetContact = () => {
        setCompanyDetailModal(false)
        setContactList(true)

    }
    const saveContact = (data) => {
        setContactList(false)
        setSuccessModal(true)
        console.log(data, 'data')
    }
    const CloseModal = () => {
        setAddNewSalesModal(false)
        setContactList(false)
        setSuccessModal(false)
        setCompanyDetailModal(false)
    }
    const columns = [
        {
            // Radio button column
            render: (row) => (
                // <input
                //     type="checkbox"
                // // checked={selectedRow === row.id}
                // // onChange={() => setSelectedRow(row.id)}
                // />
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
        { header: 'Distance', accessor: 'Distance' },
    ];
    const data = [
        { id: 1, 'Facility Name': 'Facility A', 'Facility Address': '123 Main St', 'Truck Activity': 'Active', 'Company URL': 'http://a.com', 'Truck Equipment': 'Truck 1', 'Facility Commodities': 'Oil', 'Distance': '5 miles' },
        { id: 2, 'Facility Name': 'Facility B', 'Facility Address': '456 Oak St', 'Truck Activity': 'Inactive', 'Company URL': 'http://b.com', 'Truck Equipment': 'Truck 2', 'Facility Commodities': 'Water', 'Distance': '10 miles' },
        { id: 3, 'Facility Name': 'Facility C', 'Facility Address': '123 Main St', 'Truck Activity': 'Active', 'Company URL': 'http://a.com', 'Truck Equipment': 'Truck 1', 'Facility Commodities': 'Oil', 'Distance': '5 miles' },
        { id: 4, 'Facility Name': 'Facility D', 'Facility Address': '456 Oak St', 'Truck Activity': 'Inactive', 'Company URL': 'http://b.com', 'Truck Equipment': 'Truck 2', 'Facility Commodities': 'Water', 'Distance': '10 miles' },

    ];
    return (
        <>
            <div className="flex justify-between items-center">
                <div className="flex w-1/2">
                    <SearchInput Icon={CiSearch} iconColor='defaultBlue' placeholder='Search' className="pl-10 w-full p-2 bg-white text-sm text-defaultBlue placeholder-defaultBlue	 border border-defaultBlue rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    <SearchSelect Icon={PiMagnifyingGlassPlusLight} iconColor='defaultBlue' placeholder='Saved Search' className="pl-10 w-full p-2 bg-white text-sm text-defaultBlue placeholder-defaultBlue border border-defaultBlue rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />

                </div>
                <CutomButton variant="primary" size="md" onClick={handleAddNewSalesModal}>
                    Save to List
                </CutomButton>
            </div>
            <div className="">
                <ReusableTable columns={columns} data={data} />
            </div>

            { }

            <CustomModal
                title='Add New Sales Areas'
                isOpen={addNewSalesModal}
                onClose={CloseModal}
                saveLabel='Save'
            >
                <AddNewSaleForm onClose={CloseSalesModal} />
            </CustomModal>
            <CustomModal
                title='Facility Details'
                isOpen={companyDetailModal}
                onClose={CloseModal}
                onSave={hanldeGetContact}
                saveLabel='Get Contatcs'
            >
                <CompanyInformation />
            </CustomModal>
            <CustomModal
                title='Company Contacts List'
                isOpen={ContactList}
                onClose={CloseModal}
            >
                <ContactListModal saveContact={saveContact} />
            </CustomModal>
            <CustomModal
                isOpen={successModal}
                onSave={closeSuccessModal}
                saveLabel='Ok'
            >
                <div className="flex justify-center my-4">
                    <img src={Tick} alt="Tick" />
                </div>

                <p className="text-center">Your contact has been saved successfully in your account.</p>
            </CustomModal>
        </>
    )
}

export default ListView