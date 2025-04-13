import React, { useEffect } from 'react';
import { motion } from "framer-motion";
import Minecraft from "../../assets/Minecraft.mp4";
import mymcs9 from "../../assets/MYMCS9.png";
import { FaCircle } from "react-icons/fa";
import Minecraft_illustration from "../../assets/Minecraft_illustration.png";


export const Home = ({ playerCount, serverStatus }) => {
    useEffect(() => {

        const video = document.createElement('video');
        video.src = Minecraft;
        video.load();

        // Preload images
        const images = [mymcs9];
        images.forEach(src => {
            const img = new Image();
            img.src = src;
        });
    }, []);

    if (playerCount === undefined) {
        playerCount = 0;
    }

    return (
        <section className={'home bg-no-repeat relative bg-gradient-to-b from-black to-[#231D2D]'} id={'home'}>
            {/*<video preload="auto" autoPlay loop muted className={'video-background '}>*/}
            {/*    <source src={Minecraft} type="video/mp4" />*/}
            {/*</video>*/}
            {/*<div className={'gradient-overlay'}></div>*/}
            <div className="gradient-overlay2 h-full"></div>
            <motion.img
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: .8 }}
                src={Minecraft_illustration} className={"absolute bottom-0 right-0"} alt=""/>

            <div className={'max-w-[1440px] relative z-20 w-full m-auto'}>
                <div className={'flex'}>
                    <motion.div
                        initial={{opacity: 0, scale: 0.9}}
                        whileInView={{opacity: 1, scale: 1}}
                        exit={{opacity: 0, scale: 0.9}}
                        transition={{duration: .8}}
                        className={'justify-items-start lg:ml-20 xl:ml-0 md:ml-16 home-div space-y-3'}>
                        <div className={'border flex items-center gap-2 w-fit rounded-[20px] px-4 p-2'}>
                            <FaCircle fill={serverStatus ? "#0eff00" : "#ff0000"}/>
                            <h2 className={'font-bold text-sm sm:text-base md:text-lg lg:text-xl'}>{serverStatus ? "Online" : "Offline"}</h2>
                        </div>
                        <h1 className={'text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mine-logo text-green-700 '}>MUTTAYI
                            MINECRAFT</h1>
                        <p className={'text-sm sm:text-base md:text-lg lg:text-lg mb-4 font-medium w-full sm:w-[600px] text-left text-white opacity-65'}>
                            Muttayi Minecraft is a Kerala-based Minecraft server with an amazing community and active
                            admins.
                        </p>
                        <p className={'text-xs sm:text-sm md:text-base lg:text-lg mb-2'}>Currently playing</p>
                        <div className={'flex'}>
                            <h2 className={'font-bold head-font text-4xl sm:text-5xl md:text-6xl lg:text-7xl '}>{playerCount}</h2>
                            <p className={'mx-2 mt-10 font-bold text-xs sm:text-sm md:text-base lg:text-lg'}
                               style={{color: '#0eff00'}}>/Playing</p>
                        </div>
                        <button className={'shiny-cta text-xs sm:text-sm md:text-base lg:text-lg'}>
                            <a href="/play">JOIN NOW</a>
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};