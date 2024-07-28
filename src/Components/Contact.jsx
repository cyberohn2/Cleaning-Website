import phoneIcon from "/images/phone-icon.svg"
import mailIcon from "/images/mail-icon.svg"
import locationIcon from "/images/location-icon.svg"

const Contact = () =>{
    return(
        <div className="py-[56px] flex items-end justify-between">
            <div className="w-[450px]">
                <h2 className="mb-[30px] text-[30px] font-semibold">Find us</h2>
                <div className="flex flex-col gap-[22px]">
                    <div className="p-[15px] rounded-[9px] bg-[#FBFBFB] border border-[#F3F3F3] flex items-center">
                        <div className="mr-[9px] w-[40.5px] aspect-square rounded-full flex items-center justify-center bg-[#36B864]"><img src={phoneIcon} alt="" /></div>
                        <div>
                            <h3 className="mb-[6px] text-[15px] font-semibold">Call Us</h3>
                            <p className="text-[12px] text-[#666666]">+(08) 255 201 888</p>
                        </div>
                    </div>
                    <div className="p-[15px] rounded-[9px] bg-[#FBFBFB] border border-[#F3F3F3] flex items-center">
                        <div className="mr-[9px] w-[40.5px] aspect-square rounded-full flex items-center justify-center bg-[#36B864]"><img src={mailIcon} alt="" /></div>
                        <div>
                            <h3 className="mb-[6px] text-[15px] font-semibold">Email Now</h3>
                            <p className="text-[12px] text-[#666666]">Hello@procleaning.com</p>
                        </div>
                    </div>
                    <div className="p-[15px] rounded-[9px] bg-[#FBFBFB] border border-[#F3F3F3] flex items-center">
                        <div className="mr-[9px] w-[40.5px] aspect-square rounded-full flex items-center justify-center bg-[#36B864]"><img src={locationIcon} alt="" /></div>
                        <div>
                            <h3 className="mb-[6px] text-[15px] font-semibold">Address</h3>
                            <p className="text-[12px] text-[#666666]">7510, Brand Tower, New York, USA</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[375px] ">
                <div className="mb-[30px]">
                    <p className="text-[12px] mb-[6px]">Contact info</p>
                    <h2 className="text-[27px] font-semibold mb-[12px]">Keep In Touch</h2>
                    <p className="text-[12px] text-[#666666]">We prioritize responding to your inquiries promptly to ensure you
                    receive the assistance you need in a timely manner</p>
                </div>
                <form action="">
                    <div className="mb-[22px] flex flex-col gap-[22px]">
                        <div className="p-[14px] rounded-[3px] bg-white border border-[#F3F3F3] flex items-center">
                            <label className="mr-[9px] block" htmlFor="name">Name</label>
                            <input className="outline-none" name="name" id="name" type="text" />
                        </div>
                        <div className="p-[14px] rounded-[3px] bg-white border border-[#F3F3F3] flex items-center">
                            <label className="mr-[9px] block" htmlFor="email">Email</label>
                            <input className="outline-none" name="email" id="email" type="mail" />
                        </div>
                        <div className="p-[14px] rounded-[3px] bg-white border border-[#F3F3F3]">
                            <label className="mb-[9px] block" htmlFor="message">Message</label>
                            <textarea className="outline-none" cols="30" rows="1" name="message" id="message" ></textarea>
                        </div>
                    </div>
                    <input className="py-[9px] px-[18px] rounded-[4.5px] bg-[#36B864] text-white" type="submit" value="Send" />
                </form>
            </div>
        </div>
    )
}

export default Contact;