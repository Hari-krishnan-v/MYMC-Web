import React from 'react';
import cmxRigs from '../../assets/PartnersLOGO/cmxRigs.png';
import uh_logo from '../../assets/PartnersLOGO/uh_logo.png';

export const OurPartners = () => {
    return (
        <section
            className="py-20  flex justify-center items-center relative" id="OurPartners">
            <div className="gradient-overlay2 h-full"></div>
            <div className="z-20 space-y-8 max-w-[1200px] w-full m-auto text-center px-4">
                <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Our Partners</h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 ">
                    <div
                        className=" border border-gray-400 bg-black/30 rounded-xl p-3 flex items-center justify-center hover:scale-105 transition-transform duration-300">
                        <img src={cmxRigs} className="h-20 w-20 object-contain bg-blend-screen" alt="ExitLag"/>
                    </div>
                    <div
                        className=" border border-gray-400 bg-black/30 rounded-xl p-4 flex items-center justify-center hover:scale-105 transition-transform duration-300">
                        <img src={uh_logo} className="h-20 w-20 object-contain bg-blend-screen" alt="UH Logo"/>
                    </div>
                    <div
                        className=" border border-gray-400 bg-black/30 rounded-xl p-4 flex items-center justify-center hover:scale-105 transition-transform duration-300">
                        <img src={cmxRigs} className="h-20 w-20 object-contain" alt="ExitLag"/>
                    </div>
                    <div
                        className=" border
                        border-gray-400 bg-black/30 rounded-xl p-4 flex items-center justify-center hover:scale-105 transition-transform duration-300">
                        <img src={uh_logo} className="h-20 w-20 object-contain" alt="UH Logo"/>
                    </div>
                </div>
            </div>
        </section>
    );
};