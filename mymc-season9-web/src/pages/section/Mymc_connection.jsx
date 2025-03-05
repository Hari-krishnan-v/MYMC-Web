import React from 'react'
import MYMCS9 from '../../assets/MYMCS9.png'
import {motion} from "framer-motion";

export const MymcConnection = () => {
    return (
        <section id={'MymcConnection'} className={'relative overflow-hidden'}>
            <div className="gradient-overlay2 h-full"></div>

            <div className={'max-w-[1440px] h-[80vh] flex justify-center items-center overflow-hidden w-full m-auto'}>
                <div className={'z-20 flex sm:flex-wrap mymc-con'}>
                    <motion.div
                        initial={{opacity: 0, scale: .8}}
                        whileInView={{opacity: 1, scale: 1}}
                        exit={{opacity: 0, scale: -10}}
                        transition={{duration: .6, ease: "easeInOut"}}
                        className="z-20 container w-[711px] h-[710px] mymc-con-img-con md:hidden lg:hidden xl:block sm:hidden">
                        <img src={MYMCS9} alt="Mymc Connection"/>
                    </motion.div>
                    <motion.div
                        initial={{opacity: 0, scale: 0.9}}
                        whileInView={{opacity: 1, scale: 1}}
                        exit={{opacity: 0, scale: -10}}
                        transition={{duration: .5}}
                        className={'z-20 justify-items-start m-auto'}>
                        <div className={'border w-fit rounded-[30px] p-2'}>
                            <h2 className={'font-bold text-white px-4 text-[16px] sm:text-[20px] md:text-[24px]'}>Server Online</h2>
                        </div>
                        <h1 className={'text-[40px] sm:text-[50px] md:text-[60px] lg:text-[71px] font-bold head-font text-white'}>
                            <span className={'mine-logo text-[#0eff00]'}>MYMC</span> SERVER
                        </h1>
                        <p className={'text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] mb-4 w-full sm:w-[600px] text-left text-[#ADB7BE]'}>
                            Welcome to MYMC (Muttayi Minecraft) – Kerala’s top public Minecraft server where creativity meets adventure! Whether you're a builder, an explorer, or a fierce competitor, our server offers an exciting survival, minigames, and custom gameplay experience. Connect with fellow Malayali gamers, participate in thrilling events, and enjoy a lag-free, community-driven Minecraft world.
                        </p>
                        {/*<button className={'shiny-cta'}>JOIN NOW</button>*/}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}