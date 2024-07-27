import PryCtaBtn from "./PryCtaBtn"
import SecCtaBtn from "./SecCtaBtn"
import HeroImg from "/images/hero-img.png"

const Hero = () =>{ 
    return(
        <div style={{backgroundImage: `url(${HeroImg})`, backgroundSize: 'cover', backgroundPosition: 'center',}} className="max-w-[1080px] mx-auto pl-[6.3125rem] pr-[32.5625rem] py-[4.875rem] ">
            <div className="hero-content">
                <div className="mb-[30px]">
                    <p className="text-[15px] mb-[9px]">Quality cleaning at a fair price.</p>
                    <h1 className="font-bold text-[39px] mb-[18px]">Specialized, efficient, and thorough cleaning services</h1>
                    <p className="text-[13.5px] text-[#666666]">We provide Performing cleaning tasks using the least amount of time, energy, and money.</p>
                </div>
                <div className="flex items-center gap-[19px]">
                    <PryCtaBtn text="Get  Start Now"/>
                    <SecCtaBtn text="View all Services"/>
                </div>
            </div>
        </div>
    )
}

export default Hero;