import React from 'react';
import { motion } from 'framer-motion';
import mymcs9 from '../../assets/MYMCS9.png';

export const News = () => {
    const newsItems = [
        { title: " 9 ", description: "Description for news 1", image: mymcs9 },
        { title: " 8", description: "Description for news 2", image: mymcs9 },
        { title: " 7", description: "Description for news 3", image: mymcs9 },
        { title: " 6", description: "Description for news 4", image: mymcs9 },
        { title: " 5", description: "Description for news 5", image: mymcs9 }
    ];

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.2,
                duration: 0.6,
                ease: 'easeInOut'
            }
        })
    };

    return (
        <section id={'News'} className={'relative overflow-hidden w-full flex justify-center py-20'}>
            <div className="gradient-overlay2 h-full"></div>
            <div className="flex flex-col items-center w-full z-20">
                <h2 className="text-4xl font-bold text-center text-white mb-8"><span className={'text-[#ff9800] mine-logo'}>Season</span>  Highlights
                </h2>
                <div
                    className={'flex  md:justify-start xl:justify-center items-center overflow-x-auto hide-scrollbar space-x-4 w-full'}>
                    {newsItems.map((item, index) => (
                        <motion.div
                            key={index}
                            custom={index}
                            initial="hidden"
                            whileInView="visible"
                            whileHover={{ scale: 1.05 }}
                            variants={cardVariants}
                            className="p-4 z-20 flex-shrink-0"
                        >
                            <div className="bg-[#1F1F1F] w-[283px] px-2 py-2 rounded-lg shadow-lg flex flex-col">
                                <h3 className="text-2xl font-bold mb-2 mine-logo text-[#FFBB00]">SEASON<span> {item.title}</span></h3>
                                <hr />
                                <div className={'flex py-5'}>
                                    <p className={'text-white text-start'}>{item.description}</p>
                                    <img src={item.image} className={'h-[143px]'} alt=""/>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};