import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import Minecraft from "../../assets/Minecraft.mp4";
import mymcs9 from "../../assets/MYMCS9.png";
import { FaCircle } from "react-icons/fa";
import { NumberOfPlayers } from "../../Authstore/AuthStore.js";

export const Home = ({playerCount,serverStatus}) => {




    return (
        <section className={'home bg-no-repeat relative'} id={'home'}>
            <video autoPlay loop muted className={'video-background '}>
                <source src={Minecraft} type="video/mp4"/>
            </video>
            <div className={'gradient-overlay'}></div>
            <div className={'fixed right-0 bottom-0 h-[200px] w-[200px] opacity-35 z-20'}>
                <a href="#home">
                    <img src={mymcs9} alt="MYMCS9"/>
                </a>
            </div>
            <div className={'max-w-[1440px] relative z-20 w-full m-auto'}>
                <div className={'flex'}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: .5 }} className={'justify-items-start home-div'}>
                        <div className={'border flex items-center gap-2 w-fit rounded-[30px] p-2'}>
                            <FaCircle fill={serverStatus ? "#0eff00" : "#ff0000"} />
                            <h2 className={'font-bold'}>{serverStatus ? "Online" : "Offline"}</h2>
                        </div>
                        <h1 className={'text-[4.4375rem] font-bold mine-logo text-white '}>MUTTAYI MINECRAFT</h1>
                        <p className={'text-[1rem] mb-4 font-medium w-[600px] text-left text-white'}>
                            Muttayi Minecraft is a Kerala-based Minecraft server with an amazing community and active admins.
                        </p>
                        <p className={'mb-2'}>Currently playing</p>
                        <div className={'flex'}>
                            <h2 className={'font-bold head-font text-[56px]'}>{playerCount}</h2>
                            <p className={'mx-2 mt-10 font-bold text-[16px]'} style={{ color: '#0eff00' }}>/Playing</p>
                        </div>
                        <button className={'shiny-cta'}>JOIN NOW</button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};