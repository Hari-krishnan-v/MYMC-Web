import React from 'react';
import sr from '../../assets/sr.jpg';
import {motion} from "framer-motion";


export const OurTeam = () => {
    return (
        <section className="our-team min-h-screen flex relative" id="OurTeam">
            <div className="gradient-overlay2 h-full"></div>

            <div className="z-20 w-full m-auto flex flex-col gap-10 justify-center items-center mx-auto pb-10">
                <div className="text-center">
                    <h2 className="font-bold text-white text-4xl sm:text-5xl md:text-6xl">Our Team</h2>
                    <p className="text-white text-sm sm:text-base md:text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                </div>
                <motion.div  initial={{opacity: 0, scale: 0.5}}
                             whileInView={{opacity: 1, scale: 1}}
                             exit={{opacity: 0, scale: -10}}
                             transition={{duration: .6 ,ease:"easeInOut"}} className="flex flex-wrap justify-center gap-5 max-w-screen-2xl">
                    <div

                        className="card w-40 sm:w-48 md:w-56 lg:w-64">
                        <div className="card-inner">
                            <div className="card-front">
                                <img src={sr} className="bg-cover object-cover w-full h-full" alt="partner1" />
                            </div>
                            <div className="card-back">
                                <p>Back Side</p>
                            </div>
                        </div>
                    </div>
                    <div className="card w-40 sm:w-48 md:w-56 lg:w-64">
                        <div className="card-inner">
                            <div className="card-front">
                                <img src={sr} className="bg-cover object-cover w-full h-full" alt="partner1" />
                            </div>
                            <div className="card-back">
                                <p>Back Side</p>
                            </div>
                        </div>
                    </div>
                    <div className="card w-40 sm:w-48 md:w-56 lg:w-64">
                        <div className="card-inner">
                            <div className="card-front">
                                <img src={sr} className="bg-cover object-cover w-full h-full" alt="partner1" />
                            </div>
                            <div className="card-back">
                                <p>Back Side</p>
                            </div>
                        </div>
                    </div>
                    <div className="card w-40 sm:w-48 md:w-56 lg:w-64">
                        <div className="card-inner">
                            <div className="card-front">
                                <img src={sr} className="bg-cover object-cover w-full h-full" alt="partner1" />
                            </div>
                            <div className="card-back">
                                <p>Back Side</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};