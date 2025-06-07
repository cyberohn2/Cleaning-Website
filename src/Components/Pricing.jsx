import SecCtaBtn from "./SecCtaBtn"
import PryCtaBtn from "./PryCtaBtn"
import pricingBg from "/images/pricing-bg.png"

const Pricing = () =>{
    return(
        <div className="py-[56.25px]">
            <div style={{backgroundImage: `url(${pricingBg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: "no-repeat"}} className="absolute inset-x-0 top-0 h-[519.75px] bg-[var(--pryClr)] -z-10"></div>
            <div className="text-white max-w-[1080px] mx-auto px-8">
                <div className="max-w-[413.25px] mx-auto text-center">
                    <p className="text-[15px]">Our Pricing</p>
                    <h2 className="sm:text-[33px] text-[24px] font-semibold mb-[30px]">Choose From Our Lowest Plans and Prices</h2>
                </div>
                <div className="grid sm:grid-cols-3 grid-cols-1 gap-[22px]">
                    <div className="px-[26px] py-[22px] border border-[#F3F3F3] bg-white flex flex-col rounded-[15px] shadow-sm">
                        <p className="text-[15px] text-[#111D15] mb-[18px] font-semibold uppercase text-center">Basic Package</p>
                        <div className="px-[30px] py-[15px] bg-[var(--pryClr)] text-[12px] text-center rounded-[7.5px] mb-[27px]">$ <span className="text-[24px] font-bold">59.00/</span>Monthly</div>
                        <ul className="text-[#666666] list-disc pl-[13px] text-[12px] mb-[27px]">
                            <li className="leading-[300%]">Dusting of all surfaces</li>
                            <li className="leading-[300%]">Sweeping and mopping floors</li>
                            <li className="leading-[300%]">Vacuuming carpets and rugs</li>
                            <li className="leading-[300%]">Cleaning of kitchen surfaces</li>
                            <li className="leading-[300%]">Cleaning of bathroom surfaces</li>
                            <li className="leading-[300%]">Emptying trash bins</li>
                        </ul>
                        <SecCtaBtn text="Book Now" />
                    </div>
                    <div className="px-[26px] py-[22px] border border-[#F3F3F3] bg-white flex flex-col rounded-[15px] shadow-sm">
                        <p className="text-[15px] text-[#111D15] mb-[18px] font-semibold uppercase text-center">Enterprise Package</p>
                        <div className="px-[30px] py-[15px] bg-[var(--pryClr)] text-[12px] text-center rounded-[7.5px] mb-[27px]">$ <span className="text-[24px] font-bold">69.00/</span>Monthly</div>
                        <ul className="text-[#666666] list-disc pl-[13px] text-[12px] mb-[27px]">
                            <li className="leading-[300%]">All services in the Basic Plan</li>
                            <li className="leading-[300%]">Detailed dusting</li>
                            <li className="leading-[300%]">Wiping down of kitchen appt</li>
                            <li className="leading-[300%]">Cleaning inside the microwave</li>
                            <li className="leading-[300%]">Cleaning inside the microwave</li>
                            <li className="leading-[300%]">Spot cleaning walls and doors</li>
                        </ul>
                        <PryCtaBtn text="Book Now" />
                    </div>
                    <div className="px-[26px] py-[22px] border border-[#F3F3F3] bg-white flex flex-col rounded-[15px] shadow-sm">
                        <p className="text-[15px] text-[#111D15] mb-[18px] font-semibold uppercase text-center">Premium Package</p>
                        <div className="px-[30px] py-[15px] bg-[var(--pryClr)] text-[12px] text-center rounded-[7.5px] mb-[27px]">$ <span className="text-[24px] font-bold">99.00/</span>Monthly</div>
                        <ul className="text-[#666666] list-disc pl-[13px] text-[12px] mb-[27px]">
                            <li className="leading-[300%]">All services in the Clean Plan</li>
                            <li className="leading-[300%]">Deep cleaning of kitchen app</li>
                            <li className="leading-[300%]">baseboards, door frames, & vents</li>
                            <li className="leading-[300%]">Organization of closets pantries</li>
                            <li className="leading-[300%]">Carpet, upholstery spot cleaning</li>
                            <li className="leading-[300%]">Detailed bathroom cleaning</li>
                        </ul>
                        <SecCtaBtn text="Book Now" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pricing;