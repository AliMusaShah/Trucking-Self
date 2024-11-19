import { useState } from "react";
import PaymentConfirmModal from "./PaymentConfirmModal"
import CustomButton from '../../../../components/CustomButton'
import { FaCheck } from "react-icons/fa6";
import PaymentDetailsModal from "./PaymentDetailsModal";

const CustomPaymentPlan = () => {
    const [ConfirmPaymentModal, setConfirmPaymentModal] = useState(false);
    const [PaymentDetailModal, setPaymentDetailModal] = useState(false);

    // const CloseConfirmPaymentModal = () => setConfirmPaymentModal(false);
    const handleMakePayment = () => {
        setPaymentDetailModal(true)
        // setConfirmPaymentModal(true)
    };
    const handleClosePayment = () => {
        setPaymentDetailModal(false)
        setConfirmPaymentModal(true);
    }

    const handleConfirmPayment = () => {
        setConfirmPaymentModal(false);
        setPaymentDetailModal(false);    // Close Confirmation Modal
        console.log('Payment confirmed'); // Proceed with payment logic here
    };
    const handleCloseModal = () => {
        setConfirmPaymentModal(false);
        setPaymentDetailModal(false);
    }
    return (



        <>
            <div
                className="relative flex flex-col items-center max-w-md p-4 my-0 shadow  lg:-mr-3 sm:my-0 sm:p-6 md:my-8 md:p-8">
                <h3
                    className="m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-gray-200 sm:text-3xl md:text-4xl">
                    Starter
                </h3>
                <div className="flex items-end mt-6 leading-7 text-gray-900 border-0 border-gray-200">
                    <p className="box-border m-0 text-6xl font-semibold leading-none border-solid">
                        $1
                    </p>
                    <p className="box-border m-0 border-solid" >
                        / month
                    </p>
                </div>
                <ul className="flex-1 p-0 mt-4 ml-5 leading-7 text-gray-900 border-0 border-gray-200">
                    <li className="inline-flex items-center  w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <FaCheck className="text-defaultBlue mx-2" />
                        1 Website
                    </li>

                    <li className="inline-flex items-center  w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <FaCheck className="text-defaultBlue mx-2" />
                        SSL (HTTPS)
                    </li>

                    <li className="inline-flex items-center  w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <FaCheck className="text-defaultBlue mx-2" />
                        SiteFast Domain
                    </li>

                </ul>
                <CustomButton
                    size="lg"
                    onClick={handleMakePayment}
                >
                    Start Now
                </CustomButton>
            </div >

            <PaymentDetailsModal
                isOpen={PaymentDetailModal}
                onClose={handleCloseModal}
                onConfirm={handleClosePayment}
            />
            <PaymentConfirmModal
                isOpen={ConfirmPaymentModal}
                onConfirm={handleConfirmPayment}
            />

        </>


    )
}

export default CustomPaymentPlan