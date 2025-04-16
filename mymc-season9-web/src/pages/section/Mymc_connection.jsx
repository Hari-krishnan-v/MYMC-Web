import React from 'react';
import MYMCS9 from '../../assets/MYMC_LOGO_2025-01.png';
import { motion } from 'framer-motion';

export const MymcConnection = () => {
    return (
        <section id="MymcConnection" className="relative overflow-hidden  px-4 sm:px-8">
            <div className="gradient-overlay2 h-full"></div>

            <div className="max-w-[1440px] h-auto sm:h-[80vh] flex flex-col sm:flex-row justify-center items-center overflow-hidden w-full m-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.6, ease: 'easeInOut' }}
                    className="z-20 w-full sm:w-[50%] flex justify-center items-center mb-6 sm:mb-0"
                >
                    <img
                        src={MYMCS9}
                        className="h-[300px] sm:h-[400px] lg:h-[510px] hidden sm:block"
                        alt="Mymc Connection"
                    />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5 }}
                    className="z-20 w-full sm:w-[50%] text-center sm:text-left"
                >
                    <div className="border w-fit rounded-[30px] p-2 mx-auto sm:mx-0">
                        <h2 className="font-bold text-white px-4 text-[16px] sm:text-[20px] md:text-[24px]">
                            Server Online
                        </h2>
                    </div>
                    <h1 className="text-[30px] sm:text-[40px] md:text-[50px] lg:text-[60px] font-bold head-font text-white mt-4">
                        <span className="mine-logo text-[#0eff00]">MYMC</span> SERVER
                    </h1>
                    <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] mt-4 w-full sm:w-[90%] md:w-[600px] mx-auto sm:mx-0 text-[#ADB7BE]">
                        Welcome to MYMC (Muttayi Minecraft) – Kerala’s top public Minecraft server where creativity
                        meets adventure! Whether you're a builder, an explorer, or a fierce competitor, our server
                        offers an exciting survival, minigames, and custom gameplay experience. Connect with fellow
                        Malayali gamers, participate in thrilling events, and enjoy a lag-free, community-driven
                        Minecraft world.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};