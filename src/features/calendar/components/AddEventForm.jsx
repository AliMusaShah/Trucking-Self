import { Formik, Form, Field, ErrorMessage } from 'formik';
import { AddNewEventSchema } from '../../../validations/validationSchema';
import CustomButton from '../../../components/CustomButton';
const AddEventForm = () => {
    const initialValues = {
        startDate: "",
        endDate: "",
        notes: "",
        company: '',
        contact: ''
    };
    const handleSubmit = (values) => {
        console.log(values)
    };
    return (
        <>
            <Formik
                initialValues={initialValues}
                validationSchema={AddNewEventSchema}
                onSubmit={handleSubmit}
            >
                {() => (
                    <Form className="space-y-4 p-4">


                        <div className="relative">
                            <label className="text-gray-700">Company</label>
                            <Field
                                className="w-full px-4 py-2 rounded-md text-gray-700 border"
                                as="select" name="company">
                                <option value="" disabled selected >Select Company</option>
                                <option value="red">Red</option>
                                <option value="green">Green</option>
                                <option value="blue">Blue</option>
                            </Field>
                            <ErrorMessage
                                name="company"
                                component="div"
                                className="text-red-500 text-sm"
                            />
                        </div>
                        <div className="relative">
                            <label className="text-gray-700">Contact Name</label>
                            <Field
                                className="w-full px-4 py-2 rounded-md text-gray-700 border"
                                as="select" name="contact">
                                <option value="" disabled selected >Select Company</option>
                                <option value="red">Red</option>
                                <option value="green">Green</option>
                                <option value="blue">Blue</option>
                            </Field>
                            <ErrorMessage
                                name="contact"
                                component="div"
                                className="text-red-500 text-sm"
                            />
                        </div>
                        {/* Start Date */}
                        <div className="relative">
                            <label className="text-gray-700">Start Date</label>
                            <Field
                                name="startDate"
                                type="date"
                                className="w-full px-4 py-2 rounded-md text-gray-700 border"
                            />
                            <ErrorMessage
                                name="startDate"
                                component="div"
                                className="text-red-500 text-sm"
                            />
                        </div>

                        {/* End Date */}
                        <div className="relative">
                            <label className="text-gray-700">End Date</label>
                            <Field
                                name="endDate"
                                type="date"
                                className="w-full px-4 py-2 rounded-md text-gray-700 border"
                            />
                            <ErrorMessage
                                name="endDate"
                                component="div"
                                className="text-red-500 text-sm"
                            />
                        </div>
                        <div className="relative">
                            <label className="text-gray-700">Notes</label>
                            <Field
                                as="textarea"
                                name="notes"
                                type="text"
                                className="w-full px-4 py-2 rounded-md text-gray-700 border "
                                placeholder="Enter Notes"
                            />
                            <ErrorMessage
                                name="notes"
                                component="div"
                                className="text-red-500 text-sm"
                            />
                        </div>


                        <div className="mt-6 flex justify-end space-x-4">

                            <CustomButton
                                type="submit"
                                size='md'
                            >
                                Submit
                            </CustomButton>
                        </div>

                    </Form>
                )}
            </Formik>
        </>
    )
}

export default AddEventForm