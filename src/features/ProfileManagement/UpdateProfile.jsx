import { Formik, Form, Field, ErrorMessage } from 'formik';
import ProfileAvatar from "../../assets/profile-avatar.png";
import CustomButton from '../../components/CustomButton';
import { useState } from 'react';
import { ProfileSchema } from '../../validations/validationSchema';

const UpdateProfile = () => {
    const [imagePreviewUrl, setImagePreviewUrl] = useState(ProfileAvatar);
    const initialValues = {
        full_name: '',
        title: '',
        email: '',
        phone_number: '',
        gender: '',
        date_of_birth: '',
        country: '',
        city: '',
        company: '',
        profile_picture: null, // Initially null for the profile image
    };
    // console.log(token, 'token')
    const handleFileChange = (e, setFieldValue) => {
        const file = e.target.files[0];
        if (file) {
            setFieldValue('profile_picture', file); // Update Formik's state
            setImagePreviewUrl(URL.createObjectURL(file)); // Set the image preview
            console.log(imagePreviewUrl)
        }
    };

    const handleSubmit = (values) => {

        console.log(values)

    };

    const handleClear = (resetForm) => {
        resetForm();
        setImagePreviewUrl(ProfileAvatar); // Reset the image preview as well
    };

    return (
        <div className="">
            <h2 className="text-2xl font-semibold mb-6">Profile</h2>
            <div className="flex flex-col sm:flex-row items-center mb-6">
                <img
                    src={imagePreviewUrl}
                    alt="Profile"
                    className="h-24 w-24 rounded-lg"
                />
                <div className="mt-4 sm:mt-0 sm:ml-6 text-center sm:text-left">
                    <h3 className="text-xl font-semibold">{`Ali Musa`}</h3>
                    <p className="text-gray-500">{`sample@gmail.com`}</p>
                    <p className="text-gray-500">18:27 PM (GMT+00:00)</p>
                </div>
            </div>

            <Formik
                initialValues={initialValues}
                validationSchema={ProfileSchema}
                onSubmit={handleSubmit}
            >
                {({ resetForm, setFieldValue }) => (
                    <>
                        <div className="inline-flex flex-col justify-center sm:justify-start">
                            <label className="p-2 text-white text-center bg-defaultBlue rounded-md hover:bg-blue-600 focus:outline-none cursor-pointer">
                                <span>Update image</span>
                                <input
                                    type="file"
                                    className="sr-only"
                                    accept="image/*"
                                    onChange={(e) => handleFileChange(e, setFieldValue)} // Handle file input change with Formik
                                />
                            </label>
                        </div>
                        <Form className="grid grid-cols-1 md:grid-cols-2 gap-6">


                            <div className="space-y-2">
                                <label className="text-gray-700">Full Name</label>
                                <Field
                                    name="full_name"
                                    type="text"
                                    className="w-full px-4 py-2 rounded-md bg-gray-100 text-gray-700"
                                    placeholder="Enter First Name"
                                />
                                <ErrorMessage
                                    name="full_name"
                                    component="div"
                                    className="text-red-500 text-sm"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-gray-700">Email</label>
                                <Field
                                    name="email"
                                    type="email"
                                    className="w-full px-4 py-2 rounded-md bg-gray-100 text-gray-700"
                                    placeholder="Enter Email"
                                />
                                <ErrorMessage
                                    name="email"
                                    component="div"
                                    className="text-red-500 text-sm"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-gray-700">Title</label>
                                <Field
                                    name="title"
                                    type="text"
                                    className="w-full px-4 py-2 rounded-md bg-gray-100 text-gray-700"
                                    placeholder="Enter Last Name"
                                />
                                <ErrorMessage
                                    name="title"
                                    component="div"
                                    className="text-red-500 text-sm"
                                />
                            </div>



                            <div className="space-y-2">
                                <label className="text-gray-700">Phone</label>
                                <Field
                                    name="phone_number"
                                    type="tel"
                                    className="w-full px-4 py-2 rounded-md bg-gray-100 text-gray-700"
                                    placeholder="Enter Phone Number"
                                />
                                <ErrorMessage
                                    name="phone_number"
                                    component="div"
                                    className="text-red-500 text-sm"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-gray-700">Gender</label>
                                <Field
                                    as="select"
                                    name="gender"
                                    className="w-full px-4 py-2 rounded-md bg-gray-100 text-gray-700"
                                >
                                    <option value="" label="Select Gender" />
                                    <option value="Male" label="Male" />
                                    <option value="Female" label="Female" />
                                    <option value="Other" label="Other" />
                                </Field>
                                <ErrorMessage
                                    name="gender"
                                    component="div"
                                    className="text-red-500 text-sm"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-gray-700">Date of Birth</label>
                                <Field
                                    name="date_of_birth"
                                    type="date"
                                    className="w-full px-4 py-2 rounded-md bg-gray-100 text-gray-700"
                                />
                                <ErrorMessage
                                    name="date_of_birth"
                                    component="div"
                                    className="text-red-500 text-sm"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-gray-700">Company</label>
                                <Field
                                    name="company"
                                    type="text"
                                    className="w-full px-4 py-2 rounded-md bg-gray-100 text-gray-700"
                                    placeholder="Enter company"
                                />
                                <ErrorMessage
                                    name="company"
                                    component="div"
                                    className="text-red-500 text-sm"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-gray-700">Country</label>
                                <Field
                                    name="country"
                                    type="text"
                                    className="w-full px-4 py-2 rounded-md bg-gray-100 text-gray-700"
                                    placeholder="Enter Country"
                                />
                                <ErrorMessage
                                    name="country"
                                    component="div"
                                    className="text-red-500 text-sm"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-gray-700">City</label>
                                <Field
                                    name="city"
                                    type="text"
                                    className="w-full px-4 py-2 rounded-md bg-gray-100 text-gray-700"
                                    placeholder="Enter City"
                                />
                                <ErrorMessage
                                    name="city"
                                    component="div"
                                    className="text-red-500 text-sm"
                                />
                            </div>
                            <div> </div>
                            <div className="flex justify-end my-5">
                                <CustomButton
                                    type="button"
                                    className="mr-4 px-6 py-2 text-gray-600 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none"
                                    onClick={() => handleClear(resetForm)}
                                >
                                    Clear
                                </CustomButton>
                                <CustomButton
                                    type="submit"
                                    className="px-6 py-2 text-white bg-defaultGreen rounded-md"
                                >
                                    Save
                                </CustomButton>
                            </div>
                        </Form>
                    </>
                )}
            </Formik>
        </div>
    );
};

export default UpdateProfile;
