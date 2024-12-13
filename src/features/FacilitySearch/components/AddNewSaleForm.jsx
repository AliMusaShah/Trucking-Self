import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { AddNewSalesSchema } from '../../../validations/validationSchema';

import CustomButton from '../../../components/CustomButton'
import { useState } from 'react';
const AddNewSaleForm = ({ onClose }) => {
    const [isCustomArea, setIsCustomArea] = useState(false);

    // const handleSelectChange = (e) => {
    //     if (e.target.value === 'custom') {
    //         setIsCustomArea(true);
    //     } else {
    //         setIsCustomArea(false);
    //     }
    // };
    const initialValues = {
        areaName: '',
        notes: '',
    };
    const handleSubmit = (values) => {
        console.log(values)
        onClose();

    };
    const options = ['sales 1', 'sales 2', 'sales3']
    return (
        <>
            <Formik
                initialValues={initialValues}
                validationSchema={AddNewSalesSchema}
                onSubmit={handleSubmit}
            >
                {({ resetForm, setFieldValue }) => (
                    <Form className="space-y-4 p-4">

                        <div className="relative space-y-4">
                            <label className="text-gray-700">Sale Area Name</label>
                            {isCustomArea ? (
                                <div className="space-y-2">
                                    <Field

                                        type="text"
                                        name="areaName"
                                        className="w-full px-4 py-2 rounded-md text-gray-700 border"
                                        placeholder="Enter custom area name"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setIsCustomArea(false)}
                                        className="text-sm text-blue-600 hover:text-blue-800"
                                    >
                                        Back to predefined areas
                                    </button>
                                </div>
                            ) : (
                                <Field
                                    as="select"
                                    name="areaName"
                                    className="w-full px-4 py-2 rounded-md text-gray-700 border"
                                    onChange={(e) => {
                                        if (e.target.value === "custom") {
                                            setIsCustomArea(true);
                                        }
                                        setFieldValue('areaName', e.target.value);
                                        console.log(e.target.value);
                                    }}
                                >
                                    <option value="" disabled>Select Sales Area</option>
                                    {options.map((option, index) => (
                                        <option key={index} value={option}>{option}</option>
                                    ))}
                                    <option value="custom" >Enter custom area name</option>
                                </Field>
                            )}
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