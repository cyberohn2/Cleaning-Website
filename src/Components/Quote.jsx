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
                <PryCtaBtn text="Get Quote"/>
            </div>
            <div className="w-full sm:w-[500px] h-[325px] sm:h-auto" style={{backgroundImage: `url(${QuoteImage})`, backgroundSize: 'contain', backgroundPosition: 'center',backgroundRepeat: "no-repeat"}}></div>
        </div>
    )
}

export default Quote;