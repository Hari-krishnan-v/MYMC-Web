import React from 'react'
import {Header} from "./section/Header.jsx";
import {Helmet} from "react-helmet-async";

import Footer from "./section/Footer.jsx";
import {NewsAnnouncementSection} from "./section/News&announcement_Section/News_AnnouncementSection.jsx";

const NewsAnnouncement = () => {
    return (
        <>
            <Helmet>
                <title>Muttayi Minecraft Store - Buy Premium Packs</title>
                <meta name="description"
                      content="Support the Muttayi Minecraft server and upgrade your gameplay! Buy premium packs, skins, and more."/>
                <meta name="keywords"
                      content="Minecraft store, Minecraft premium packs, Muttayi Minecraft, Minecraft skins, Minecraft donation"/>
                <meta name="author" content="Muttayi Minecraft Team"/>
                <meta property="og:title" content="Muttayi Minecraft Store"/>
                <meta property="og:description"
                      content="Buy exclusive packs and support Kerala’s top Minecraft server."/>
            </Helmet>
            <Header/>
            <main>
                <NewsAnnouncementSection/>
            </main>
            <Footer/>

        </>
    )
}
export default NewsAnnouncement
