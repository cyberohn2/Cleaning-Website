import starIcon from "/images/star.svg"
import FBIcon from "/images/fb-icon.svg"
import XIcon from "/images/x-icon.svg"
import IGIcon from "/images/ig-icon.svg"
import LinkednIcon from "/images/linkedn-icon.svg"
import Team1 from "/images/team1.png"
import Team2 from "/images/team2.png"
import Team3 from "/images/team3.png"
import { useEffect, useState } from "react"

const teamDetails = [
    {
        name: "Erick Reynolds",
        desc: "He is an expert cleaning staff member who provides thorough cleaning with precision.",
        image: Team1,
        rating : 5
    },
    {
        name: "Erick Reynolds",
        desc: "He is an expert cleaning staff member who provides thorough cleaning with precision.",
        image: Team2,
        rating : 5
    },
    {
        name: "Erick Reynolds",
        desc: "He is an expert cleaning staff member who provides thorough cleaning with precision.",
        image: Team3,
        rating : 5
    }
]

const TeamItem = ({image,rating, desc, name}) =>{
    const socials = [FBIcon, XIcon, IGIcon, LinkednIcon]
    const [ratings, setRatings] = useState(null)
    useEffect(()=>{
        setRatings(prev =>{
            let newState = prev
            newState = [""]
            newState.length = rating
            console.log(newState);
            return newState;
        })
    }, [])

    return(
        <div className="pb-[15px] rounded-[15px] border">
            <img loading="lazy"src={image} alt="" className="mb-[18px] w-full" />
            <div className="w-[254.65px]">
                <div className="px-[15px] mb-[18px]">
                    <h3 className="text-[18px] font-semibold mb-[12px]">{name}</h3>
                    <div className="mb-[12px]">
                        {ratings && ratings.map((rating,index)=> <img loading="lazy"key={index} src={starIcon} alt="" />)}
                    </div>
                    <p className="text-[12px] text-[#666666]">{desc}</p>
                </div>
                <div className="flex items-center gap-[12px] px-[15px]">
                    {socials.map((social,index) => <img loading="lazy"className="cursor-pointer" key={index} src={social} alt="" />)}
                </div>
            </div>
        </div>
    )
}

const Team = () =>{
    return(
        <>
            <div className="text-[#111d15] pt-[113px] pb-[56px] max-w-[1080px] mx-auto px-8">
                <div className="flex items-center gap-2 justify-between">
                    <h2 className="sm:text-[33px] text-[16px] font-semibold max-w-[402px]">Effective Cleaning Requires an Expert Cleaning Team</h2>
                    <div className="max-w-[324.75px] text-right sm:text-left">
                        <p className="sm:text-[15px] text-[12px] font-semibold mb-[9px]">Expert Team</p>
                        <p className="text-[12px] text-[#666666]">We have professional expert cleaning staff ensuring top-notch cleanliness and hygiene for your space.</p>
                    </div>
                </div>
                <div className="divider border border-[83A790] my-[30px]"></div>
                <div className="grid sm:grid-cols-3 grid-cols-1 gap-[22px]">
                    {teamDetails.map((team, index) => <TeamItem name={team.name} image={team.image} desc={team.desc} key={index} rating={team.rating} /> )}
                </div>
            </div>
        </>
    )
}

export default Team;