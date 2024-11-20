
const UnqualifiedLead = () => {
    const leads = [
        {
            company: "OBERFIELDS",
            switch: "Off",
            person: {
                name: "Darrick Collins",
                email: "dcollins@oberfields.com",
                phone: "(614) 252-0955"
            }
        },
        {
            company: "AEP East Transmission RDC",
            switch: "On",
            person: {
                name: "Jeff Zerkle",
                email: "jzerkle@aep.com",
                phone: "614-425-8505"
            }
        },
        {
            company: "Amsted Rail Griffin Wheel",
            switch: "On",
            person: {
                name: "Joe Heller",
                email: "jheller@amstedrail.com",
                phone: "312-922-4501"
            }
        },
        {
            company: "Cleveland Cliffs Mansfield Works",
            switch: "On",
            person: {
                name: "Leslie Moll",
                email: "leslie.moll@clevelandcliffs.com",
                phone: "219-399-3656"
            }
        },
        {
            company: "Engineered Wire Products",
            switch: "On",
            person: {
                name: "Dave Jillson",
                email: "jillsond@keystonesteel.com",
                phone: "(800) 447-6444"
            }
        }
    ];

    return (
        <div className="flex">
            <div className="flex flex-col items-start shadow-lg bg-gray-100">
                <h1 className="text-xl font-semibold p-2 text-center mb-4 text-white bg-defaultBlue w-full">Unqualified Lead</h1>
                <div className="space-y-4">
                    {leads.map((lead, index) => (
                        <div key={index} className=" p-1 bg-white rounded shadow">
                            {/* <div className="text-sm text-gray-600 w-full"> */}
                            <div className="flex justify-between p-2  font-normal text-defaultBlue">
                                <span className="font-semibold">{lead.company}</span>
                                <span>
                                    <label className="inline-flex items-center cursor-pointer">
                                        <input
                                            type="checkbox"
                                            className="sr-only peer"
                                            onChange={() => console.log('Toggle status for row:')}
                                        />
                                        <div className="relative w-11 h-6 bg-gray-200  rounded-full  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-defaultBlue"></div>
                                    </label>
                                </span>
                            </div>
                            <div className="flex justify-between p-2  text-xs text-gray-600">
                                <span>Person Name:</span>
                                <span className="font-semibold">{lead.person.name}</span>
                            </div>
                            <div className="flex justify-between p-2 text-xs text-gray-600">
                                <span>Person Email:</span>
                                <span className="font-semibold">{lead.person.email}</span>
                            </div>
                            <div className="flex justify-between p-2 text-xs text-gray-600 w-full">
                                <span>Person Phone:</span>
                                <span className="font-semibold">{lead.person.phone}</span>
                            </div>

                        </div>

                        // </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default UnqualifiedLead;
