import React, {useEffect, useState} from 'react'
import {Header} from "./section/Header.jsx";
import {motion} from "framer-motion";
import download from "../assets/download.gif";
import {StoreSection} from "./section/StoreSection.jsx";
import Footer from "./section/Footer.jsx";
import Cookies from "js-cookie";
import {Helmet} from "react-helmet-async";

export const Store = () => {
    const username = Cookies.get("username");

    // const [loading, setLoading] = useState(true);
    // const [fadeOut, setFadeOut] = useState(false);
    //
    // useEffect(() => {
    //     setTimeout(() => {
    //         setFadeOut(true); // Start fade-out animation
    //         setTimeout(() => setLoading(false), 600); // Remove loader after animation
    //     }, 3500); // Adjust time as needed
    // }, []);
    //
    //
    // if (loading) {
    //     return (
    //         <div className={`grid place-content-center transition-opacity duration-500 ${fadeOut ? "opacity-0" : "opacity-100"} fixed top-0 left-0 w-full h-full bg-[#2A2A2A]`}>
    //             {/*<BarLoader />*/}
    //             <img src={download} alt={"minecraft loading"}/>
    //         </div>
    //     );
    // }
    return (
        <>
            <Helmet>
                <title>Muttayi Minecraft Store - Buy Premium Packs</title>
                <meta name="description" content="Support the Muttayi Minecraft server and upgrade your gameplay! Buy premium packs, skins, and more." />
                <meta name="keywords" content="Minecraft store, Minecraft premium packs, Muttayi Minecraft, Minecraft skins, Minecraft donation" />
                <meta name="author" content="Muttayi Minecraft Team" />
                <meta property="og:title" content="Muttayi Minecraft Store" />
                <meta property="og:description" content="Buy exclusive packs and support Kerala’s top Minecraft server." />
            </Helmet>
        <Header username={username}/>
            <main>
                <StoreSection/>
            </main>
            <Footer/>
        </>
    )
}
