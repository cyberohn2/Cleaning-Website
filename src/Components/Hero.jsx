import PryCtaBtn from "./PryCtaBtn"
import SecCtaBtn from "./SecCtaBtn"
import HeroImg from "/images/hero-img.webp" 

const Hero = () =>{ 
    return(
        <div id="hero" style={{backgroundImage: `url(${HeroImg})`, backgroundSize: 'cover', backgroundPosition: 'center',}} className="max-w-[1440px] mx-auto ">
            <div className="px-8 mx-auto py-[6.875rem] bg-black/60 text-white">
                <div className="hero-content mr-auto max-w-[450px]">
                    <div className="mb-[30px]">
                        <p className="text-[15px] mb-[9px] text-[var(--pryClr)] font-semibold">J MOBIL INC</p>
                        <h1 className="font-bold sm:text-[39px] text-[29px] mb-[18px]">Reliable, fast, and professional auto repair services</h1>
                        <p className="text-[13.5px] text-[#ebe7e7]">Our ASE-certified technicians provide comprehensive auto repair and maintenance—brakes, oil changes, tires, diagnostics, and more. Honest advice and quality service to keep you safe on the road.</p>
                    </div>
                    <div className="flex items-center gap-[19px]">
                        <a href="tel:(305)325-0116">
                            <PryCtaBtn text="Book Appointment"/>
                        </a>
                        <a href="#service"><button className="border border-white hover:border-white/60 hover:text-white hover:border-white rounded-[4.5px] px-6 py-2 text-white w-fit text-[12px] sm:text-[16px]">View Services</button></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;