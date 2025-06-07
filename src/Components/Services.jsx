import ArrowSVG from "/images/Arrow.svg"
import ServiceImage1 from "/images/service-image1.webp"
import ServiceImage2 from "/images/service-image2.webp"
import ServiceImage3 from "/images/service-image3.webp"
import ServiceImage4 from "/images/service-image4.webp";
import ServiceImage5 from "/images/service-image5.webp";
import ServiceImage6 from "/images/service-image6.webp";

const serviceDetails = [
    {
    image: ServiceImage1, 
    title: "Brake Repair", 
    desc: "Proper brake maintenance is crucial to your safety. Our ASE-certified technicians inspect and repair your brakes to ensure top performance."
    },
    {
    image: ServiceImage2, 
    title: "Oil Change", 
    desc: "Regular oil changes keep your engine running smoothly. Let us help extend the life of your vehicle with quality oil and filters."
    },
    {
    image: ServiceImage3, 
    title: "Transmission Repair", 
    desc: "Is your transmission acting up? We diagnose and repair issues to get you back on the road safely and confidently."
    },
    {
    image: ServiceImage4, 
    title: "Tire Services", 
    desc: "From tire rotations to new tire installations, we carry a wide variety and help you find the perfect fit for your vehicle."
    },
    {
    image: ServiceImage5, 
    title: "General Maintenance", 
    desc: "Stay on top of routine maintenance to prevent costly repairs. We help you keep your vehicle in top shape."
    },
    {
    image: ServiceImage6, 
    title: "Engine Diagnostics & Repair", 
    desc: "Check engine light on? Strange noises? Our state-of-the-art equipment pinpoints issues and our technicians provide solutions."
    },
]

const ServiceItem = ({image, title, desc}) =>{
    return(
        <div className="pb-[22px] rounded-md">
            <img loading="lazy"className="rounded-[22.5px] mb-[12px]" src={image} alt={title} />
            <div className="mb-[18px]">
                <h3 className="text-[18px] font-semibold mb-[12px]">{title}</h3>
                <p className="text-[12px] text-[#666666]">{desc}</p>
            </div>
            <a href="tel:(305)325-0116" className="border border-black rounded-[4.5px] px-[15px] py-2 text-[12px] hover:bg-[var(--pryClr)] hover:text-white hover:border-white">Book Now <img loading="lazy"src={ArrowSVG} alt="" className="w-[15px] aspect-square inline"/></a>
        </div>
    )
}

const Services = () =>{
    return(
        <div id="service" className="text-[#111d15] pt-[113px] pb-[56px] max-w-[1080px] mx-auto px-8">
            <div className="flex items-center gap-2 justify-between">
                <h2 className="sm:text-[33px] text-[16px] font-semibold max-w-[402px]">Expert Auto Repair & Maintenance Services</h2>
                <div className="max-w-[324.75px] text-right sm:text-left">
                    <p className="sm:text-[15px] text-[12px] font-semibold mb-[9px]">Our Services</p>
                    <p className="text-[12px] text-[#666666]">From brakes to diagnostics, we offer a full range of auto repair and maintenance services to keep your vehicle running its best.</p>
                </div>
            </div>
            <div className="divider border border-[83A790] my-[30px]"></div>
            <div className="grid sm:grid-cols-3 grid-cols-1 gap-[22px] items-center">
                {serviceDetails.map((service, index) => <ServiceItem title={service.title} image={service.image} desc={service.desc} key={index} /> )}
            </div>
        </div>
    )
}

export default Services;