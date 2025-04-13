import React from 'react';
import { motion } from 'framer-motion';

export const DevUpdates = () => {
    const updates = [
        {
            title: "New Anti-Cheat System Deployed",
            description: "We've implemented a new anti-cheat system to ensure fair gameplay across all servers.",
        },
        {
            title: "Season 9 Launch",
            description: "Season 9 introduces new game modes, updated maps, and exclusive rewards.",
        },
        {
            title: "UI Improvements",
            description: "Player profile and inventory pages have received visual and usability upgrades.",
        },
        {
            title: "Marketplace Upgrades",
            description: "The in-game store now supports redeem codes and improved transaction history.",
        },
        {
            title: "Server Optimizations",
            description: "Backend upgrades have reduced latency and improved stability during peak hours.",
        },
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
        <section id="DevUpdates" className="relative overflow-hidden w-full flex justify-center py-20 bg-black">
            <div className="gradient-overlay2 h-full absolute w-full z-0"></div>
            <div className="flex flex-col items-center w-full z-20">
                <h2 className="text-4xl font-bold text-center text-white mb-10">
                    <span className="text-[#ff9800] ">Dev</span> Updates
                </h2>
                <div className="flex hide-scrollbar space-x-6 px-4 w-full md:justify-start xl:justify-center">
                    {updates.map((update, index) => (
                        <motion.div
                            key={index}
                            custom={index}
                            initial="hidden"
                            whileInView="visible"
                            whileHover={{ scale: 1.05 }}
                            variants={cardVariants}
                            className="p-6 flex-shrink-0 w-[300px] rounded-xl bg-[#1F1F1F]/20 shadow-xl"
                        >
                            <h3 className="text-xl font-semibold text-[#FFBB00] mb-2">{update.title}</h3>
                            <p className="text-white/80 text-sm">{update.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
