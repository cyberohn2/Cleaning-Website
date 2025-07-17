import check from "/images/check.svg"
import PryCtaBtn from "./PryCtaBtn"
import SecCtaBtn from "./SecCtaBtn"
import aboutImage from "/images/about-image.png"

const About = () =>{
    return(
        <div id="about" className="flex flex-col sm:flex-row justify-between py-[56px] max-w-[1080px] mx-auto px-8">
            <div className="w-full sm:w-[500px] h-[325px] sm:h-auto" style={{backgroundImage: `url(${aboutImage})`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: "no-repeat"}}></div>
            <div className="sm:max-w-[394px]">
                <h2 className="text-[33px] font-semibold mb-[12px]">Welcome to Leo Cleaning Service!</h2>
                <p className="text-[12px] text-[#666666] mb-[24px]">We make your space shine! Professional and reliable cleaning service company providing top-notch solutions for homes and businesses. Satisfaction guaranteed!"</p>
                <div className=" grid grid-cols-2 gap-[12px] justify-between mb-[36px]">
                    <div className="flex items-center p-[8px]  bg-[#F5F4F4] rounded-[3px] gap-[6px]">
                        <img loading="lazy"src={check} alt="" />
                        <p className="text-[12px] font-semibold">Vetted professionals</p>
                    </div>
                    <div className="flex items-center p-[8px]  bg-[#F5F4F4] rounded-[3px] gap-[6px]">
                        <img loading="lazy"src={check} alt="" />
                        <p className="text-[12px] font-semibold">Next day availability</p>
                    </div>
                    <div className="flex items-center p-[8px]  bg-[#F5F4F4] rounded-[3px] gap-[6px]">
                        <img loading="lazy"src={check} alt="" />
                        <p className="text-[12px] font-semibold">Standard cleaning tasks</p>
                    </div>
                    <div className="flex items-center p-[8px]  bg-[#F5F4F4] rounded-[3px] gap-[6px]">
                        <img loading="lazy"src={check} alt="" />
                        <p className="text-[12px] font-semibold">Affordable Prices</p>
                    </div>
                    <div className="flex items-center p-[8px]  bg-[#F5F4F4] rounded-[3px] gap-[6px]">
                        <img loading="lazy"src={check} alt="" />
                        <p className="text-[12px] font-semibold">Best Quality</p>
                    </div>
                    <div className="flex items-center p-[8px]  bg-[#F5F4F4] rounded-[3px] gap-[6px]">
                        <img loading="lazy"src={check} alt="" />
                        <p className="text-[12px] font-semibold">Customer satisfaction</p>
                    </div>
                </div>
                <div className="flex items-center gap-[19px]">
                    <a href="https://wa.me/2348132254419?text=Hello%20Leo%20Cleaning%20Service%2C%20I%20would%20like%20to%20reach%20out%20for%20your%20cleaning%20services." target="_blank" rel="noopener noreferrer">
                        <PryCtaBtn text="Contact Us"/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default About;