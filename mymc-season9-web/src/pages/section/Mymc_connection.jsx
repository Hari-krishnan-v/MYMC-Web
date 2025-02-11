import React from 'react'
import MYMCS9 from '../../assets/MYMCS9.png'
import { motion } from "framer-motion";


export const MymcConnection = () => {
    return (
        <section  id={'MymcConnection'}>
            <div className={'max-w-[1440px]  w-full m-auto'}>
                <div className={'flex sm:flex-wrap'}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: -10 }}
                        transition={{ duration: .6 }}
                        className="container w-[711px] h-fit ">
                        <img src={MYMCS9} alt="Mymc Connection"/>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: -10 }}
                        transition={{ duration: .5 }}
                        className={'justify-items-start m-auto'}>
                        <div className={'border w-fit rounded-[30px] p-2'}>
                            <h2 className={'font-bold text-white px-4'}>Server Online</h2>
                        </div>
                        <h1 className={'text-[71px] font-bold head-font  text-white'}> <span className={'text-[#0eff00]'}>MYMC</span> SERVER</h1>
                        <p className={'text-[16px] mb-4  w-[600px] text-left text-[#ADB7BE]'}>Our collection of game server hosting options encompasses the most in-demand
                            platforms of today. Within our offerings, you'll discover an extensive array of
                            specialized tools and features tailored to each game, all of which we diligently keep up
                            to date in sync with game and mod updates. </p>
                        <button className={'shiny-cta'}>JOIN
                            NOW
                        </button>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}
