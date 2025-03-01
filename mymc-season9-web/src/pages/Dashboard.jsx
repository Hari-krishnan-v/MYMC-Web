import React, { useEffect, useState } from 'react';
import { Header } from "./section/Header.jsx";
import { Home } from "./section/Home.jsx";
import { MymcConnection } from "./section/Mymc_connection.jsx";
import { OurPartners } from "./section/OurPartners.jsx";
import { OurTeam } from "./section/Our_Team.jsx";
import { Contact } from "./section/Contact.jsx";
import { PremiumPacks } from "./section/Premium_Packs.jsx";
import download from "../assets/download.gif"
import mymcs9 from "../assets/MYMCS9.png"
import mymclogoanimation from "../assets/mymclogoanimation.gif"
import {Faq} from "./section/Faq.jsx";
import InfiniteScrollingLogosAnimation from "./section/InfiniteScrollingLogosAnimation.jsx";
import Footer from "./section/Footer.jsx";
import {News} from "./section/News.jsx";


export const Dashboard = () => {
    const [loading, setLoading] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setFadeOut(true); // Start fade-out animation
            setTimeout(() => setLoading(false), 600); // Remove loader after animation
        }, 3500); // Adjust time as needed
    }, []);

    if (loading) {
        return (
            <div className={`bg-black grid place-content-center transition-opacity duration-500 ${fadeOut ? "opacity-0" : "opacity-100"} fixed top-0 left-0 w-full h-full `}>
                <img src={download} alt={"minecraft loading"} className={''} />
                {/*<div className="flex justify-center items-end h-full w-full absolute bottom-0">*/}
                {/*    <img src={mymcs9} className={'h-1/4'} alt={"minecraft loading"}/>*/}
                {/*</div>*/}
            </div>
        );
    }

    return (
        <>
            <Header/>
            <main >
                <Home/>
                <MymcConnection/>
                <PremiumPacks />
                {/*<OurPartners />*/}
                <News/>
                <OurTeam />
                {/*<Faq/>*/}
                {/*<InfiniteScrollingLogosAnimation/>*/}
                <Contact />
            </main>
            <Footer/>
        </>
    );
};