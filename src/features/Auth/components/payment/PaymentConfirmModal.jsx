import PropTypes from 'prop-types';
import CustomButton from '../../../../components/CustomButton'

const PaymentConfirmModal = ({ isOpen, onConfirm }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed  bg-gray-900 bg-opacity-25 backdrop-blur-sm inset-0 z-50 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen px-4 text-center sm:p-0">
                <div className="inline-block align-bottom bg-white rounded-lg text-center overflow-hidden shadow-xl transform transition-all sm:align-middle sm:max-w-md sm:w-full">
                    <div className="p-6">
                        <h3 className="text-lg font-medium text-gray-900 mb-1">
                            Payment Successful
                        </h3>
                        <p>Your payment has been successfully submitted</p>

                        {/* Action Buttons */}
                        <div className="flex justify-center space-x-4">
                            <CustomButton
                                size='lg'
                                onClick={onConfirm}
                            >
                                Continue
                            </CustomButton>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

PaymentConfirmModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onConfirm: PropTypes.func.isRequired,
};

export default PaymentConfirmModal;
