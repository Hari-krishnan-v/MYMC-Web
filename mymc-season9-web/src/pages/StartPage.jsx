import React, {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {motion} from 'framer-motion';
import MYMC_S9_Resorcepack from "../assets/MYMC_LOGO_2025-01.png";
import {Helmet} from "react-helmet-async";

const StartPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/home');
        }, 2000);

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
        <div className={`bg-black flex justify-center items-center   fixed top-0 left-0 w-full h-full`}>
            <motion.img

                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 ,scale:0.8}}
                transition={{ duration: 1, ease: "easeInOut" }}
            src={MYMC_S9_Resorcepack} alt={"minecraft loading"} className={'h-[700px]'} />


        </div>
        </>
    );
};

export default StartPage;