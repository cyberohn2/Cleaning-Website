import PryCtaBtn from "./PryCtaBtn";
import footerLogo from "/images/footer-logo.svg"

const Footer = () =>{
    return(
        <footer className="px-[101px] max-w-[1440px] mx-auto bg-[#111D15]">
            <div className="pt-[75px] pb-[15px]  text-white max-w-[1080px] mx-auto">
                <div className="flex flex-col sm:flex-row justify-center gap-8">
                    <div className="max-w-[267px] text-center sm:text-left ">
                        <img loading="lazy"className="mb-[18px] mx-auto sm:mx-0" src={footerLogo} alt="" />
                        <p className="text-[12px] font-light">Leo Cleaning Service – Professional cleaning for homes and businesses.</p>
                    </div>
                    <div className="text-center sm:text-left">
                        <h4 className="mb-[27px] text-[15px] font-bold">Company</h4>
                        <ul className="flex gap-[18px] flex-col sm:items-start text-[12px] font-semibold">
                            <li>About Us</li>
                            <li>Services</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    {/* <div className="text-center sm:text-left">
                        <h4 className="mb-[27px] text-[15px] font-bold">Know More</h4>
                        <ul className="flex gap-[18px] flex-col sm:items-start text-[12px] font-semibold">
                            <li>Support</li>
                            <li>Privacy Policy</li>
                            <li>Terms & conditions</li>
                        </ul>
                    </div> */}
                    {/* <div className="max-w-[218.25px] text-center sm:text-left">
                        <h3 className="mb-[20px] text-[15px] font-bold">Newsletter </h3>
                        <input className="rounded-[4.5px] border border-[#808080] p-[8px] mb-[20px] bg-transparent" type="email" name="newsletter" id="newsletter" placeholder="Email Goes here" />
                        <a href="https://wa.me/2348132254419?text=Hello%20Leo%20Cleaning%20Service%2C%20I%20would%20like%20to%20reach%20out%20for%20your%20cleaning%20services." target="_blank" rel="noopener noreferrer">
                            <PryCtaBtn text="Contact us" />
                        </a>
                    </div> */}
                </div>
                <div className="divider border border-[83A790] my-[30px]"></div>
                <p className="text-center">© Leo Cleaning Service 2025. All Rights Reserved.</p>
            </div>
        </footer>
    )
}

export default Footer;