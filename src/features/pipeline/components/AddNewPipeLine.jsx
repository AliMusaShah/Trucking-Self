
import PropTypes from 'prop-types';
import CustomButton from '../../../components/CustomButton'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { AddNewPipeLineSchema, } from '../../../validations/validationSchema';

const AddNewPipeLine = ({ handleVisible }) => {
    const initialValues = {
        stageName: '',
    };
    const handleSubmit = (values) => {
        console.log(values)
        handleVisible()
    };
    return (

        <div className=''>
            <Formik
                initialValues={initialValues}
                validationSchema={AddNewPipeLineSchema}
                onSubmit={handleSubmit}
            >
                {() => (
                    <Form className="space-y-4 p-4">

                        <div className="relative">
                            <label className="text-gray-700 my-5">Stage Name</label>
                            <Field
                                name="stageName"
                                className="w-full px-4 py-2 rounded-md text-gray-700 border"
                                placeholder="Enter Name"
                            />
                            <ErrorMessage
                                name="stageName"
                                component="div"
                                className="text-red-500 text-sm"
                            />
                        </div>

                        {/* </div> */}

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
            </Formik>
        </div>

    )
}
AddNewPipeLine.propTypes = {
    handleVisible: PropTypes.func.isRequired,
};
export default AddNewPipeLine