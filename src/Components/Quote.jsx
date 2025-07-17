import PryCtaBtn from "./PryCtaBtn";
import QuoteImage from "/images/quote.png"

const Quote = () =>{
    return(
        <div className="flex flex-col sm:flex-row justify-between py-[56px] max-w-[1080px] mx-auto px-8">
            <div className="max-w-[395.25px] mb-8 sm:mb-0">
                <div className="mb-[39px]">
                    <p className="text-[12px] mb-[9px]">Affordable cleaning solutions</p>
                    <h2 className="font-bold text-[33px] mb-[24px]">High-Quality and Friendly
                    Services at Fair Prices</h2>
                    <p className="text-[15px] text-[#666666]">We provide Performing cleaning tasks using the least amount of time, energy, and money.</p>
                </div>
                <a href="https://wa.me/2348132254419?text=Hello%20Leo%20Cleaning%20Service%2C%20I%20would%20like%20to%20reach%20out%20for%20your%20cleaning%20services." target="_blank" rel="noopener noreferrer">
                    <PryCtaBtn text="Contact Us Today"/>
                </a>
            </div>
            <div className="w-full sm:w-[500px] h-[325px] sm:h-auto" style={{backgroundImage: `url(${QuoteImage})`, backgroundSize: 'contain', backgroundPosition: 'center',backgroundRepeat: "no-repeat"}}></div>
        </div>
    )
}

export default Quote;