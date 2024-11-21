
import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { AddNewUserSchema } from '../../../validations/validationSchema';
import CustomButton from '../../../components/CustomButton';

const AddNewUserFrom = ({ onSubmit }) => {
    const initialValues = {
        fullName: "",
        role: "",
        email: "",
        password: '',
        phone_number: ''
    };
    const handleSubmit = (values) => {
        console.log(values)
        onSubmit()
    };
    return (
        <>
            <Formik
                initialValues={initialValues}
                validationSchema={AddNewUserSchema}
                onSubmit={handleSubmit}
            >
                {() => (
                    <Form className="space-y-4 p-4">

                        <div className="relative">
                            <label className="text-gray-700">Full Name</label>
                            <Field
                                name="fullName"
                                type="text"
                                className="w-full px-4 py-2 rounded-md text-gray-700 border"
                            />
                            <ErrorMessage
                                name="fullName"
                                component="div"
                                className="text-red-500 text-sm"
                            />
                        </div>
                        <div className="relative">
                            <label className="text-gray-700">Role</label>
                            <Field
                                className="w-full px-4 py-2 rounded-md text-gray-700 border"
                                as="select" name="role">
                                <option value="" disabled selected >Select Company</option>
                                <option value="red">User</option>
                                <option value="green">Admin</option>
                                <option value="blue">other</option>
                            </Field>
                            <ErrorMessage
                                name="role"
                                component="div"
                                className="text-red-500 text-sm"
                            />
                        </div>

                        <div className="relative">
                            <label className="text-gray-700">Email</label>
                            <Field
                                name="email"
                                type="email"
                                className="w-full px-4 py-2 rounded-md text-gray-700 border"
                            />
                            <ErrorMessage
                                name="email"
                                component="div"
                                className="text-red-500 text-sm"
                            />
                        </div>

                        {/* End Date */}
                        <div className="relative">
                            <label className="text-gray-700">password</label>
                            <Field
                                name="password"
                                type="password"
                                className="w-full px-4 py-2 rounded-md text-gray-700 border"
                            />
                            <ErrorMessage
                                name="password"
                                component="div"
                                className="text-red-500 text-sm"
                            />
                        </div>
                        <div className="relative">
                            <label className="text-gray-700">phone Number</label>
                            <Field

                                name="phone_number"
                                type="number"
                                className="w-full px-4 py-2 rounded-md text-gray-700 border "
                                placeholder="Enter Notes"
                            />
                            <ErrorMessage
                                name="phone_number"
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
AddNewUserFrom.propTypes = {
    onSubmit: PropTypes.func
};
export default AddNewUserFrom