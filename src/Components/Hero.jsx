import PryCtaBtn from "./PryCtaBtn"
import SecCtaBtn from "./SecCtaBtn"
import HeroImg from "/images/hero-img.png" 

const Hero = () =>{ 
    return(
        <div id="hero" style={{backgroundImage: `url(${HeroImg})`, backgroundSize: 'cover', backgroundPosition: 'center',}} className="max-w-[1440px] mx-auto px-8 ">
            <div className="max-w-[1080px] mx-auto py-[6.875rem] ">
                <div className="hero-content mr-auto max-w-[450px]">
                    <div className="mb-[30px]">
                        <p className="text-[15px] mb-[9px] text-[var(--pryClr)] font-semibold">Quality cleaning at a fair price.</p>
                        <h1 className="font-bold sm:text-[39px] text-[29px] mb-[18px]">Leo Cleaning Service</h1>
                        <p className="text-[13.5px] text-[#666666]">We provide top-notch cleaning for homes and businesses. Specialized, efficient, and thorough cleaning services.</p>
                    </div>
                    <div className="flex items-center gap-[19px]">
                        <a href="https://wa.me/2348132254419?text=Hello%20Leo%20Cleaning%20Service%2C%20I%20would%20like%20to%20reach%20out%20for%20your%20cleaning%20services." target="_blank" rel="noopener noreferrer">
                            <PryCtaBtn text="Reach out"/>
                        </a>
                        <a href="#service">
                            <SecCtaBtn text="Services"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;