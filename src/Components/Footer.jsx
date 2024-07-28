import PryCtaBtn from "./PryCtaBtn";
import footerLogo from "/images/footer-logo.svg"

const Footer = () =>{
    return(
        <footer className="px-[101px] max-w-[1080px] bg-[#111D15] mx-auto">
            <div className="pt-[75px] pb-[15px]  text-white">
                <div className="flex justify-between ">
                    <div className="w-[267px] ">
                        <img className="mb-[18px] " src={footerLogo} alt="" />
                        <p className="text-[12px] font-light">Stay updated with our latest cleaning tips, service updates, and helpful articles on maintaining a spotless home.</p>
                    </div>
                    <div className="">
                        <h4 className="mb-[27px] text-[15px] font-bold">Company</h4>
                        <ul className="flex gap-[18px] flex-col items-start text-[12px] font-semibold">
                            <li>About Us</li>
                            <li>Services</li>
                            <li>Our Team</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="mb-[27px] text-[15px] font-bold">Know More</h4>
                        <ul className="flex gap-[18px] flex-col items-start text-[12px] font-semibold">
                            <li>Support</li>
                            <li>Privacy Policy</li>
                            <li>Terms & conditions</li>
                        </ul>
                    </div>
                    <div className="w-[218.25px]">
                        <h3 className="mb-[20px] text-[15px] font-bold">Newsletter </h3>
                        <input className="rounded-[4.5px] border border-[#808080] p-[8px] mb-[20px] bg-transparent" type="email" name="newsletter" id="newsletter" placeholder="Email Goes here" />
                        <PryCtaBtn text="Send" />
                    </div>
                </div>
                <div className="divider border border-[83A790] my-[30px]"></div>
                <p className="text-center">2024 “Procleaning” All Rights Received</p>
            </div>
        </footer>
    )
}

export default Footer;