import React from 'react';
import { FaServer, FaShieldAlt, FaCogs, FaUsers } from "react-icons/fa";
import { motion } from "framer-motion";

export const ServerFeatures = () => {
    const features = [
        {
            icon: <FaServer className="text-4xl text-green-500" />,
            title: "High Performance",
            description: "Our servers are optimized for low latency and high performance."
        },
        {
            icon: <FaShieldAlt className="text-4xl text-blue-500" />,
            title: "Secure Environment",
            description: "We ensure a safe and secure gaming experience for all players."
        },
        {
            icon: <FaCogs className="text-4xl text-yellow-500" />,
            title: "Custom Features",
            description: "Enjoy unique custom features tailored for an enhanced experience."
        },
        {
            icon: <FaUsers className="text-4xl text-purple-500" />,
            title: "Community Focused",
            description: "Join a vibrant and friendly community of players."
        },
    ];

    return (
        <section
            className="server-features min-h-screen flex flex-col items-center justify-center bg-[#1A1A1A] text-white py-10 relative">
            <div className="gradient-overlay2 h-full"></div>

            <motion.h2
                initial={{opacity: 0, scale: 0.8}}
                whileInView={{opacity: 1, scale: 1}}
                transition={{duration: 0.6, ease: "easeInOut"}}
                className="text-5xl font-bold mb-10 z-20"
            >
                Server Features
            </motion.h2>
            <div className="flex flex-wrap justify-center gap-10 max-w-7xl z-20">
                {features.map((feature, index) => (
                    <motion.div
                        key={index}
                        initial={{opacity: 0, scale: 0.8}}
                        whileInView={{opacity: 1, scale: 1}}
                        transition={{duration: 0.5, ease: "easeInOut"}}
                        className="bg-[#2A2A2A] p-6 rounded-lg shadow-lg w-[300px] text-center"
                    >
                        <div className="mb-4">{feature.icon}</div>
                        <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
                        <p className="text-sm text-gray-300">{feature.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};