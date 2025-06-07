import blogImage1 from "/images/blog-img1.png"
import blogImage2 from "/images/blog-img2.png"
import blogImage3 from "/images/blog-img3.png"

const blogDetails = [
    {
        image: blogImage1,
        name: "JOHN HELTON   JAN 6, 2025",
        title: "Eco-Friendly Cleaning: How We Keep Your Home Green",
        desc: "Learn about our commitment to eco-friendly practices. We share the eco-conscious products..."
    },
    {
        image: blogImage2,
        name: "JOHN HELTON   JAN 6, 2025",
        title: "How to Maintain a Clean Home Between Professional Visits",
        desc: "Get practical advice on maintaining cleanliness between our scheduled visits. These easy-to-follow tips..."
    },
    {
        image: blogImage3,
        name: "JOHN HELTON   JAN 6, 2025",
        title: "The Benefits of Regular Professional Cleaning",
        desc: "Understand the numerous advantages of scheduling regular professional cleanings. From improving indoor air..."
    }
]

const BlogItem = ({image, name, title, desc}) =>{
    return(
        <div className="rounded-[22.5px] border border-[#83A790] text-center">
            <img loading="lazy"className="mb-[27px] rounded-t-[22.5px] w-full" src={image} alt="" />
            <div className="flex flex-col px-[15px] pb-[15px]">
                <p className="mb-[9px] text-[10.5px] text-[#666666] ">{name}</p>
                <h3 className="mb-[12px] font-bold text-[15px]">{title}</h3>
                <p className="text-[12px] font-light text-[#666666] mb-[18px]">{desc}</p>
                <button className=" px-[30px] py-[15px] bg-[var(--pryClr)] hover:bg-[#111D15] text-white rounded-[11.25px]">
                    Read More
                </button>
            </div>
        </div>
    )
}

const Blog = () =>{
    return(
        <>
            <div id="blog" className="text-[#111d15] pt-[113px] pb-[56px] max-w-[1080px] mx-auto px-8">
                <div className="flex items-center gap-2 justify-between">
                    <h2 className="sm:text-[33px] text-[16px] font-semibold max-w-[402px]">Stay Updated with Our Tips & Service News!</h2>
                    <div className="max-w-[324.75px] text-right sm:text-left">
                        <p className="sm:text-[15px] text-[12px] font-semibold mb-[9px]">Our Blog</p>
                        <p className="text-[12px] text-[#666666]">Stay informed with our latest cleaning tips, service updates, expert advice on maintaining an immaculate home.</p>
                    </div>
                </div>
                <div className="divider border border-[83A790] my-[30px]"></div>
                <div className="grid sm:grid-cols-3 grid-cols-1 gap-[22px]">
                    {blogDetails.map((blog, index) => <BlogItem name={blog.name} image={blog.image} desc={blog.desc} key={index} title={blog.title} /> )}
                </div>
            </div>
        </>
    )
}

export default Blog;