import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { AddNewSalesSchema } from '../../../validations/validationSchema';

import CustomButton from '../../../components/CustomButton'
const AddNewSaleForm = ({ onClose }) => {
    const initialValues = {
        areaName: '',
        notes: '',
    };
    const handleSubmit = (values) => {
        console.log(values)
        onClose();
    };
    return (
        <>
            <Formik
                initialValues={initialValues}
                validationSchema={AddNewSalesSchema}
                onSubmit={handleSubmit}
            >
                {({ resetForm }) => (
                    <Form className="space-y-4 p-4">
                        <div className="relative">
                            <label className="text-gray-700">Sale Area Name</label>
                            <Field
                                name="areaName"
                                className="w-full px-4 py-2 rounded-md  text-gray-700 border "
                                placeholder="Enter Area Name"
                            />
                            <ErrorMessage
                                name="areaName"
                                component="div"
                                className="text-red-500 text-sm"
                            />
                        </div>

                        <div className="relative">
                            <label className="text-gray-700">Notes</label>
                            <Field
                                name="notes"
                                className="w-full px-4 py-2 rounded-md  text-gray-700 border"
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
                                type="button"
                                onClick={() => resetForm()} variant='secondary'
                                size='md'

                            >
                                Cancel
                            </CustomButton>
                            <CustomButton
                                type="submit"
                                size='md'
                            >
                                Save
                            </CustomButton>
                        </div>

                    </Form>
                )}
            </Formik>
        </>
    )
}
AddNewSaleForm.propTypes = {
    onClose: PropTypes.func.isRequired,
};
export default AddNewSaleForm