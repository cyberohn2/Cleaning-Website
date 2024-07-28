import { useState } from "react";
import phoneIcon from "/images/phone-icon.svg";
import mailIcon from "/images/mail-icon.svg";
import locationIcon from "/images/location-icon.svg";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const validate = () => {
        let formErrors = {};
        if (!formData.name) formErrors.name = "Name is required";
        if (!formData.email) {
            formErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            formErrors.email = "Email is invalid";
        }
        if (!formData.message) formErrors.message = "Message is required";
        return formErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formErrors = validate();
        if (Object.keys(formErrors).length === 0) {
            // Form is valid, handle form submission here
            console.log("Form submitted successfully", formData);
        } else {
            setErrors(formErrors);
        }
    };

    return (
        <div className="py-[56px] flex flex-col sm:flex-row justify-between gap-4 max-w-[1080px] mx-auto px-8">
            <div className="sm:w-[500px]">
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
            <div className="max-w-[400px]">
                <div className="mb-[30px]">
                    <p className="text-[12px] mb-[6px]">Contact info</p>
                    <h2 className="text-[27px] font-semibold mb-[12px]">Keep In Touch</h2>
                    <p className="text-[12px] text-[#666666]">We prioritize responding to your inquiries promptly to ensure you
                    receive the assistance you need in a timely manner</p>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="mb-[22px] flex flex-col gap-[22px]">
                        <div className="p-[14px] rounded-[3px] bg-white border border-[#F3F3F3] flex items-center">
                            <label className="mr-[9px] block" htmlFor="name">Name</label>
                            <input
                                className="outline-none"
                                name="name"
                                id="name"
                                type="text"
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>
                        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                        <div className="p-[14px] rounded-[3px] bg-white border border-[#F3F3F3] flex items-center">
                            <label className="mr-[9px] block" htmlFor="email">Email</label>
                            <input
                                className="outline-none"
                                name="email"
                                id="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                        <div className="p-[14px] rounded-[3px] bg-white border border-[#F3F3F3]">
                            <label className="mb-[9px] block" htmlFor="message">Message</label>
                            <textarea
                                className="outline-none w-full"
                                cols="30"
                                rows="1"
                                name="message"
                                id="message"
                                value={formData.message}
                                onChange={handleChange}
                            ></textarea>
                        </div>
                        {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                    </div>
                    <input className="py-[9px] px-[18px] rounded-[4.5px] bg-[#36B864] hover:bg-[#111D15] text-white" type="submit" value="Send" />
                </form>
            </div>
        </div>
    );
};

export default Contact;
