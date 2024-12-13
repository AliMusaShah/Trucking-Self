import MapImage from '../../../assets/map-image.png'
const CompanyInformation = () => {
    return (
        <div className=" p-6 bg-white rounded-md shadow-md">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Company Information</h2>
            <div className="my-5">
                <img src={MapImage} alt="" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Row 1 */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Company name</label>
                    <input
                        type="text"
                        defaultValue="OBERFIELDS"
                        className="mt-1 p-2 bg-gray-100 rounded-md w-full"
                        readOnly
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Company Industry</label>
                    <input
                        type="text"
                        defaultValue="www.oberfields.com"
                        className="mt-1 p-2 bg-gray-100 rounded-md w-full"
                        readOnly
                    />
                </div>

                {/* Row 2 */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Short Description</label>
                    <input
                        type="text"
                        defaultValue="(614) 252-0955"
                        className="mt-1 p-2 bg-gray-100 rounded-md w-full"
                        readOnly
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Company Url</label>
                    <input
                        type="text"
                        defaultValue="info@silicon-nexus.com"
                        className="mt-1 p-2 bg-gray-100 rounded-md w-full"
                        readOnly
                    />
                </div>

                {/* Row 3 */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Facility Phone</label>
                    <input
                        type="text"
                        defaultValue="Medium"
                        className="mt-1 p-2 bg-gray-100 rounded-md w-full"
                        readOnly
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Annual Revenue Printed</label>
                    <input
                        type="text"
                        defaultValue="Dry Van, Refrigerated"
                        className="mt-1 p-2 bg-gray-100 rounded-md w-full"
                        readOnly
                    />
                </div>

                {/* Row 4 */}
                <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-gray-700">Company Linkedin </label>
                    <input
                        type="text"
                        defaultValue="https://www.linkedin.com/in/darrick-collins-b432a347/"
                        className="mt-1 p-2 bg-gray-100 rounded-md w-full"
                        readOnly
                    />
                </div>

                {/* Row 5 */}
                <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-gray-700">Facility Address</label>
                    <input
                        type="text"
                        defaultValue="Pavers, Retaining Walls, Coping Stones"
                        className="mt-1 p-2 bg-gray-100 rounded-md w-full"
                        readOnly
                    />
                </div>
            </div>
        </div>
    );
};

export default CompanyInformation;
