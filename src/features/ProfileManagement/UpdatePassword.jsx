import { Formik, Form, Field, ErrorMessage } from 'formik';
import CustomButton from '../../components/CustomButton';
import { useState } from 'react'; // Import useState for managing visibility toggle
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import icons for visibility toggle
import { PasswordUpdateSchema } from '../../validations/validationSchema';

const UpdatePassword = () => {
    const [showOldPassword, setShowOldPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);


    const initialValues = {
        old_password: '',
        new_password: '',
        // confirm_password: '',
    };

    const handleSubmit = async (values) => {
        console.log(values);
    };

    return (
        <div className="max-w-lg ">
            <h3 className="text-xl font-semibold mb-4">Update Password</h3>
            <Formik
                initialValues={initialValues}
                validationSchema={PasswordUpdateSchema}
                onSubmit={handleSubmit}
            >
                {({ resetForm }) => (
                    <Form className="space-y-4">
                        <div className="relative">
                            <label className="text-gray-700">Old Password</label>
                            <Field
                                name="old_password"
                                type={showOldPassword ? 'text' : 'password'}
                                className="w-full px-4 py-2 rounded-md bg-gray-100 text-gray-700 border border-gray-300"
                                placeholder="Enter Old Password"
                            />
                            <ErrorMessage
                                name="old_password"
                                component="div"
                                className="text-red-500 text-sm"
                            />
                            <span
                                onClick={() => setShowOldPassword(!showOldPassword)}
                                className="absolute top-9 right-3 flex items-center cursor-pointer"
                            >
                                {showOldPassword ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </div>

                        <div className="relative">
                            <label className="text-gray-700">New Password</label>
                            <Field
                                name="new_password"
                                type={showNewPassword ? 'text' : 'password'}
                                className="w-full px-4 py-2 rounded-md bg-gray-100 text-gray-700 border border-gray-300"
                                placeholder="Enter New Password"
                            />
                            <ErrorMessage
                                name="new_password"
                                component="div"
                                className="text-red-500 text-sm"
                            />
                            <span
                                onClick={() => setShowNewPassword(!showNewPassword)}
                                className="absolute top-9 right-3 flex items-center cursor-pointer"
                            >
                                {showNewPassword ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </div>

                        <div className="relative">
                            <label className="text-gray-700">Confirm Password</label>
                            <Field
                                name="confirm_password"
                                type={showConfirmPassword ? 'text' : 'password'}
                                className="w-full px-4 py-2 rounded-md bg-gray-100 text-gray-700 border border-gray-300"
                                placeholder="Enter Confirm Password"
                            />
                            <ErrorMessage
                                name="confirm_password"
                                component="div"
                                className="text-red-500 text-sm"
                            />
                            <span
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                className="absolute top-9 right-3 flex items-center cursor-pointer"
                            >
                                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </div>

                        <div className="flex justify-end space-x-4 mt-6">
                            <CustomButton
                                type="button"
                                className="px-6 py-2 bg-gray-200 text-gray-600 rounded-md hover:bg-gray-300"
                                onClick={() => resetForm()}
                            >
                                Cancel
                            </CustomButton>
                            <CustomButton
                                type="submit"
                                className="px-6 py-2 bg-defaultGreen  text-white rounded-md hover:bg-teal-600"
                            >
                                Save
                            </CustomButton>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default UpdatePassword;
