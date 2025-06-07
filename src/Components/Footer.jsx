import PryCtaBtn from "./PryCtaBtn";
import footerLogo from "/images/footer-logo.svg"

const Footer = () =>{
    return(
        <footer className="px-[101px] max-w-[1440px] mx-auto bg-[#111D15]">
            <div className="pt-[75px] pb-[15px]  text-white max-w-[1080px] mx-auto">
                <div className="flex flex-col sm:flex-row justify-between gap-8">
                    <div className="max-w-[267px] text-center sm:text-left ">
                        <img loading="lazy"className="mb-[18px] mx-auto sm:mx-0" src={footerLogo} alt="" />
                        <p className="text-[12px] font-light">J MOBIL INC – Miami’s trusted auto repair shop. Expert brake, engine, tire, and maintenance services. Visit us or call (305) 325-0116 for honest, reliable service.</p>
                    </div>
                    <div className="text-center sm:text-left">
                        <h4 className="mb-[27px] text-[15px] font-bold sm:hidden">Company</h4>
                        <ul className="flex gap-[18px] flex-col sm:items-start sm:flex-row text-[12px] font-semibold">
                            {['Home', 'About Us', 'Service', 'Blog', 'Contact'].map((item, index) => (
                                <li key={index} className="text-white hover:text-[var(--pryClr)] transition-colors duration-300">
                                <a href={`#${item.toLowerCase().replace(/\s+/g, '')}`}>{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* <div className="text-center sm:text-left">
                        <h4 className="mb-[27px] text-[15px] font-bold">Know More</h4>
                        <ul className="flex gap-[18px] flex-col sm:items-start text-[12px] font-semibold">
                            <li>Support</li>
                            <li>Privacy Policy</li>
                            <li>Terms & Conditions</li>
                        </ul>
                    </div> */}
                    {/* <div className="max-w-[218.25px] text-center sm:text-left">
                        <h3 className="mb-[20px] text-[15px] font-bold">Newsletter </h3>
                        <input className="rounded-[4.5px] border border-[#808080] p-[8px] mb-[20px] bg-transparent" type="email" name="newsletter" id="newsletter" placeholder="Email Goes here" />
                        <PryCtaBtn text="Send" />
                    </div> */}
                </div>
                <div className="divider border border-[83A790] my-[30px]"></div>
                <p className="text-center">© USA TIRES & Auto Repair COPYRIGHT 2024.</p>
            </div>
        </footer>
    )
}

export default Footer;