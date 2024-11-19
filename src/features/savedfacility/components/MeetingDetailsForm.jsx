import CustomButton from "../../../components/CustomButton";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { MeetingDetailsSchema } from "../../../validations/validationSchema";
import Upload from "../../../assets/upload-img.png";

const MeetingDetailsForm = () => {
    const initialValues = {
        startDate: "",
        endDate: "",
        linkedin: "",
        file: null,
    };

    const handleSubmit = (values) => {
        console.log(values);
    };

    return (
        <div className="p-4">
            <Formik
                initialValues={initialValues}
                validationSchema={MeetingDetailsSchema}
                onSubmit={handleSubmit}
            >
                {(
                    { setFieldValue }
                ) => (
                    <Form className="space-y-4 p-4  rounded-md shadow-md">
                        <h1 className="text-xl font-bold text-gray-800">Meeting Details</h1>
                        <div className="grid grid-cols-2 gap-4">
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
                        </div>

                        {/* LinkedIn */}
                        <div className="relative">
                            <label className="text-gray-700">LinkedIn Profile</label>
                            <Field
                                name="linkedin"
                                type="text"
                                className="w-full px-4 py-2 rounded-md  border"
                                placeholder="Enter LinkedIn URL"
                            />
                            <ErrorMessage
                                name="linkedin"
                                component="div"
                                className="text-red-500 text-sm"
                            />
                        </div>

                        {/* File Upload */}
                        <div className=" flex flex-col items-center space-y-1 text-center p-4 border-2 border-dashed border-defaultBlue rounded-md">
                            <label
                                htmlFor="Choose file"
                                className="relative flex flex-col items-center cursor-pointer bg-white rounded-md font-medium text-lightBlue hover:text-blue-800 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
                            >
                                <img src={Upload} alt="Upload" width={40} height={40} />
                                <div className=" flex text-sm text-gray-600">
                                    <span>Choose file</span>
                                    <input
                                        name="file"
                                        type="file"
                                        className=""
                                        onChange={(e) => setFieldValue("file", e.currentTarget.files[0])}
                                    />
                                    <span className="pl-1 text-defaultBlue">or drag and drop</span>
                                </div>
                            </label>
                            <p className="text-xs text-gray-500">
                                Format Supports: jpeg, jpg, png, docx, xlsx, pdf
                            </p>
                            <ErrorMessage
                                name="file"
                                component="div"
                                className="text-red-500 text-sm"
                            />
                        </div>

                        {/* Buttons */}
                        <div className="mt-6 flex justify-end space-x-4">
                            <CustomButton
                                type="button"
                                variant="secondary"
                                size="md"
                                onClick={() => console.log("Cancel Clicked")}
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
    );
};

export default MeetingDetailsForm;
