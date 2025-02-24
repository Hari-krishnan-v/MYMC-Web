import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Badge from '../../assets/Badge.svg';
import vector from '../../assets/Vector.svg';
import { HoverCardArrow, HoverCardContent, HoverCardRoot, HoverCardTrigger } from '../../components/ui/hover-card.jsx';
import { Box, Strong } from '@chakra-ui/react';

export const StoreSection = () => {
    const [selected, SetSelected] = useState('All');
    return (
        <section className="min-h-dvh w-full flex flex-col gap-9 mt-32   items-center relative">
            <div className="gradient-overlay2 h-full"></div>
            <div className="z-20 w-11/12 sm:w-3/4 md:w-2/3 lg:w-1/2 h-16 py-2 flex gap-5 flex-wrap justify-center">
                <button
                    className={`px-6 animate-in transition-all duration-500 rounded-xl border ${selected === 'All' ? 'bg-gray-100 text-black scale-110' : 'hover:bg-gray-100 hover:text-black'}`}
                    onClick={() => SetSelected('All')}
                >
                    All
                </button>
                <button
                    className={`px-6 animate-in transition-all duration-500 rounded-xl border ${selected === 'ClaimBlocks' ? 'bg-gray-100 text-black scale-110' : 'hover:bg-gray-100 hover:text-black'}`}
                    onClick={() => SetSelected('ClaimBlocks')}
                >
                    Claim Blocks
                </button>
                <button
                    className={`px-6 animate-in transition-all duration-500 rounded-xl border ${selected === 'IngameCurrency' ? 'bg-gray-100 text-black scale-110' : 'hover:bg-gray-100 hover:text-black'}`}
                    onClick={() => SetSelected('IngameCurrency')}
                >
                    Ingame Currency
                </button>
                <button
                    className={`px-6 animate-in transition-all duration-500 rounded-xl border ${selected === 'Kits' ? 'bg-gray-100 text-black scale-110' : 'hover:bg-gray-100 hover:text-black'}`}
                    onClick={() => SetSelected('Kits')}
                >
                    Kits
                </button>
                <button
                    className={`px-6 animate-in transition-all duration-500 rounded-xl border ${selected === 'Homes' ? 'bg-gray-100 text-black scale-110' : 'hover:bg-gray-100 hover:text-black'}`}
                    onClick={() => SetSelected('Homes')}
                >
                    Homes
                </button>
            </div>

            {selected === 'ClaimBlocks' ? (
                <ClaimBlocks />
            ) : selected === 'IngameCurrency' ? (
                <IngameCurrency />
            ) : selected === 'Kits' ? (
                <Kits />
            ) : selected === 'Homes' ? (
                <Homes />
            ) : (
                <All />
            )}
        </section>
    );
};

const All = () => {
    return <ClaimBlocks />;
};

const ClaimBlocks = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="min-h-[500px] w-11/12 sm:w-3/4 md:w-full lg:w-full p-5 flex flex-wrap gap-9 justify-center z-20 "
        >
            <div className="min-w-[300px] h-[359px] bg-[#2A2A2A] text-left border border-[#ceff00] rounded-3xl p-6 flex flex-col justify-between">
                <div>
                    <h3 className="text-xl text-[#00BC32] font-bold Plan-head">ClaimBlocks</h3>
                    <p className="text-sm text-[#CFCFCF] Plan-head">The Flex</p>
                    <h2 className="my-3 font-medium text-3xl Plan-head">
                        ₹299 <span className="text-xl">/per month</span>
                    </h2>
                </div>
                <div className="space-y-2">
                    <p className="text-sm flex items-center Plan-head">
                        <span className="mr-1">
                            <img src={vector} />
                        </span>
                        Custom Kit ( Tools and Armor )
                    </p>
                    <p className="text-sm flex items-center Plan-head">
                        <span className="mr-1">
                            <img src={vector} />
                        </span>
                        Ingame Currency ( 30000 )
                    </p>
                    <p className="text-sm flex items-center Plan-head">
                        <span className="mr-1">
                            <img src={vector} />
                        </span>
                        Bonus Claim Blocks ( +10000 )
                    </p>
                </div>
                <button className="mt-4 bg-black text-white Plan-head px-4 py-2 shiny-cta">Purchase</button>
            </div>
            <div className="min-w-[300px] h-[359px] bg-[#2A2A2A] text-left border border-[#ceff00] rounded-3xl p-6 flex flex-col justify-between">
                <div>
                    <h3 className="text-xl text-[#00BC32] font-bold Plan-head">ClaimBlocks</h3>
                    <p className="text-sm text-[#CFCFCF] Plan-head">The Flex</p>
                    <h2 className="my-3 font-medium text-3xl Plan-head">
                        ₹299 <span className="text-xl">/per month</span>
                    </h2>
                </div>
                <div className="space-y-2">
                    <p className="text-sm flex items-center Plan-head">
                        <span className="mr-1">
                            <img src={vector} />
                        </span>
                        Custom Kit ( Tools and Armor )
                    </p>
                    <p className="text-sm flex items-center Plan-head">
                        <span className="mr-1">
                            <img src={vector} />
                        </span>
                        Ingame Currency ( 30000 )
                    </p>
                    <p className="text-sm flex items-center Plan-head">
                        <span className="mr-1">
                            <img src={vector} />
                        </span>
                        Bonus Claim Blocks ( +10000 )
                    </p>
                </div>
                <button className="mt-4 bg-black text-white Plan-head px-4 py-2 shiny-cta">Purchase</button>
            </div>
            <div className="min-w-[300px] h-[359px] bg-[#2A2A2A] text-left border border-[#ceff00] rounded-3xl p-6 flex flex-col justify-between">
                <div>
                    <h3 className="text-xl text-[#00BC32] font-bold Plan-head">ClaimBlocks</h3>
                    <p className="text-sm text-[#CFCFCF] Plan-head">The Flex</p>
                    <h2 className="my-3 font-medium text-3xl Plan-head">
                        ₹299 <span className="text-xl">/per month</span>
                    </h2>
                </div>
                <div className="space-y-2">
                    <p className="text-sm flex items-center Plan-head">
                        <span className="mr-1">
                            <img src={vector} />
                        </span>
                        Custom Kit ( Tools and Armor )
                    </p>
                    <p className="text-sm flex items-center Plan-head">
                        <span className="mr-1">
                            <img src={vector} />
                        </span>
                        Ingame Currency ( 30000 )
                    </p>
                    <p className="text-sm flex items-center Plan-head">
                        <span className="mr-1">
                            <img src={vector} />
                        </span>
                        Bonus Claim Blocks ( +10000 )
                    </p>
                </div>
                <button className="mt-4 bg-black text-white Plan-head px-4 py-2 shiny-cta">Purchase</button>
            </div>
            {/* Repeat the above div for other plans */}
        </motion.div>
    );
};

const IngameCurrency = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="min-h-[500px] w-11/12 sm:w-3/4 md:w-2/3 lg:w-1/2 p-5 flex flex-wrap gap-9"
        >
            {/* Similar structure as ClaimBlocks */}
        </motion.div>
    );
};

const Kits = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="min-h-[500px] w-11/12 sm:w-3/4 md:w-2/3 lg:w-1/2 p-5 flex flex-wrap gap-9"
        >
            {/* Similar structure as ClaimBlocks */}
        </motion.div>
    );
};

const Homes = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="min-h-[500px] w-11/12 sm:w-3/4 md:w-2/3 lg:w-1/2 p-5 flex flex-wrap gap-9"
        >
            {/* Similar structure as ClaimBlocks */}
        </motion.div>
    );
};