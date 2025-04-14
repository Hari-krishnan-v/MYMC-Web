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
import {DevUpdates} from "./section/DevUpdates.jsx";
import {NumberOfPlayers} from "../Authstore/AuthStore.js";
import Cookies from "js-cookie";
import { Helmet } from 'react-helmet-async';
import {ServerFeatures} from "./section/ServerFeatures.jsx";


export const Dashboard = () => {

    const [playerCount, setPlayerCount] = useState(0);
    const [serverStatus, setServerStatus] = useState('Offline');


    useEffect(() => {
        const fetchPlayerCount = async () => {
            const count = await NumberOfPlayers();
            setPlayerCount(count.players);
            setServerStatus(count.online);
        };
        fetchPlayerCount();
        const intervalId = setInterval(fetchPlayerCount, 10000);
        return () => clearInterval(intervalId);
    }, []);


    return (
        <>
            <Helmet>
                <title>Muttayi Minecraft - Kerala's Top Minecraft Server</title>
                <meta name="description"
                      content="Join Muttayi Minecraft, Kerala's best Minecraft SMP server. Play with friends, explore custom packs, and get premium items!"/>
                <meta name="keywords"
                      content="Muttayi Minecraft, Kerala Minecraft server, Minecraft SMP India, Minecraft TLauncher server, Minecraft survival multiplayer"/>
                <meta name="author" content="Muttayi Minecraft Team"/>
                <meta property="og:title" content="Muttayi Minecraft Server"/>
                <meta property="og:description"
                      content="Play on Kerala’s most popular Minecraft server with custom SMP and premium packs."/>
                <meta property="og:image" content="https://mymc-web.vercel.app/assets/MYMC_S9_Resorcepack-D7zjRM5F.png"/>
                <meta property="og:url" content="https://mymc-web.vercel.app/"/>

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "VideoGame",
                        "name": "Muttayi Minecraft",
                        "url": "https://mymc-web.vercel.app/",
                        "image": "https://mymc-web.vercel.app/assets/MYMC_S9_Resorcepack-D7zjRM5F.png",
                        "genre": ["Survival", "Multiplayer", "Minecraft SMP"],
                        "author": {
                            "@type": "Organization",
                            "name": "Muttayi Team"
                        },
                        "operatingSystem": "Cross-platform",
                        "applicationCategory": "Game"
                    })}
                </script>
            </Helmet>
            <Header/>
            <main>
                <Home playerCount={playerCount} serverStatus={serverStatus}/>
                <MymcConnection/>
                <ServerFeatures/>
                <PremiumPacks />
                {/*<OurPartners />*/}
                <DevUpdates/>
                <OurTeam />
                {/*<Faq/>*/}
                {/*<InfiniteScrollingLogosAnimation/>*/}
                <Contact />
            </main>
            <Footer playerCount={playerCount}/>
        </>
    );
};