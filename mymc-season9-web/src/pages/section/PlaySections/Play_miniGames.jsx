import React from 'react';
import { motion, AnimatePresence } from "framer-motion";
import SpawnBg from "../../../assets/SpawnBg.png";
import vector from "../../../assets/Vector.svg";

export const PlayMiniGames = () => {
    const games = [
        {
            name: "Bed Wars",
            image: "https://wallpaperaccess.com/full/4583668.jpg",
            features: [
                "Team-based gameplay",
                "Resource collection",
                "Base building",
                "PvP combat",
                "Strategy and tactics",
                "Fun and competitive"
            ]
        },
        {
            name: "Sky Wars",
            image: "https://wallpapercave.com/wp/wp8579386.png",
            features: [
                "Sky islands",
                "PvP combat",
                "Resource gathering",
                "Strategy and tactics",
                "Solo or team play",
                "Fast-paced action"
            ]
        },
        {
            name: "Capture the Flag",
            image: "https://2.bp.blogspot.com/-VZcwBiuQZ0Y/Uhxp053n8xI/AAAAAAAAAGg/nQwgKW5mPcE/s1600/2013-08-27_01.44.19.png",
            features: [
                "Team-based gameplay",
                "Flag capturing",
                "Base defense",
                "Strategy and tactics",
                "Fast-paced action",
                "Fun and competitive"
            ]
        },
        {
            name: "Parkour",
            image: "https://picfiles.alphacoders.com/587/587079.png",
            features: [
                "Obstacle courses",
                "Jumping challenges",
                "Skill-based gameplay",
                "Solo or team play",
                "Fun and competitive"
            ]
        }
    ];

    const [currentGame, setGame] = React.useState(games[0]);

    return (
        <section className="min-h-screen w-full py-16 px-4 sm:px-8 flex flex-col items-center justify-center relative">
            <div className="w-3/4 space-y-5">
                <h2 className="text-[30px]  text-center mt-10 ">Our Minecraft Games</h2>
                <div className="flex w-full h-[80vh] gap-4">

                    {/* Left Game List */}
                    <div className="flex flex-col space-y-3 w-1/4 border p-3 pt-5">
                        {games.map((game, index) => (
                            <button
                                key={index}
                                onClick={() => setGame(game)}
                                className={`w-full h-16 border flex justify-center items-center text-xl font-semibold rounded-md hover:scale-105 duration-200 transition-all
                                    ${currentGame.name === game.name ? 'bg-[#ff9800] text-black' : 'bg-white text-[#2A2A2A]'}`}>
                                {game.name}
                            </button>
                        ))}
                    </div>

                    {/* Right Game Display */}
                    <div className="relative w-3/4 overflow-hidden border rounded-lg">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentGame.name}
                                initial={{opacity:0,  translateY: -300 }}
                                animate={{opacity:1,  translateY: 0 }}
                                exit={{ opacity:0, translateY:500 }}
                                transition={{ duration: 0.8, ease: "easeInOut" }}
                                className="relative w-full h-full p-8 space-y-5"
                            >
                                {/* Background Image */}
                                <img
                                    src={currentGame.image}
                                    className="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none"
                                    alt="Background"
                                />

                                {/* Foreground Content */}
                                <h2 className="text-3xl font-bold text-[#E5BD58]">{currentGame.name}</h2>
                                <img
                                    src={currentGame.image}
                                    className="rounded shadow-xl w-full max-w-xl"
                                    alt={`${currentGame.name} Preview`}
                                />
                                <ul className="space-y-3.5">
                                    {currentGame.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center gap-3 text-white text-lg">
                                            <img src={vector} className="w-5 h-5" alt="check" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};
