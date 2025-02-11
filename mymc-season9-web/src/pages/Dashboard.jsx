import React from 'react';
import {Header} from "./section/Header.jsx";
import {Home} from "./section/Home.jsx";
import {MymcConnection} from "./section/Mymc_connection.jsx";
import {OurPartners} from "./section/OurPartners.jsx";
import {OurTeam} from "./section/Our_Team.jsx";
import {Contact} from "./section/Contact.jsx";
import {PremiumPacks} from "./section/Premium_Packs.jsx";
export const Dashboard = () => {

    return (
      <>

          <main>
              <Home/>
              <MymcConnection/>
              <PremiumPacks/>
              <OurPartners/>
              <OurTeam/>
              <Contact/>
          </main>
      </>
    );
}
