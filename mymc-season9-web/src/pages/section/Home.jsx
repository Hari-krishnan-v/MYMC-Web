import React from 'react'
import { Box } from "@radix-ui/themes";
import { motion } from "framer-motion";
export const Home = () => {
    return (
        <section className={'home bg-no-repeat'} id={'home'}>
                <div className={'max-w-[1440px]   w-full m-auto'}>
                    <div className={'flex '}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: .5 }} className={'justify-items-start sm:flex-wrap'}>
                            <div className={'border w-fit rounded-[30px] p-2'}>
                                <h2 className={'font-bold'}>Server Online</h2>
                            </div>
                            <h1 className={'text-[4.4375rem] font-bold head-font  text-white'}>MUTTAYI MINECRAFT</h1>
                            <p className={'text-[1rem] mb-4 font-medium w-[600px] text-left text-white'}>Muttayi Minecraft is a kerala based minecraft server with amazing community
                                and active admins </p>
                            <p className={'mb-2'}>Currently playing</p>
                            <div className={'flex '}>
                                <h2 className={'font-bold head-font text-[56px]'}> 32</h2>
                                <p className={'mx-2 mt-10 font-bold text-[16px] '} style={{color:'#0eff00'}}>/Players</p>
                            </div>
                            <button className={'shiny-cta'}>JOIN NOW</button>
                        </motion.div>

                    </div>
                </div>

        </section>
    )
}
