const Pricing = () =>{
    return(
        <div className="py-[56.25px] isolate h-[700px]">
            <div className="absolute inset-x-0 top-0 h-[519.75px] bg-green-500 -z-10"></div>
            <div className="text-white">
                <p className="text-[15px]">Our Pricing</p>
                <h2 className="text-[33px] font-semibold">Choose From Our Lowest Plans and Prices</h2>
                <div className="grid grid-cols-3 gap-[22px]">
                    <div className="px-[26px] py-[22px]">
                        <p className="text-[15px] text-[#111D15] mb-[18px]">Basic Package</p>
                        <div className="px-[30px] py-[15px] bg-[#36B864] text-[12px] text-center rounded-[7.5px]">$ <span className="text-[24px] font-bold">59.00/</span>Monthly</div>
                        <ul>
                            <li>Dusting of all surfaces</li>
                            <li>Sweeping and mopping floors</li>
                            <li>Vacuuming carpets and rugs</li>
                            <li>Cleaning of kitchen surfaces</li>
                            <li>Cleaning of bathroom surfaces</li>
                            <li>Emptying trash bins</li>
                        </ul>
                        <button>Book Now</button>
                    </div>
                    <div>
                        <p>Enterprise Package</p>
                        <div>$ 69.00/Monthly</div>
                        <ul>
                            <li>All services in the Basic Plan</li>
                            <li>Detailed dusting</li>
                            <li>Wiping down of kitchen appt</li>
                            <li>Cleaning inside the microwave</li>
                            <li>Cleaning inside the microwave</li>
                            <li>Spot cleaning walls and doors</li>
                        </ul>
                        <button>Book Now</button>
                    </div>
                    <div>
                        <p>Premium Package</p>
                        <div>$ 99.00/Monthly</div>
                        <ul>
                            <li>All services in the Clean Plan</li>
                            <li>Deep cleaning of kitchen app</li>
                            <li>baseboards, door frames, & vents</li>
                            <li>Organization of closets pantries</li>
                            <li>Carpet, upholstery spot cleaning</li>
                            <li>Detailed bathroom cleaning</li>
                        </ul>
                        <button>Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pricing;