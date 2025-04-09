import React from 'react'
import {Header} from "./section/Header.jsx";
import Footer from "./section/Footer.jsx";
import {PlayMiniGames} from "./section/PlaySections/Play_miniGames.jsx";

export const Play = () => {
    return (
        <>
            <Header/>
            <main>
<PlayMiniGames/>
            </main>
            <Footer/>
        </>
    )
}
