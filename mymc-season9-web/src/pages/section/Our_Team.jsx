import React from 'react';
import sr from '../../assets/sr.jpg';
import Sr from '../../assets/characters/Sr.png';
import MRGYT from '../../assets/characters/MRGYT.png';
import Rashnanna from '../../assets/characters/rash.jpg';
import ZYCO from '../../assets/characters/chhycoohunter.png';
import zycoChr from '../../assets/characters/zyco.png';
import sam from '../../assets/characters/sam.png';
import Akku from '../../assets/characters/akku.png';
import ARchr from '../../assets/characters/ARchr.png';
import ArNg from '../../assets/characters/ArNg.jpg';
import suposChr from '../../assets/characters/suposChr.png';
import novschr from '../../assets/characters/novachr.png';
import noba from '../../assets/characters/noba.jpg';


import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";

export const OurTeam = () => {
    const teamMembers = [
        {
            name: "MRGYT",
            role: "Founder",
            image: Rashnanna,
            CharacterImage: MRGYT,
            discord: "https://discord.gg/mymc",
            instagram: "",
            youtube: ""
        },
        {
            name: "SR Gamer",
            role: "Founder",
            image: sr,
            CharacterImage: Sr,
            discord: "https://discord.gg/mymc",
            instagram: "",
            youtube: ""
        },
        {
            name: "ZYCO",
            role: "Founder",
            image: ZYCO,
            CharacterImage: zycoChr,
            discord: "https://discord.gg/mymc",
            instagram: "",
            youtube: ""
        },
        {
            name: "supposedly_sam",
            role: "Admin",
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
                        className="font-bold text-white text-4xl sm:text-5xl md:text-6xl">
                        <span className={"mine-logo text-[#0eff00]"}>Our</span> Team
                    </motion.h2>
                    {/*<motion.p*/}
                    {/*    initial={{ opacity: 0, scale: 0.4 }}*/}
                    {/*    whileInView={{ opacity: 1, scale: 1 }}*/}
                    {/*    exit={{ opacity: 0, scale: -10 }}*/}
                    {/*    transition={{ duration: .6, ease: "easeInOut", delay: 0.1 }}*/}
                    {/*    className="text-white text-sm sm:text-base md:text-lg sm:mx-3">*/}
                    {/*    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod*/}
                    {/*</motion.p>*/}
                </div>
                <div className="flex flex-wrap justify-center gap-5 max-w-screen-2xl">
                    {teamMembers.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: .7 }}
                            transition={{ duration: .6, ease: "easeInOut" }}
                            className="card w-64 sm:w-48 md:w-56 lg:w-64">
                            <div className="card-inner">
                                <div className={`card-front relative ${item.role === 'Founder' ? 'border-[#FFBB00]' : ''}`}>
                                    <img src={item.CharacterImage} className="bg-cover object-cover w-full h-full] z-20 " style={{filter:'drop-shadow(5px 5px 15px rgba(0,0,0,0.5)'}} alt="partner1" />
                                    <motion.div
                                        initial={{ opacity: 0, y: 100 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 100 }}
                                        transition={{ duration: 1, ease: "easeInOut" }}
                                        className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30 flex justify-start items-end px-4 pb-2">
                                        <div className="text-white text-start mb-1">
                                            <h2 className="text-xl head-font font-bold">{item.name}<span className={'text-xl text-orange-400'}>[{item.role}]</span></h2>
                                        </div>
                                    </motion.div>
                                </div>
                                <div className="card-back relative">
                                    <img src={item.image} className="bg-cover object-cover w-full h-full" alt="partner1" />
                                    <div className="absolute top-0 left-0 w-full h-full flex gap-5 justify-center items-end p-8">
                                        <motion.div
                                            initial={{ scale: 1 }}
                                            whileHover={{ scale: 1.3 }}
                                            animate={{ scale: 1 }}
                                            transition={{ duration: .2, ease: "easeInOut" }}
                                            className="p-2 rounded-xl bg-white shadow-2xl">
                                            <a href={item.discord} className="text-blue-500 shadow-2xl text-2xl"><FaDiscord /></a>
                                        </motion.div>
                                        <motion.div
                                            initial={{ scale: 1 }}
                                            whileHover={{ scale: 1.3 }}
                                            animate={{ scale: 1 }}
                                            transition={{ duration: .2, ease: "easeInOut" }}
                                            className="p-2 rounded-xl bg-white">
                                            <a href={item.instagram} className="text-blue-400 shadow-2xl text-2xl"><FaInstagram /></a>
                                        </motion.div>
                                        <motion.div
                                            initial={{ scale: 1 }}
                                            whileHover={{ scale: 1.3 }}
                                            animate={{ scale: 1 }}
                                            transition={{ duration: .2, ease: "easeInOut" }}
                                            className="p-2 rounded-xl bg-white">
                                            <a href={item.youtube} className="text-red-500 shadow-2xl text-2xl"><FaYoutube /></a>
                                        </motion.div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};