import React from 'react';
import sr from '../../assets/sr.jpg';
import Rashnanna from '../../assets/OutTeamMembers/Rash.jpg';
import ZYCO from '../../assets/OutTeamMembers/chhycoohunter.jpg';
import sam from '../../assets/OutTeamMembers/sam.png';
import Akku from '../../assets/OutTeamMembers/akku.webp';
import ArNg from '../../assets/OutTeamMembers/ArNg.webp';
import noba from '../../assets/OutTeamMembers/noba.jpg';
import stark from '../../assets/OutTeamMembers/stark.jpg';


import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";

export const OurTeam = () => {
    const teamMembers = [
        {
            name: "MRGYT",
            role: "Owner",
            image: Rashnanna,
            discord: "https://discord.gg/JTVBjYUD",
            instagram: "",
            youtube: ""
        },
        {
            name: "SR Gamer",
            role: "Owner",
            image: sr,
            discord: "https://discord.gg/dUKzwm2e",
            instagram: "",
            youtube: ""
        },
        {
            name: "ZYCO",
            role: "Owner",
            image: ZYCO,
            discord: "https://discord.gg/mymc",
            instagram: "",
            youtube: ""
        },
        {
            name: "supposedly_sam",
            role: "Lead Developer",
            image: sam,
            discord: "https://discord.gg/mymc",
            instagram: "",
            youtube: ""
        }, {
            name: "ARnG2",
            role: "Admin",
            image: ArNg,
            discord: "https://discord.gg/mymc",
            instagram: "",
            youtube: ""
        },
        {
            name: "Akku",
            role: "Admin",
            image: Akku,
            discord: "https://discord.gg/mymc",
            instagram: "",
            youtube: ""
        },
        {
            name: "iiTN0V4",
            role: "Admin",
            image: noba,
            discord: "https://discord.gg/mymc",
            instagram: "",
            youtube: ""
        },{
            name: "mrstark gaming",
            role: "Admin / web developer ",
            image: stark,
            discord: "https://discord.gg/UXzJTxFB",
            instagram: "",
            youtube: ""
        },
    ];

    return (
        <section className="our-team min-h-screen flex relative" id="OurTeam">
            <div className="gradient-overlay2 h-full"></div>
            <div className="z-20 w-full m-auto flex flex-col gap-10 justify-center items-center mx-auto pb-10">
                <div className="text-center flex flex-col gap-5">
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: .7 }}
                        transition={{ duration: .6, ease: "easeInOut" }}
                        className="font-semibold text-white text-5xl sm:text-5xl md:text-5xl"> Our Team
                    </motion.h2>

                </div>
                <div className="flex flex-wrap justify-center gap-5 max-w-6xl">
                    {teamMembers.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{opacity: 0, scale: 0.5}}
                            whileInView={{opacity: 1, scale: 1}}

                            exit={{opacity: 0, scale: .7}}
                            transition={{duration: .6, ease: "easeInOut"}}
                            className=" w-[288px] max-h-[367px] sm:w-48 md:w-56 lg:w-64 overflow-hidden rounded-xl relative">
                            <div className="absolute bg-gradient-to-b from-transparent via-transparent to-black w-full h-full"></div>
                            <div className="absolute bottom-0 p-6 flex flex-col gap-1">
                                <h2 className={"font-semibold text-xl"}>{item.name}</h2>
                                <h2 className={"text-[16px] text-[#D4D4D4]"}>{item.role}</h2>
                            </div>
                            <motion.div
                                initial={{opacity: 0, scale: 1,translateX: 50}}
                                whileHover={{opacity: 1, scale: 1, translateX: 0}}
                                exit={{opacity: 0, scale: 1, translateX: 50}}
                                transition={{duration: .3, ease: "easeInOut"}}
                                className="absolute top-0 bottom-0 right-5 w-full h-full items-end justify-center flex flex-col gap-5">
                                <motion.div
                                    initial={{scale: 1}}
                                    whileHover={{scale: 1.3}}
                                    animate={{scale: 1}}
                                    transition={{duration: .2, ease: "easeInOut"}}
                                    className="p-2 rounded-full bg-white shadow-2xl">
                                    <a href={item.discord}
                                       className="text-black shadow-2xl text-2xl"><FaDiscord/></a>
                                </motion.div>
                                <motion.div
                                    initial={{scale: 1}}
                                    whileHover={{scale: 1.3}}
                                    animate={{scale: 1}}
                                    transition={{duration: .2, ease: "easeInOut"}}
                                    className="p-2 rounded-full bg-white">
                                    <a href={item.instagram}
                                       className="text-black shadow-2xl text-2xl"><FaInstagram/></a>
                                </motion.div>
                                <motion.div
                                    initial={{scale: 1}}
                                    whileHover={{scale: 1.3}}
                                    animate={{scale: 1}}
                                    transition={{duration: .2, ease: "easeInOut"}}
                                    className="p-2 rounded-full bg-white">
                                    <a href={item.youtube} className="text-black shadow-2xl text-2xl"><FaYoutube/></a>
                                </motion.div>

                            </motion.div>
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-full object-cover rounded-lg shadow-lg"
                            />


                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};