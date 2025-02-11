import React, { useState } from 'react';
import vector from '../../assets/Vector.svg'
import Badge from '../../assets/Badge.svg'
import { Box,Strong,Link } from "@chakra-ui/react"
import { motion } from "framer-motion";
import {
    HoverCardArrow,
    HoverCardContent,
    HoverCardRoot,
    HoverCardTrigger,
} from "../../components/ui/hover-card.jsx";
import { Button, ButtonGroup } from "@chakra-ui/react"

export const PremiumPacks = () => {
    // State to track which button is selected
    const [isMonthly, setIsMonthly] = useState(true);

    // Function to handle the toggle
    const handleToggle = (selection) => {
        setIsMonthly(selection === 'monthly');
    };

    return (
        <section id={'PremiumPacks'} className={'min-h-screen bg-black flex justify-center items-center'}>
            <div className={'max-w-[1000px] w-full flex-col justify-center items-center   p-6'}>
                <div className={'flex-col w-full justify-center items-center mb-6'}>
                    <h2 className={'text-center font-bold text-white text-[56px] '}>Premium Packs</h2>
                    <p className={'text-center text-white'}>
                        Elevate your gameplay with our premium plans, designed to give you exclusive advantages and
                        access to enhanced assets on the server. Enjoy essential features with no hidden fees, all
                        tailored to maximize your Minecraft experience.
                    </p>
                </div>
                <div className="flex justify-center w-full">
                    <div className="toggle bg-black w-[240px] h-[42px] flex items-center justify-between border rounded-full p-1">
                        <button
                            onClick={() => handleToggle('monthly')}
                            className={`w-1/2 text-center py-1 rounded-full transition-all  ${
                                isMonthly ? 'bg-white text-black' : 'bg-black text-white'
                            }`}
                        >
                            Monthly
                        </button>
                        <button
                            onClick={() => handleToggle('seasonal')}
                            className={`w-1/2 text-center py-1 rounded-full transition-all ${
                                !isMonthly ? 'bg-white text-black' : 'bg-black text-white'
                            }`}
                        >
                            Seasonally
                        </button>
                    </div>
                </div>
                <p className={'text-center text-[14px]  text-[#3199FF] mt-4'}>-5% off on seasonally payments</p>


                {/* Content based on the active toggle */}
                <div className={'mt-6 text-center text-white'}>
                    {isMonthly ? (
                        <MonthlyPlan />
                    ) : (
                        <SeasonalPlan/>
                    )}
                </div>
            </div>
        </section>
    );
};

const MonthlyPlan = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className={'max-w-[950px] flex  justify-between  gap-4 items-center  plan '}>
            <div className="min-w-[300px] h-[459px]  bg-[#2A2A2A] text-left border border-[#ceff00] rounded-3xl p-6 flex flex-col justify-between">
                <div>
                    <h3 className="text-xl text-[#FFBB00] Plan-head font-bold">Gold</h3>
                    <p className="text-sm text-[#CFCFCF] Plan-head">Basic Plan</p>
                    <h2 className="my-3 Plan-head font-medium text-3xl">
                        ₹59 <span className="text-xl">/per month</span>
                    </h2>
                </div>

                <div className="space-y-2 ">
                    <p className={'text-sm flex Plan-head items-center '}><span className={'mr-1'}><img
                        src={vector}/> </span> INGAME
                        Role [
                        <HoverCardRoot>
                            <HoverCardTrigger>
                                <span style={{color:'#7EE772'}}>1 Month</span>]
                            </HoverCardTrigger>
                            <HoverCardContent maxWidth="340px" >
                                <HoverCardArrow />
                                <Box padding={'10px'}>
                                    <Strong>Chakra</Strong> is a Sanskrit word that means disk or wheel,
                                    referring to energy centers in the body
                                </Box>
                            </HoverCardContent>
                        </HoverCardRoot>
                    </p>
                    <p className={'text-sm flex Plan-head items-center '}><span className={'mr-1'}><img
                        src={vector}/> </span> MYMC Discord Role  [
                        <HoverCardRoot>
                        <HoverCardTrigger>
                            <span style={{color:'#7EE772'}}>1 Month</span>]
                        </HoverCardTrigger>
                        <HoverCardContent maxWidth="340px" >
                            <HoverCardArrow />
                            <Box padding={'10px'}>
                                <Strong>Chakra</Strong> is a Sanskrit word that means disk or wheel,
                                referring to energy centers in the body
                            </Box>
                        </HoverCardContent>
                    </HoverCardRoot> </p>
                    <p className={'text-sm flex Plan-head items-center '}><span className={'mr-1'}><img
                        src={vector}/> </span> Multiple Homes ( 3 Max )</p>
                    <p className={'text-sm flex Plan-head items-center '}><span className={'mr-1'}><img
                        src={vector}/> </span> Custom Kit ( Tools and Armor )</p>
                    <p className={'text-sm flex Plan-head items-center '}><span className={'mr-1'}><img
                        src={vector}/> </span> Ingame Currency ( 5000 )</p>
                    <p className={'text-sm flex Plan-head items-center '}><span className={'mr-1'}><img
                        src={vector}/> </span>Bonus Claim Blocks ( +1000 )</p>
                </div>
                <button className="mt-4 Plan-head bg-black text-white px-4 py-2 shiny-cta">
                    Purchase
                </button>
            </div>
            <div
                className="w-[308px] h-[496px] bg-[#FFBB00] flex flex-col justify-between items-center rounded-3xl p-2">
                <p className="text-[12px] text-center Plan-head text-black">RECOMMENDED</p>

                <div
                    className="w-[300px] h-[459px] bg-[#2A2A2A] text-left border border-[#ceff00] rounded-3xl p-6 flex flex-col justify-between">
                    <div>
                        <h3 className="text-xl text-[#1BF0FF] Plan-head font-bold">Diamond</h3>
                        <p className="text-sm text-[#CFCFCF] Plan-head">The Best One</p>
                        <h2 className="my-3 font-medium Plan-head text-3xl">
                            ₹199 <span className="text-xl">/per month</span>
                        </h2>
                    </div>

                    <div className="space-y-2">
                        <p className={'text-sm flex items-center Plan-head '}><span className={'mr-1'}><img
                            src={Badge}/> </span>/craft Command  [ <HoverCardRoot>
                            <HoverCardTrigger>
                                <span style={{color:'#7EE772'}}>1 Month</span>]
                            </HoverCardTrigger>
                            <HoverCardContent maxWidth="340px" >
                                <HoverCardArrow />
                                <Box padding={'10px'}>
                                    <Strong>Chakra</Strong> is a Sanskrit word that means disk or wheel,
                                    referring to energy centers in the body
                                </Box>
                            </HoverCardContent>
                        </HoverCardRoot> </p>
                        <p className={'text-sm flex items-center Plan-head'}><span className={'mr-1'}><img
                            src={vector}/> </span> INGAME
                            Role  [ <span style={{color:'#7EE772'}}>1 Month</span>] </p>
                        <p className={'text-sm flex items-center Plan-head'}><span className={'mr-1'}><img
                            src={vector}/> </span> MYMC Discord Role  [ <HoverCardRoot>
                            <HoverCardTrigger>
                                <span style={{color:'#7EE772'}}>1 Month</span>]
                            </HoverCardTrigger>
                            <HoverCardContent maxWidth="340px" >
                                <HoverCardArrow />
                                <Box padding={'10px'}>
                                    <Strong>Chakra</Strong> is a Sanskrit word that means disk or wheel,
                                    referring to energy centers in the body
                                </Box>
                            </HoverCardContent>
                        </HoverCardRoot> ] </p>
                        <p className={'text-sm flex items-center Plan-head'}><span className={'mr-1'}><img
                            src={vector}/> </span> Multiple Homes ( 4 Max )</p>
                        <p className={'text-sm flex items-center Plan-head'}><span className={'mr-1'}><img
                            src={vector}/> </span>Custom Kit ( Tools and Armor )</p>
                        <p className={'text-sm flex items-center Plan-head'}><span className={'mr-1'}><img
                            src={vector}/> </span>Ingame Currency ( 15000 )</p>
                        <p className={'text-sm flex items-center Plan-head'}><span className={'mr-1'}><img
                            src={vector}/> </span>Bonus Claim Blocks ( +3000 )</p>
                    </div>

                    <button className="mt-4 bg-black text-white Plan-head px-4 py-2 mb-3 shiny-cta">
                        Purchase
                    </button>
                </div>
            </div>

            <div
                className="min-w-[300px] h-[459px] bg-[#2A2A2A] text-left border border-[#ceff00] rounded-3xl p-6 flex flex-col justify-between">
                <div>
                    <h3 className="text-xl text-[#00BC32] font-bold Plan-head">Emerald</h3>
                    <p className="text-sm text-[#CFCFCF] Plan-head">The Flex</p>
                    <h2 className="my-3 font-medium text-3xl Plan-head">
                        ₹299 <span className="text-xl">/per month</span>
                    </h2>
                </div>

                <div className="space-y-2">
                    <p className={'text-sm flex items-center Plan-head'}><span className={'mr-1'}><img
                        src={Badge}/> </span> /anvil Command  [ <span style={{color:'#7EE772'}}>1 Month</span>] </p>
                    <p className={'text-sm flex items-center Plan-head'}><span className={'mr-1'}><img
                        src={vector}/> </span> /craft Command  [ <span style={{color:'#7EE772'}}>1 Month</span>] </p>
                    <p className={'text-sm flex items-center Plan-head'}><span className={'mr-1'}><img
                        src={vector}/> </span> INGAME
                        Role  [ <span style={{color:'#7EE772'}}>1 Month</span>] </p>
                    <p className={'text-sm flex items-center Plan-head'}><span className={'mr-1'}><img
                        src={vector}/> </span> MYMC Discord Role  [ <HoverCardRoot>
                        <HoverCardTrigger>
                            <span style={{color:'#7EE772'}}>1 Month</span>]
                        </HoverCardTrigger>
                        <HoverCardContent maxWidth="340px" >
                            <HoverCardArrow />
                            <Box padding={'10px'}>
                                <Strong>Chakra</Strong> is a Sanskrit word that means disk or wheel,
                                referring to energy centers in the body
                            </Box>
                        </HoverCardContent>
                    </HoverCardRoot> ] </p>
                    <p className={'text-sm flex items-center Plan-head'}><span className={'mr-1'}><img
                        src={vector}/> </span> Multiple Homes ( 5 Max )</p>
                    <p className={'text-sm flex items-center Plan-head'}><span className={'mr-1'}><img
                        src={vector}/> </span> Custom Kit ( Tools and Armor )</p>
                    <p className={'text-sm flex items-center Plan-head'}><span className={'mr-1'}><img
                        src={vector}/> </span> Ingame Currency ( 30000 )</p>
                    <p className={'text-sm flex items-center Plan-head'}><span className={'mr-1'}><img
                        src={vector}/> </span>Bonus Claim Blocks ( +10000 )</p>

                </div>

                <button className="mt-4 bg-black text-white Plan-head px-4 py-2 shiny-cta">
                    Purchase
                </button>
            </div>


        </motion.div>
    );
};

const SeasonalPlan = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className={'max-w-[950px] flex  justify-between  gap-4 items-center '}>
            <div
                className="min-w-[300px] h-[459px]  bg-[#2A2A2A] text-left border border-[#ceff00] rounded-3xl p-6 flex flex-col justify-between">
                <div>
                    <h3 className="text-xl text-[#FFBB00] Plan-head font-bold">Gold</h3>
                    <p className="text-sm text-[#CFCFCF] Plan-head">Basic Plan</p>
                    <div className="flex flex-col items-start my-1">
                        <p className="text-[10px] text-[#1574D2] Plan-head">-5% off</p>
                        <h2 className="Plan-head font-medium text-3xl">
                            ₹168 <span className="text-xl">/per Season</span>
                        </h2>
                    </div>
                </div>
                <div className="space-y-2 ">
                <p className={'text-sm flex Plan-head items-center '}><span className={'mr-1'}><img
                        src={vector}/> </span> INGAME
                        Role [ <HoverCardRoot>
                        <HoverCardTrigger>
                            <span style={{color:'#7EE772'}}>1 Month</span>]
                        </HoverCardTrigger>
                        <HoverCardContent maxWidth="340px" >
                            <HoverCardArrow />
                            <Box padding={'10px'}>
                                <Strong>Chakra</Strong> is a Sanskrit word that means disk or wheel,
                                referring to energy centers in the body
                            </Box>
                        </HoverCardContent>
                    </HoverCardRoot> ] </p>
                    <p className={'text-sm flex Plan-head items-center '}><span className={'mr-1'}><img
                        src={vector}/> </span> MYMC Discord Role [<HoverCardRoot>
                        <HoverCardTrigger>
                            <span style={{color:'#7EE772'}}>1 Month</span>]
                        </HoverCardTrigger>
                        <HoverCardContent maxWidth="340px" >
                            <HoverCardArrow />
                            <Box padding={'10px'}>
                                <Strong>Chakra</Strong> is a Sanskrit word that means disk or wheel,
                                referring to energy centers in the body
                            </Box>
                        </HoverCardContent>
                    </HoverCardRoot> ] </p>
                    <p className={'text-sm flex Plan-head items-center '}><span className={'mr-1'}><img
                        src={vector}/> </span> Multiple Homes ( 3 Max )</p>
                    <p className={'text-sm flex Plan-head items-center '}><span className={'mr-1'}><img
                        src={vector}/> </span> Custom Kit ( Tools and Armor )</p>
                    <p className={'text-sm flex Plan-head items-center '}><span className={'mr-1'}><img
                        src={vector}/> </span> Ingame Currency ( 5000 )</p>
                    <p className={'text-sm flex Plan-head items-center '}><span className={'mr-1'}><img
                        src={vector}/> </span>Bonus Claim Blocks ( +1000 )</p>
                </div>
                <button className="mt-4 Plan-head bg-black text-white px-4 py-2 rounded-full">
                    Purchase
                </button>
            </div>
            <div
                className="w-[308px] h-[496px] bg-[#FFBB00] flex flex-col justify-between items-center rounded-3xl p-2">
                <p className="text-[12px] text-center Plan-head text-black">RECOMMENDED</p>
                <div
                    className="w-[300px] h-[459px] bg-[#2A2A2A] text-left border border-[#ceff00] rounded-3xl p-6 flex flex-col justify-between">
                    <div>
                        <h3 className="text-xl text-[#1BF0FF] Plan-head font-bold">Diamond</h3>
                        <p className="text-sm text-[#CFCFCF] Plan-head">The Best One</p>
                        <div className="flex flex-col items-start my-1 mb-3">
                            <p className="text-[10px] text-[#1574D2] Plan-head">-5% off</p>
                            <h2 className="Plan-head font-medium text-3xl">
                                ₹567 <span className="text-xl">/per Season</span>
                            </h2>
                        </div>
                    </div>

                    <div className="space-y-2">
                    <p className={'text-sm flex items-center Plan-head '}><span className={'mr-1'}><img
                            src={Badge}/> </span>/craft Command [ <HoverCardRoot>
                        <HoverCardTrigger>
                            <span style={{color:'#7EE772'}}>1 Month</span>]
                        </HoverCardTrigger>
                        <HoverCardContent maxWidth="340px" >
                            <HoverCardArrow />
                            <Box padding={'10px'}>
                                <Strong>Chakra</Strong> is a Sanskrit word that means disk or wheel,
                                referring to energy centers in the body
                            </Box>
                        </HoverCardContent>
                    </HoverCardRoot> ] </p>
                        <p className={'text-sm flex items-center Plan-head'}><span className={'mr-1'}><img
                            src={vector}/> </span> INGAME
                            Role [ <span style={{color: '#7EE772'}}>1 Month</span>] </p>
                        <p className={'text-sm flex items-center Plan-head'}><span className={'mr-1'}><img
                            src={vector}/> </span> MYMC Discord Role [ <HoverCardRoot>
                            <HoverCardTrigger>
                                <span style={{color:'#7EE772'}}>1 Month</span>]
                            </HoverCardTrigger>
                            <HoverCardContent maxWidth="340px" >
                                <HoverCardArrow />
                                <Box padding={'10px'}>
                                    <Strong>Chakra</Strong> is a Sanskrit word that means disk or wheel,
                                    referring to energy centers in the body
                                </Box>
                            </HoverCardContent>
                        </HoverCardRoot>]
                        </p>
                        <p className={'text-sm flex items-center Plan-head'}><span className={'mr-1'}><img
                            src={vector}/> </span> Multiple Homes ( 4 Max )</p>
                        <p className={'text-sm flex items-center Plan-head'}><span className={'mr-1'}><img
                            src={vector}/> </span>Custom Kit ( Tools and Armor )</p>
                        <p className={'text-sm flex items-center Plan-head'}><span className={'mr-1'}><img
                            src={vector}/> </span>Ingame Currency ( 15000 )</p>
                        <p className={'text-sm flex items-center Plan-head'}><span className={'mr-1'}><img
                            src={vector}/> </span>Bonus Claim Blocks ( +3000 )</p>
                    </div>

                    <button className="mt-4 bg-black text-white Plan-head px-4 py-2 mb-3 ">
                        Purchase
                    </button>
                </div>
            </div>

            <div
                className="min-w-[300px] h-[459px] bg-[#2A2A2A] text-left border border-[#ceff00] rounded-3xl p-6 flex flex-col justify-between">
                <div>
                    <h3 className="text-xl text-[#00BC32] font-bold Plan-head">Emerald</h3>
                    <p className="text-sm text-[#CFCFCF] Plan-head">The Flex</p>
                        <div className="flex flex-col items-start my-1 mb-3">
                            <p className="text-[10px] text-[#1574D2] Plan-head">-5% off</p>
                            <h2 className="Plan-head font-medium text-3xl">
                                ₹852 <span className="text-xl">/per Season</span>
                            </h2>
                        </div>
                </div>

                <div className="space-y-2">
                    <p className={'text-sm flex items-center Plan-head'}><span className={'mr-1'}><img
                        src={Badge}/> </span> /anvil Command [<HoverCardRoot>
                        <HoverCardTrigger>
                            <span style={{color:'#7EE772'}}>1 Month</span>]
                        </HoverCardTrigger>
                        <HoverCardContent maxWidth="340px" >
                            <HoverCardArrow />
                            <Box padding={'10px'}>
                                <Strong>Chakra</Strong> is a Sanskrit word that means disk or wheel,
                                referring to energy centers in the body
                            </Box>
                        </HoverCardContent>
                    </HoverCardRoot> ] </p>
                    <p className={'text-sm flex items-center Plan-head'}><span className={'mr-1'}><img
                        src={vector}/> </span> /craft Command [<HoverCardRoot>
                        <HoverCardTrigger>
                            <span style={{color:'#7EE772'}}>1 Month</span>]
                        </HoverCardTrigger>
                        <HoverCardContent maxWidth="340px" >
                            <HoverCardArrow />
                            <Box padding={'10px'}>
                                <Strong>Chakra</Strong> is a Sanskrit word that means disk or wheel,
                                referring to energy centers in the body
                            </Box>
                        </HoverCardContent>
                    </HoverCardRoot> ] </p>
                    <p className={'text-sm flex items-center Plan-head'}><span className={'mr-1'}><img
                        src={vector}/> </span> INGAME
                        Role [<HoverCardRoot>
                            <HoverCardTrigger>
                                <span style={{color:'#7EE772'}}>1 Month</span>]
                            </HoverCardTrigger>
                            <HoverCardContent maxWidth="340px" >
                                <HoverCardArrow />
                                <Box padding={'10px'}>
                                    <Strong>Chakra</Strong> is a Sanskrit word that means disk or wheel,
                                    referring to energy centers in the body
                                </Box>
                            </HoverCardContent>
                        </HoverCardRoot> ] </p>
                    <p className={'text-sm flex items-center Plan-head'}><span className={'mr-1'}><img
                        src={vector}/> </span> MYMC Discord Role [ <HoverCardRoot>
                        <HoverCardTrigger>
                            <span style={{color:'#7EE772'}}>1 Month</span>]
                        </HoverCardTrigger>
                        <HoverCardContent maxWidth="340px" >
                            <HoverCardArrow />
                            <Box padding={'10px'}>
                                <Strong>Chakra</Strong> is a Sanskrit word that means disk or wheel,
                                referring to energy centers in the body
                            </Box>
                        </HoverCardContent>
                    </HoverCardRoot> ] </p>
                    <p className={'text-sm flex items-center Plan-head'}><span className={'mr-1'}><img
                        src={vector}/> </span> Multiple Homes ( 5 Max )</p>
                    <p className={'text-sm flex items-center Plan-head'}><span className={'mr-1'}><img
                        src={vector}/> </span> Custom Kit ( Tools and Armor )</p>
                    <p className={'text-sm flex items-center Plan-head'}><span className={'mr-1'}><img
                        src={vector}/> </span> Ingame Currency ( 30000 )</p>
                    <p className={'text-sm flex items-center Plan-head'}><span className={'mr-1'}><img
                        src={vector}/> </span>Bonus Claim Blocks ( +10000 )</p>

                </div>

                <button className="mt-4 bg-black text-white Plan-head px-4 py-2 shiny-cta">
                    Purchase
                </button>
            </div>


        </motion.div>
    );
};
