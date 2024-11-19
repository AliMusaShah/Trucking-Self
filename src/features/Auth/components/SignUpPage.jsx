import { Formik, Field, Form, ErrorMessage } from 'formik';
// import LoginBackground from '../../../assets/login-background.png';
import logo from '../../../assets/logo1.png';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from 'react';
import { signUpSchema } from '../../../validations/validationSchema';
import CustomButton from '../../../components/CustomButton'
const SignUpPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const initialValues = {
        full_name: '',
        email: '',
        password: '',
    }

    const handleSubmit = async (values) => {
        console.log(values)
    };
    return (
        <div className="pl-2 pt-2 pb-2 h-screen">
            <div className="grid grid-cols-12 gap-2 h-full">
                <div className="col-span-6 h-full overflow-hidden">
                    <img
                        src={logo}
                        alt="Login Background"
                        className="w-full h-full"
                    />
                </div>
                <div className="col-span-6 flex justify-center items-center">
                    <div className="form w-[445px]">
                        <div className="flex items-center gap-2 pb-10">
                            <img src={logo} alt="logo" />
                        </div>
                        <div className="pb-8">
                            <h1 className="text-3xl font-[600]">Welcome👋</h1>
                            <p className="text-base font-normal text-[#A2A1A8] pt-2">
                                Sign Up here
                            </p>
                        </div>
                        <Formik
                            initialValues={initialValues}
                            validationSchema={signUpSchema}
                            onSubmit={handleSubmit}
                        >
                            <Form>
                                <div className="mb-4">
                                    <p className="text-lightBlue text-base mb-2">
                                        First Name
                                    </p>
                                    <Field
                                        name="full_name"
                                        type="text"
                                        autoComplete="given-name"
                                        className="border rounded-lg border-[#A2A1A833] w-full py-2 px-3 text-gray-700 focus:outline-lightBlue"
                                        placeholder="john michel"
                                    />
                                    <ErrorMessage
                                        name="full_name"
                                        component="div"
                                        className="text-red-500 text-sm"
                                    />
                                </div>
                                <div className="mb-4">
                                    <p className="text-lightBlue text-base mb-2">
                                        Email Address
                                    </p>
                                    <Field
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        className="border rounded-lg border-[#A2A1A833] w-full py-2 px-3 text-gray-700 focus:outline-lightBlue"
                                        placeholder="john@example.com"
                                    />
                                    <ErrorMessage
                                        name="email"
                                        component="div"
                                        className="text-red-500 text-sm"
                                    />
                                </div>
                                <div className="mb-4 relative">
                                    <p className="text-lightBlue text-base mb-2">
                                        Password
                                    </p>
                                    <Field
                                        name="password"
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
                                        name="password"
                                        component="div"
                                        className="text-red-500 text-sm"
                                    />
                                </div>
                                <div className="mb-4 relative">
                                    <p className="text-lightBlue text-base mb-2">
                                        Confirm Password
                                    </p>
                                    <Field
                                        name="confirmPassword"
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
                                        name="confirmPassword"
                                        component="div"
                                        className="text-red-500 text-sm"
                                    />
                                </div>
                                <CustomButton
                                    type="submit"
                                    size='lg'

                                >
                                    Sign Up
                                </CustomButton>
                            </Form>
                        </Formik>

                        <CustomButton to={'/'} variant='normal' >
                            <span className='text-black mx-2'>Already have an account?</span>Login
                        </CustomButton>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUpPage;
