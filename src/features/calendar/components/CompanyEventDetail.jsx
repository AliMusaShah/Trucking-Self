
const CompanyEventDetail = () => {
    return (
        <>
            <div className=" p-6 bg-white rounded-md shadow-md">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Company Information</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Row 1 */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Facility Name</label>
                        <input
                            type="text"
                            defaultValue="OBERFIELDS"
                            className="mt-1 p-2 bg-gray-100 rounded-md w-full"
                            readOnly
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Company URL</label>
                        <input
                            type="text"
                            defaultValue="www.oberfields.com"
                            className="mt-1 p-2 bg-gray-100 rounded-md w-full"
                            readOnly
                        />
                    </div>

                    {/* Row 2 */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Facility Number</label>
                        <input
                            type="text"
                            defaultValue="(614) 252-0955"
                            className="mt-1 p-2 bg-gray-100 rounded-md w-full"
                            readOnly
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Truck Activity</label>
                        <input
                            type="text"
                            defaultValue="4033 Alum Creek Dr, Obetz, OH 43207"
                            className="mt-1 p-2 bg-gray-100 rounded-md w-full"
                            readOnly
                        />
                    </div>

                    {/* Row 3 */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Truck Activity</label>
                        <input
                            type="text"
                            defaultValue="Medium"
                            className="mt-1 p-2 bg-gray-100 rounded-md w-full"
                            readOnly
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Start Date & Time</label>
                        <input
                            type="text"
                            defaultValue="24/07/2024 13:00"
                            className="mt-1 p-2 bg-gray-100 rounded-md w-full"
                            readOnly
                        />
                    </div>

                    {/* Row 4 */}
                    <div className="sm:col-span-2">
                        <label className="block text-sm font-medium text-gray-700">End Date & Time</label>
                        <input
                            type="text"
                            defaultValue="24/07/2024 13:30"
                            className="mt-1 p-2 bg-gray-100 rounded-md w-full"
                            readOnly
                        />
                    </div>




                </div>
            </div>
            <div className=" p-6 bg-white rounded-md shadow-md">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Contact Information</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Row 1 */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Name</label>
                        <input
                            type="text"
                            defaultValue="OBERFIELDS"
                            className="mt-1 p-2 bg-gray-100 rounded-md w-full"
                            readOnly
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Title</label>
                        <input
                            type="text"
                            defaultValue="www.oberfields.com"
                            className="mt-1 p-2 bg-gray-100 rounded-md w-full"
                            readOnly
                        />
                    </div>

                    {/* Row 2 */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="text"
                            defaultValue="(614) 252-0955"
                            className="mt-1 p-2 bg-gray-100 rounded-md w-full"
                            readOnly
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Phone</label>
                        <input
                            type="text"
                            defaultValue="4033 Alum Creek Dr, Obetz, OH 43207"
                            className="mt-1 p-2 bg-gray-100 rounded-md w-full"
                            readOnly
                        />
                    </div>

                    {/* Row 3 */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">LinkedIn</label>
                        <input
                            type="text"
                            defaultValue="Medium"
                            className="mt-1 p-2 bg-gray-100 rounded-md w-full"
                            readOnly
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Pipeline Stage</label>
                        <input
                            type="text"
                            defaultValue="24/07/2024 13:00"
                            className="mt-1 p-2 bg-gray-100 rounded-md w-full"
                            readOnly
                        />
                    </div>

                    {/* Row 4 */}
                    <div className="sm:col-span-2">
                        <label className="block text-sm font-medium text-gray-700">End Date & Time</label>
                        <input
                            type="text"
                            defaultValue="24/07/2024 13:30"
                            className="mt-1 p-2 bg-gray-100 rounded-md w-full"
                            readOnly
                        />
                    </div>




                </div>
            </div>
        </>

    )
}

export default CompanyEventDetail