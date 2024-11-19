import PropTypes from 'prop-types';
import { useState } from 'react';
import CustomButton from '../../../../components/CustomButton';

const PaymentDetailsModal = ({ isOpen, onConfirm, onClose }) => {
    const [formData, setFormData] = useState({
        email: '',
        cardNumber: '',
        expiryDate: '',
        cvv: '',
        rememberMe: false,
    });

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 bg-gray-900 bg-opacity-50 backdrop-blur-sm flex items-center justify-center">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-md p-6 relative">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
                >
                    &times;
                </button>

                <h3 className="text-lg font-semibold text-gray-900 mb-4">Payment details</h3>

                {/* Form Fields */}
                <form>
                    <div className="mb-4">
                        <label className="text-sm font-medium text-gray-700">Email Address</label>
                        <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                            placeholder="johndoe@example.com"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="text-sm font-medium text-gray-700">Credit Card Number</label>
                        <input
                            type="text"
                            value={formData.cardNumber}
                            onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                            placeholder="XXXX XXXX XXXX XXXX"
                        />
                    </div>

                    <div className="flex gap-4 mb-4">
                        <div className="flex-1">
                            <label className="text-sm font-medium text-gray-700">Expiry Date</label>
                            <input
                                type="text"
                                value={formData.expiryDate}
                                onChange={(e) => setFormData({ ...formData, expiryDate: e.target.value })}
                                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                                placeholder="MM / YY"
                            />
                        </div>
                        <div className="flex-1">
                            <label className="text-sm font-medium text-gray-700">CVV</label>
                            <input
                                type="text"
                                value={formData.cvv}
                                onChange={(e) => setFormData({ ...formData, cvv: e.target.value })}
                                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                                placeholder="XXX"
                            />
                        </div>
                    </div>

                    <div className="flex items-center mb-4">
                        <input
                            type="checkbox"
                            checked={formData.rememberMe}
                            onChange={(e) => setFormData({ ...formData, rememberMe: e.target.checked })}
                            className="mr-2"
                        />
                        <label className="text-sm text-gray-700">Remember me</label>
                    </div>

                    <div className="border-t pt-4 mb-4 text-gray-700">
                        <div className="flex justify-between mb-1">
                            <span>Subtotal</span>
                            <span>$59</span>
                        </div>
                        <div className="flex justify-between font-semibold">
                            <span>Total Amount</span>
                            <span>$59</span>
                        </div>
                    </div>

                    <CustomButton
                        type="submit"
                        size="lg"
                        className="w-full bg-blue-500 text-white py-2 rounded-md mt-4"
                        onClick={onConfirm}
                    >
                        Submit
                    </CustomButton>
                </form>
            </div>
        </div>
    );
};

PaymentDetailsModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onConfirm: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default PaymentDetailsModal;
