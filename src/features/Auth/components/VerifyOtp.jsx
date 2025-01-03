import { useState } from "react";
import CustomButton from "../../../components/CustomButton";
import { toast } from "react-toastify";

function VerifyOtp() { // Access the location object to retrieve passed state
    const [otp, setOtp] = useState(new Array(5).fill(""));

    const handleChange = (element, index) => {
        if (isNaN(element.value)) return;

        setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

        // Move focus to the next input field
        if (element.nextSibling) {
            element.nextSibling.focus();
        }
    };
    const handleSubmit = () => {
        const otpCode = otp.join(""); // Combine the OTP array into a single string

        if (otpCode.length !== 5) {
            toast.error("Please enter a valid 5-digit OTP.");
            return;
        }

        console.log(otpCode)
    }
    // if (!email) {
    //     toast.error("Email not found. Please go back and enter your email again.");
    //     return;
    // }
    return (
        <div className="pl-2 pt-2 pb-2 h-screen">
            <div className="grid grid-cols-12 gap-2 h-full">
                <div className="col-span-6 h-full overflow-hidden">
                    {/* <img
                        src={LoginBackground}
                        alt="Login Background"
                        className="w-full h-full"
                    /> */}
                </div>
                <div className="col-span-6 flex justify-center items-center">
                    <div className="form w-[445px]">
                        <div className="pb-8">
                            <CustomButton to='-1' variant="normal">
                                Back
                            </CustomButton>
                            <h1 className="text-3xl font-[600]">Enter OTP</h1>
                            <p className="text-base font-normal text-[#A2A1A8] pt-2">
                                We have shared a code to your registered email address:
                                <br />
                                <b>Email</b>
                            </p>
                        </div>
                        <div className="mb-4">
                            <div className="flex space-x-2">
                                {otp.map((data, index) => {
                                    return (
                                        <input
                                            className="w-12 h-12 text-center border-2 rounded-md border-gray-300 focus:border-lightBlue focus:outline-none"
                                            type="text"
                                            name="otp"
                                            maxLength="1"
                                            key={index}
                                            value={data}
                                            onChange={(e) => handleChange(e.target, index)}
                                            onFocus={(e) => e.target.select()}
                                        />
                                    );
                                })}
                            </div>
                        </div>

                        <CustomButton
                            size='lg'
                            onClick={handleSubmit}

                        >
                            Verify Otp
                        </CustomButton>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default VerifyOtp;
