import React, {useEffect, useState} from 'react'
import {Header} from "./section/Header.jsx";
import {motion} from "framer-motion";
import download from "../assets/download.gif";
import {StoreSection} from "./section/StoreSection.jsx";
import Footer from "./section/Footer.jsx";

export const Store = () => {
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
        <Header/>
            <main>
                <StoreSection/>
            </main>
            <Footer/>
        </>
    )
}
