import React from 'react';
import { motion } from "framer-motion";
import Minecraft from "../../assets/Minecraft.mp4";
import mymcs9 from "../../assets/MYMCS9.png";
import { FaCircle } from "react-icons/fa";

export const Home = ({ playerCount, serverStatus }) => {
    return (
        <section className={'home bg-no-repeat relative'} id={'home'}>
            <video autoPlay loop muted className={'video-background '}>
                <source src={Minecraft} type="video/mp4" />
            </video>
            <div className={'gradient-overlay'}></div>

            {/*<div className={'fixed right-0 bottom-0 h-[200px] w-[200px] opacity-35 z-50 sm:hidden md:block'}>*/}
            {/*    <a href="#home">*/}
            {/*        <img src={mymcs9} alt="MYMCS9" />*/}
            {/*    </a>*/}
            {/*</div>*/}
            <div className={'max-w-[1440px] relative z-20 w-full m-auto'}>
                <div className={'flex'}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: .5 }} className={'justify-items-start home-div'}>
                        <div className={'border flex items-center gap-2 w-fit rounded-[20px] px-4 p-2'}>
                            <FaCircle fill={serverStatus ? "#0eff00" : "#ff0000"} />
                            <h2 className={'font-bold text-sm sm:text-base md:text-lg lg:text-xl'}>{serverStatus ? "Online" : "Offline"}</h2>
                        </div>
                        <h1 className={'text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mine-logo text-white '}>MUTTAYI MINECRAFT</h1>
                        <p className={'text-sm sm:text-base md:text-lg lg:text-xl mb-4 font-medium w-full sm:w-[600px] text-left text-white'}>
                            Muttayi Minecraft is a Kerala-based Minecraft server with an amazing community and active admins.
                        </p>
                        <p className={'text-xs sm:text-sm md:text-base lg:text-lg mb-2'}>Currently playing</p>
                        <div className={'flex'}>
                            <h2 className={'font-bold head-font text-4xl sm:text-5xl md:text-6xl lg:text-7xl'}>{playerCount}</h2>
                            <p className={'mx-2 mt-10 font-bold text-xs sm:text-sm md:text-base lg:text-lg'} style={{ color: '#0eff00' }}>/Playing</p>
                        </div>
                        <button className={'shiny-cta text-xs sm:text-sm md:text-base lg:text-lg'}>JOIN NOW</button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};