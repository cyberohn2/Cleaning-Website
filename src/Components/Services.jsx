import ArrowSVG from "/images/Arrow.svg"
import ServiceImage1 from "/images/service-image1.png"
import ServiceImage2 from "/images/service-image2.png"
import ServiceImage3 from "/images/service-image3.png"

const serviceDetails = [
    {
    image: ServiceImage1, 
    title: "Office Cleaning", 
    desc: "While we can customize your cleaning plan to suit your needs, most clients schedule regular cleaning services:"
    },
    {
    image: ServiceImage2, 
    title: "Spring Cleaning", 
    desc: "While we can customize your cleaning plan to suit your needs, most clients schedule regular cleaning services:"
    },
    {
    image: ServiceImage3, 
    title: "House Cleaning", 
    desc: "While we can customize your cleaning plan to suit your needs, most clients schedule regular cleaning services:"
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
            <a href="https://wa.me/2348132254419?text=Hello%20Leo%20Cleaning%20Service%2C%20I%20would%20like%20to%20reach%20out%20for%20your%20cleaning%20services." target="_blank" rel="noopener noreferrer"><button className="border border-black rounded-[4.5px] px-[15px] py-2 text-[12px] hover:bg-[#36B864] hover:text-white hover:border-white">Book Now <img loading="lazy"src={ArrowSVG} alt="" className="w-[15px] aspect-square inline"/></button></a>
        </div>
    )
}

const Services = () =>{
    return(
        <div id="service" className="text-[#111d15] pt-[113px] pb-[56px] max-w-[1080px] mx-auto px-8">
            <div className="flex items-center gap-2 justify-between">
                <h2 className="sm:text-[33px] text-[16px] font-semibold max-w-[402px]">We always provide the best service</h2>
                <div className="max-w-[324.75px] text-right sm:text-left">
                    <p className="sm:text-[15px] text-[12px] font-semibold mb-[9px]">Services</p>
                    <p className="text-[12px] text-[#666666]">We offer professional cleaning for homes and businesses. </p>
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