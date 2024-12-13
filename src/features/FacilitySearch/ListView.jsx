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
import { useGetAllFacilityQuery } from "../../api/apiSlice"
import Pagination from "../../components/Pagination"
const ListView = () => {
    const [addNewSalesModal, setAddNewSalesModal] = useState(false);
    const [companyDetailModal, setCompanyDetailModal] = useState(false);
    const [ContactList, setContactList] = useState(false);
    const [successModal, setSuccessModal] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const { data, } = useGetAllFacilityQuery(10, currentPage);

    console.log(data)

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        console.log(currentPage)
    };
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
        { header: 'Company Name', accessor: 'name' },
        { header: 'Company Industry', accessor: 'streetAddress' },
        { header: 'Short Description', accessor: 'Truck Activity' },
        { header: 'Company URL', accessor: 'WebsiteURL' },
        { header: 'Distance', accessor: 'Distance' },
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
                <ReusableTable columns={columns} data={data?.data?.data} />
                <Pagination totalCount={data?.data?.totalRecord} totalPages={data?.data?.totalPages} currentPage={data?.data?.currentPage} onPageChange={handlePageChange} />
            </div>


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
                saveList={hanldeGetContact}
                ListLabel='Save List'
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