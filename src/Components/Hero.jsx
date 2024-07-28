import PryCtaBtn from "./PryCtaBtn"
import SecCtaBtn from "./SecCtaBtn"
import HeroImg from "/images/hero-img.png" 

const Hero = () =>{ 
    return(
        <div style={{backgroundImage: `url(${HeroImg})`, backgroundSize: 'cover', backgroundPosition: 'center',}} className="max-w-[1440px] mx-auto px-8 ">
            <div className="max-w-[1080px] mx-auto py-[6.875rem] ">
                <div className="hero-content mr-auto max-w-[450px]">
                    <div className="mb-[30px]">
                        <p className="text-[15px] mb-[9px]">Quality cleaning at a fair price.</p>
                        <h1 className="font-bold sm:text-[39px] text-[29px] mb-[18px]">Specialized, efficient, and thorough cleaning services</h1>
                        <p className="text-[13.5px] text-[#666666]">We provide Performing cleaning tasks using the least amount of time, energy, and money.</p>
                    </div>
                    <div className="flex items-center gap-[19px]">
                        <PryCtaBtn text="Get  Start Now"/>
                        <SecCtaBtn text="View all Services"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;