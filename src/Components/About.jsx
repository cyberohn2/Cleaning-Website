import check from "/images/check.svg"
import PryCtaBtn from "./PryCtaBtn"
import SecCtaBtn from "./SecCtaBtn"
import aboutImage from "/images/service-image1.webp"

const About = () =>{
    return(
        <div id="about" className="flex flex-col sm:flex-row justify-between py-[56px] max-w-[1080px] mx-auto px-8">
            <div className="w-full sm:w-[500px] h-[325px] sm:h-auto" style={{backgroundImage: `url(${aboutImage})`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: "no-repeat"}}></div>
            <div className="sm:max-w-[394px]">
                <h2 className="text-[33px] font-semibold mb-[12px]">Welcome to J MOBIL INC!</h2>
                <p className="text-[12px] text-[#666666] mb-[24px]">J MOBIL INC is your trusted auto repair shop in Miami, FL. Our ASE-certified technicians provide expert brake repair, oil changes, transmission service, tire care, diagnostics, and more. We’re committed to honest, reliable service and your safety on the road.</p>
                <div className=" grid grid-cols-2 gap-[12px] justify-between mb-[36px]">
                    <div className="flex items-center p-[8px]  bg-[#F5F4F4] rounded-[3px] gap-[6px]">
                        <img loading="lazy"src={check} alt="" />
                        <p className="text-[12px] font-semibold">ASE-certified technicians</p>
                    </div>
                    <div className="flex items-center p-[8px]  bg-[#F5F4F4] rounded-[3px] gap-[6px]">
                        <img loading="lazy"src={check} alt="" />
                        <p className="text-[12px] font-semibold">Comprehensive diagnostics</p>
                    </div>
                    <div className="flex items-center p-[8px]  bg-[#F5F4F4] rounded-[3px] gap-[6px]">
                        <img loading="lazy"src={check} alt="" />
                        <p className="text-[12px] font-semibold">Quality parts & service</p>
                    </div>
                    <div className="flex items-center p-[8px]  bg-[#F5F4F4] rounded-[3px] gap-[6px]">
                        <img loading="lazy"src={check} alt="" />
                        <p className="text-[12px] font-semibold">Customer satisfaction</p>
                    </div>
                </div>
                <div className="flex items-center gap-[19px]">
                    <a href="tel:(305)325-0116">
                        <PryCtaBtn text="Book Appointment"/>
                    </a>
                    <a href="#contact">
                        <SecCtaBtn text="Contact Us"/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default About;