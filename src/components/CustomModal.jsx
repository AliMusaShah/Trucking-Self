import PropTypes from 'prop-types';
import CustomButton from '../components/CustomButton';
import Cross from '../assets/cross.png'

const CustomModal = ({ isOpen, onSave, title, cancelLabel, children, onClose, saveLabel }) => {

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen px-4 text-center sm:p-0">
                {/* Background Overlay */}
                <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                    <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>

                <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:align-middle sm:min-w-[33%] sm:max-w-full ">
                    {onClose &&
                        <div className="border-b pb-3 flex justify-between items-center px-6 py-4">
                            <div className='flex'>
                                <div className='w-4 h-8 bg-defaultBlue  rounded-md mr-2'></div>
                                <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
                            </div>

                            <div onClick={onClose} className='cursor-pointer'>
                                <img src={Cross} alt="Cross" />
                            </div>
                        </div>}

                    {/* Modal Body */}
                    {children}
                    <div className={`flex ${saveLabel === 'Ok' ? 'justify-center' : 'justify-end'} gap-3 p-4`}>
                        {cancelLabel &&
                            <CustomButton size='md' variant='secondary' onClick={onClose}>
                                {cancelLabel}
                            </CustomButton>}
                        {onSave &&
                            <CustomButton type='submit' onClick={onSave} size='md' >
                                {saveLabel}
                            </CustomButton>}
                    </div>
                </div>
            </div>
        </div>
    );
};

CustomModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onSave: PropTypes.func,
    onClose: PropTypes.func.isRequired,
    saveLabel: PropTypes.string,
    cancelLabel: PropTypes.string,
    title: PropTypes.string,
    children: PropTypes.node.isRequired,
};

export default CustomModal;
