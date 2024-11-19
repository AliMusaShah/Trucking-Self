
import logo from '../../../../assets/logo1.png';
import CustomPaymentPlan from './CustomPaymentPlan';

const PaymentPlan = () => {
    return (
        <>
            <section className="py-6 leading-7 text-gray-900 bg-white sm:py-12 md:py-16">
                <div className="box-border px-4 mx-auto border-solid sm:px-6 md:px-6 lg:px-0 max-w-7xl">
                    <div className='flex  justify-center my-10'>
                        <img src={logo} alt="" />
                    </div>
                    <div className="flex flex-col items-center leading-7 text-center text-gray-900">
                        <h2 id="pricing"
                            className="box-border m-0 text-3xl font-semibold leading-tight tracking-tight text-black border-solid sm:text-4xl md:text-3xl">
                            Select Plan
                        </h2>
                        <p className="box-border mt-10 text-xs text-gray-400 border-solid sm:text-lg">
                            Choosing the right subscription plan is essential to ensure you get the best value for your needs. Consider the frequency of use, the range of features offered, and your budget. A basic plan may be suitable for casual users who need minimal features at a lower cost.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 gap-10 mt-4 leading-7 text-gray-900 border-0 border-gray-200 sm:mt-6 sm:gap-6 md:mt-8 md:gap-0 lg:grid-cols-3">
                        <CustomPaymentPlan />
                        <CustomPaymentPlan />
                        <CustomPaymentPlan />
                    </div>



                </div>
            </section>


        </>

    )
}

export default PaymentPlan