import React, {useEffect, useState} from 'react';
import {motion} from "framer-motion";
import {FaCircle} from "react-icons/fa";
import Minecraft_illustration from "../../assets/Minecraft_illustration.png";
import Suresh from "../../assets/Sura.jpg";

;


export const Home = ({ playerCount, serverStatus }) => {
    const [typed, setTyped] = useState("");
    const [showSecret, setShowSecret] = useState(false);
    const secret = "mutta";

    if (playerCount === undefined) {
        playerCount = 0;
    }
    const startListening = () => {

        setTyped("");
        setShowSecret(false);
        document.addEventListener('keydown', keyListener);
    };

    const keyListener = (event) => {
        const key = event.key.toLowerCase();

        if (/^[a-z]$/.test(key)) {
            setTyped(prev => {
                const updated = (prev + key).slice(-secret.length);
                console.log(updated)
                if (updated === secret) {
                    setShowSecret(true);
                    document.removeEventListener('keydown', keyListener);
                }
                return updated;
            });
        }
    };

    useEffect(() => {
        return () => {
            document.removeEventListener('keydown', keyListener); // Cleanup
        };
    }, []);


    return (
        <section className={'home bg-no-repeat relative bg-gradient-to-b from-black to-[#231D2D]'} id={'home'}>
            <div className="gradient-overlay2 h-full"></div>
            <motion.img
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{opacity: 0.9, scale: 1}}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: .8 }}
                onClick={startListening}
                src={Minecraft_illustration} className={"absolute bottom-0 right-0 z-20  select-none"} alt=""/>

            {showSecret && (
                <motion.img
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 1}}
                    src={Suresh}
                    alt="Secret"
                    className="absolute top-10 left-10 w-60 rounded-xl z-50"
                />
            )}
            <div className={'max-w-[1440px] relative z-20 w-full m-auto'}>
                <div className={'flex'}>
                    <motion.div
                        initial={{opacity: 0, scale: 0.9}}
                        whileInView={{opacity: 1, scale: 1}}
                        exit={{opacity: 0, scale: 0.9}}
                        transition={{duration: .8}}
                        className={'justify-items-start lg:ml-20 xl:ml-0 md:ml-16 home-div space-y-3'}>
                        <div className={'border flex items-center gap-2 w-fit rounded-[20px] px-4 p-2'}>
                            <FaCircle fill={serverStatus ? "#0eff00" : "#ff0000"}/>
                            <h2 className={'font-bold text-sm sm:text-base md:text-lg lg:text-xl'}>{serverStatus ? "Online" : "Offline"}</h2>
                        </div>
                        <h1 className={'text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mine-logo text-green-700 '}>MUTTAYI
                            MINECRAFT</h1>
                        <p className={'text-sm sm:text-base md:text-lg lg:text-lg mb-4 font-medium w-full sm:w-[600px] text-left text-white opacity-65'}>
                            Muttayi Minecraft is a Kerala-based Minecraft server with an amazing community and active
                            admins.
                        </p>
                        <p className={'text-xs sm:text-sm md:text-base lg:text-lg mb-2'}>Currently playing</p>
                        <div className={'flex '}>
                            <h2 className={'font-bold head-font text-4xl sm:text-5xl md:text-6xl lg:text-7xl '}>{playerCount}</h2>
                            <p className={'mx-2 mt-10 font-bold text-xs sm:text-sm md:text-base lg:text-lg'}
                               style={{color: '#0eff00'}}>/Playing</p>
                        </div>
                        <button className={'shiny-cta text-xs sm:text-sm md:text-base lg:text-lg'}>
                            <a href="/play">JOIN NOW</a>
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};