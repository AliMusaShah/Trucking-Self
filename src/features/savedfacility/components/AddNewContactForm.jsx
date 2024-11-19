
import CustomButton from '../../../components/CustomButton'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { AddNewContactSchema, } from '../../../validations/validationSchema';
import { useState } from 'react';

const AddNewContactForm = () => {
    const [isVisible, setIsVisible] = useState(false)
    const initialValues = {
        name: '',
        title: '',
        email_1: '',
        phone_1: '',
        email_2: '',
        phone_2: '',
        linkedin: ''
    };
    const handleVisible = () => setIsVisible(!isVisible)
    const handleSubmit = (values) => {
        console.log(values)
        handleVisible()
    };
    return (

        <div className='p-4'>

            {isVisible ? (<Formik
                initialValues={initialValues}
                validationSchema={AddNewContactSchema}
                onSubmit={handleSubmit}
            >
                {() => (
                    <Form className="space-y-4 p-4 bg-gray-100">
                        <h1>Company Contact # 1</h1>
                        <div className="grid grid-cols-2 gap-4">

                            {/* Sale Area Name */}
                            <div className="relative">
                                <label className="text-gray-700"> Name</label>
                                <Field
                                    name="name"
                                    className="w-full px-4 py-2 rounded-md text-gray-700 border"
                                    placeholder="Enter Name"
                                />
                                <ErrorMessage
                                    name="name"
                                    component="div"
                                    className="text-red-500 text-sm"
                                />
                            </div>

                            {/* Notes */}
                            <div className="relative">
                                <label className="text-gray-700">Title</label>
                                <Field
                                    name="title"
                                    className="w-full px-4 py-2 rounded-md text-gray-700 border"
                                    placeholder="Enter Title"
                                />
                                <ErrorMessage
                                    name="title"
                                    component="div"
                                    className="text-red-500 text-sm"
                                />
                            </div>
                            <div className="relative">
                                <label className="text-gray-700">Email #1</label>
                                <Field
                                    name="email_1"
                                    className="w-full px-4 py-2 rounded-md text-gray-700 border"
                                    placeholder="Enter Email #1"
                                />
                                <ErrorMessage
                                    name="email_1"
                                    component="div"
                                    className="text-red-500 text-sm"
                                />
                            </div>
                            <div className="relative">
                                <label className="text-gray-700">Phone #1</label>
                                <Field
                                    name="phone_1"
                                    className="w-full px-4 py-2 rounded-md text-gray-700 border"
                                    placeholder="Enter Phone #1"
                                />
                                <ErrorMessage
                                    name="phone_1"
                                    component="div"
                                    className="text-red-500 text-sm"
                                />
                            </div>
                            <div className="relative">
                                <label className="text-gray-700">Email #2</label>
                                <Field
                                    name="email_2"
                                    className="w-full px-4 py-2 rounded-md text-gray-700 border"
                                    placeholder="Enter Email #2"
                                />
                                <ErrorMessage
                                    name="email_2"
                                    component="div"
                                    className="text-red-500 text-sm"
                                />
                            </div>
                            <div className="relative">
                                <label className="text-gray-700">Phone #2</label>
                                <Field
                                    name="phone_2"
                                    className="w-full px-4 py-2 rounded-md text-gray-700 border"
                                    placeholder="Enter Phone #2"
                                />
                                <ErrorMessage
                                    name="phone_2"
                                    component="div"
                                    className="text-red-500 text-sm"
                                />
                            </div>

                        </div>
                        <div className="relative">
                            <label className="text-gray-700">linkedin</label>
                            <Field
                                name="linkedin"
                                className="w-full px-4 py-2 rounded-md text-gray-700 border"
                                placeholder="Enter Notes"
                            />
                            <ErrorMessage
                                name="linkedin"
                                component="div"
                                className="text-red-500 text-sm"
                            />
                        </div>

                        {/* Buttons */}
                        <div className="mt-6 flex justify-end space-x-4">
                            <CustomButton
                                type="button"
                                onClick={handleVisible}
                                variant="secondary"
                                size="md"
                            >
                                Cancel
                            </CustomButton>
                            <CustomButton type="submit" size="md">
                                Save
                            </CustomButton>
                        </div>
                    </Form>

                )}
            </Formik>) : (<CustomButton size='md' onClick={handleVisible} >Add New Contact</CustomButton>)}
        </div>

    )
}

export default AddNewContactForm