import { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
// import LoginBackground from '../../../assets/login-background.png';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import CustomButton from '../../../components/CustomButton';
import { resetPasswordSchema } from '../../../validations/validationSchema';

const ResetPassword = () => {
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const initialValues = {
        email: '',
        new_password: '',
        confirm_password: ''
    }

    const handleSubmit = async (values) => {
        console.log('Form values:', values);

    };

    return (
        <div className="pl-2 pt-2 pb-2 h-screen">
            <div className="grid grid-cols-12 gap-2 h-full">
                <div className="col-span-6 h-full overflow-hidden">
                    {/* <img
                        src={LoginBackground}
                        alt="Login Background"
                        className="w-full h-full"
                    /> */}
                </div>
                <div className="col-span-6 flex justify-center items-center">
                    <div className="form w-[445px]">
                        <CustomButton to='-1' variant='normal'>
                            Back
                        </CustomButton>
                        <h1 className="text-3xl font-[600] my-6">
                            Reset Password
                        </h1>

                        <Formik
                            initialValues={initialValues}
                            validationSchema={resetPasswordSchema}
                            onSubmit={handleSubmit}
                        >
                            <Form>


                                <div className="mb-4 relative">
                                    <p className="text-lightBlue text-base mb-2">
                                        New Password
                                    </p>
                                    <Field
                                        name="new_password"
                                        type={showPassword ? "text" : "password"}
                                        autoComplete="new-password"
                                        className="border rounded-lg border-[#A2A1A833] w-full py-2 px-3 text-gray-700 pr-10 focus:outline-lightBlue"
                                        placeholder="********"
                                    />
                                    <span
                                        onClick={togglePasswordVisibility}
                                        aria-label={showPassword ? "Hide password" : "Show password"}
                                        className="absolute top-[2.75rem] right-3 flex items-center cursor-pointer"

                                    >
                                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                                    </span>
                                    <ErrorMessage
                                        name="new_password"
                                        component="div"
                                        className="text-red-500 text-sm"
                                    />
                                </div>
                                <div className="mb-4 relative">
                                    <p className="text-lightBlue text-base mb-2">
                                        Confirm Password
                                    </p>
                                    <Field
                                        name="confirm_password"
                                        type={showPassword ? "text" : "password"}
                                        autoComplete="new-password"
                                        className="border rounded-lg border-[#A2A1A833] w-full py-2 px-3 text-gray-700 pr-10 focus:outline-lightBlue"
                                        placeholder="********"
                                    />
                                    <span
                                        onClick={togglePasswordVisibility}
                                        aria-label={showPassword ? "Hide password" : "Show password"}
                                        className="absolute top-[2.75rem] right-3 flex items-center cursor-pointer"

                                    >
                                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                                    </span>
                                    <ErrorMessage
                                        name="confirm_password"
                                        component="div"
                                        className="text-red-500 text-sm"
                                    />
                                </div>
                                <div>
                                    <CustomButton

                                        type="submit"
                                        className="flex justify-center items-center btn mt-10 w-full h-[56px] rounded-[10px] bg-defaultGreen  text-[white]"
                                    >
                                        Reset
                                    </CustomButton>
                                </div>
                            </Form>
                        </Formik>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default ResetPassword;
