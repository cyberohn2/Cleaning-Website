import PryCtaBtn from "./PryCtaBtn"
import Logo from "/images/Logologo.svg"

const Header = () =>{
    return(
        <header className="max-w-[1080px] mx-auto px-[6.3125rem] py-[1.125rem] flex items-center justify-between">
            <img src={Logo} alt="" />
            <nav>
                <ul className="flex items-center gap-[22px] font-veitnam text-sm">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Service</li>
                    <li>Blog</li>
                    <li>Contact</li>
                </ul>
            </nav>
            <PryCtaBtn text="Get a quote" />
        </header>
    )
}

export default Header;