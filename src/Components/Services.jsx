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
        <div className="pb-[22px]">
            <img className="rounded-[22.5px] mb-[12px]" src={image} alt={title} />
            <div className="mb-[18px]">
                <h3 className="text-[18px] font-semibold mb-[12px]">{title}</h3>
                <p className="text-[12px] text-[#666666]">{desc}</p>
            </div>
            <button className="border border-black rounded-[4.5px] px-[15px] py-2 text-[12px]">Book Now <img src={ArrowSVG} alt="" className="w-[15px] aspect-square inline"/></button>
        </div>
    )
}

const Services = () =>{
    return(
        <div className="text-[#111d15] pt-[113px] pb-[56px]">
            <div className="flex items-center justify-between">
                <h2 className="text-[33px] font-semibold max-w-[402px]">We always provide the best service</h2>
                <div className="max-w-[324.75px]">
                    <p className="text-[15px] font-semibold mb-[9px]">Services</p>
                    <p className="text-[12px] text-[#666666]">While we can customize your cleaning plan to suit your needs, most clients schedule regular cleaning services:</p>
                </div>
            </div>
            <div className="divider border border-[83A790] my-[30px]"></div>
            <div className="grid grid-cols-3 gap-[22px]">
                {serviceDetails.map((service, index) => <ServiceItem title={service.title} image={service.image} desc={service.desc} key={index} /> )}
            </div>
        </div>
    )
}

export default Services;