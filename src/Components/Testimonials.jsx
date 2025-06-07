import rightArrow from "/images/right-arrow.svg"
import avatar from "/images/avatar.png"
import quotePng from "/images/quote-png.svg"

const Testimonials = () =>{
    return(
        <div className="max-w-[1080px] mx-auto px-8 py-[56px] flex flex-col sm:items-start sm:flex-row justify-between gap-8">
            <div className="w-[375px]">
                <h2 className="text-[33px] font-semibold mb-[18px]">Feedback About Their Experience With Us</h2>
                <p className="text-[12px] text-[#666666] mb-[27px]">Read testimonials from our satisfied clients. See how our cleaning services have made a difference in their lives and homes</p>
                <div className="flex items-center gap-[9px]">
                    <button className="border border-[var(--pryClr)] hover:bg-[var(--pryClr)] rounded-[4.5px] p-[12px] text-[#111d15] flex items-center justify-center">
                        <img loading="lazy"className="rotate-180" src={rightArrow} alt="" />  
                    </button>
                    <button className="bg-[var(--pryClr)] hover:bg-[#40c26b] rounded-[4.5px] p-[12px] flex items-center justify-center">
                        <img loading="lazy"src={rightArrow}  alt="" />
                    </button>
                </div>
            </div>
            <div className="p-[15px] flex max-w-[450px] rounded-[15px] shadow-sm border-t-[7.5px] border-r-[7.5px] border-[var(--pryClr)]">
                <img loading="lazy"className="w-[127.5px] mr-[18px] rounded-[7.5px]" src={avatar} />
                <div>
                    <div className="flex items-center justify-between mb-[12px]">
                        <div>
                            <h3 className="text-[15px] font-semibold mb-[9px]">Robert Fox</h3>
                            <p className="text-[12px] text-[#666666] m">Business Man</p>
                        </div>
                        <div className="p-2 rounded-[3px] bg-[var(--pryClr)] flex items-center justify-center"><img loading="lazy"src={quotePng} alt="" /></div>
                    </div>
                    <p className="text-[12px] text-[#666666]">Excellent service! The team was punctual, thorough, and left my home sparkling clean. Highly recommend for anyone needing a reliable and detailed cleaning service</p>
                </div>
            </div>
        </div>
    )
}

export default Testimonials;