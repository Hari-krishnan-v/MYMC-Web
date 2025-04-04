import React, {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {motion} from 'framer-motion';
import MYMC_S9_Resorcepack from "../assets/MYMC_S9_Resorcepack.png";
import {Helmet} from "react-helmet-async";

const StartPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/home');
        }, 4000); // Adjust time as needed (1s for fadeIn + 3s for fadeOut)

        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <>
            <Helmet>
                <title>Loading... Muttayi Minecraft</title>
                <meta name="description"
                      content="Loading Muttayi Minecraft server. Get ready to experience Kerala’s best Minecraft world!"/>
                <meta name="robots" content="noindex"/>
            </Helmet>
        <div className={`bg-black flex justify-center items-center fixed top-0 left-0 w-full h-full`}>
            <motion.div
                className="relative h-1/3"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 ,scale:0.8}}
                transition={{ duration: 2, ease: "easeInOut" }}
            >
                <img src={MYMC_S9_Resorcepack} alt={"minecraft loading"} className={'h-full'} />

            </motion.div>
        </div>
        </>
    );
};

export default StartPage;