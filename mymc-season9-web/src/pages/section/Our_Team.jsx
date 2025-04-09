import React from 'react';
import sr from '../../assets/sr.jpg';
import Sr from '../../assets/characters/Sr.png';
import MRGYT from '../../assets/characters/MRGYT.png';
import Rashnanna from '../../assets/characters/Rash.jpg';
import ZYCO from '../../assets/characters/chhycoohunter.jpg';
import zycoChr from '../../assets/characters/zyco.png';
import sam from '../../assets/characters/sam.png';
import Akku from '../../assets/characters/akku.webp';
import ARchr from '../../assets/characters/ARchr.png';
import ArNg from '../../assets/characters/ArNg.webp';
import suposChr from '../../assets/characters/suposChr.png';
import novschr from '../../assets/characters/novachr.png';
import noba from '../../assets/characters/noba.jpg';
import stark from '../../assets/characters/stark.jpg';


import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";

export const OurTeam = () => {
    const teamMembers = [
        {
            name: "MRGYT",
            role: "Owner",
            image: Rashnanna,
            CharacterImage: MRGYT,
            discord: "https://discord.gg/mymc",
            instagram: "",
            youtube: ""
        },
        {
            name: "SR Gamer",
            role: "Owner",
            image: sr,
            CharacterImage: Sr,
            discord: "https://discord.gg/mymc",
            instagram: "",
            youtube: ""
        },
        {
            name: "ZYCO",
            role: "Owner",
            image: ZYCO,
            CharacterImage: zycoChr,
            discord: "https://discord.gg/mymc",
            instagram: "",
            youtube: ""
        },
        {
            name: "supposedly_sam",
            role: "Lead Developer",
            image: sam,
            CharacterImage: suposChr,
            discord: "https://discord.gg/mymc",
            instagram: "",
            youtube: ""
        }, {
            name: "ARnG2",
            role: "Admin",
            image: ArNg,
            CharacterImage: ARchr,
            discord: "https://discord.gg/mymc",
            instagram: "",
            youtube: ""
        },
        {
            name: "Akku",
            role: "Admin",
            image: Akku,
            CharacterImage: zycoChr,
            discord: "https://discord.gg/mymc",
            instagram: "",
            youtube: ""
        },
        {
            name: "iiTN0V4",
            role: "Admin",
            image: noba,
            CharacterImage: novschr,
            discord: "https://discord.gg/mymc",
            instagram: "",
            youtube: ""
        },{
            name: "mrstark gaming",
            role: "Admin / web developer ",
            image: stark,
            CharacterImage: novschr,
            discord: "https://discord.gg/mymc",
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