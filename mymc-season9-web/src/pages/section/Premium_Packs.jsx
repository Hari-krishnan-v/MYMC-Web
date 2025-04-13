import React, {useEffect, useState} from 'react';
import vector from '../../assets/Vector.svg'
import Badge from '../../assets/Badge.svg'
import { motion } from "framer-motion";
import {DialogBody, DialogCloseTrigger, DialogContent, DialogRoot} from "../../components/ui/Dialog.tsx";
import Login from "./Login.jsx";
import {handleRazorpayPayment} from "../../Rayzorpay/razorpay.js";
import useAuthStore from "../../store/authStore.js";


export const PremiumPacks = () => {
    const [isMonthly, setIsMonthly] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false); // Replace with actual authentication logic
    const [showLoginDialog, setShowLoginDialog] = useState(false);
    const {user}=useAuthStore();

    useEffect(() => {
        if (user) {
            setIsAuthenticated(true);
        }
    }, []);
    const handleToggle = (selection) => {
        setIsMonthly(selection === 'monthly');
    };

    const handlePurchase = (amount) => {
        if (isAuthenticated) {
            let cartItem;
            if (amount === 59) {
                cartItem = { name: 'Gold Plan', description: 'Basic Plan', price: 59 };
            } else if (amount === 199) {
                cartItem = { name: 'Diamond Plan', description: 'The Best One', price: 199 };
            } else if (amount === 399) {
                cartItem = { name: 'Emerald Plan', description: 'The Flex', price: 399 };
            }

            if (cartItem) {
                handleRazorpayPayment(user, amount, [cartItem]);
            } else {
                console.error('Invalid amount');
            }
        } else {
            setShowLoginDialog(true);

        }
    }

            return (
        <section id={'PremiumPacks'} className={'min-h-screen flex justify-center items-center relative '}>
            <div className="gradient-overlay2 h-full"></div>
            <div className={'z-20 max-w-[1500px] w-full flex flex-col justify-center items-center gap-3 p-6'}>
                <div className={'flex-col w-full justify-center items-center mb-6'}>
                    <motion.h2
                        initial={{opacity: 0, scale: 0.7}}
                        whileInView={{opacity: 1, scale: 1}}
                        exit={{opacity: 0, scale: .7}}
                        transition={{duration: .6, ease: "easeInOut"}}
                        className={'text-center font-bold text-white text-[56px]  '}> <span className={'text-[#ff9800] mine-logo'}>Premium</span> Packs </motion.h2>
                    <motion.p
                        initial={{opacity: 0, scale: 0.7}}
                        whileInView={{opacity: 1, scale: 1}}
                        exit={{opacity: 0, scale: .7}}
                        transition={{duration: .6, ease: "easeInOut",delay:0.2}}
                        className={'text-center text-[#AFAFAF]'}>
                        Elevate your gameplay with our premium plans, designed to give you exclusive advantages and
                        access to enhanced assets on the server. Enjoy essential features with no hidden fees, all
                        tailored to maximize your Minecraft experience.
                    </motion.p>
                </div>
                <div className="flex  justify-center w-full">
                    <motion.div
                        initial={{opacity: 0, scale: 0.8}}
                        whileInView={{opacity: 1, scale: 1}}
                        exit={{opacity: 0, scale: .7}}
                        transition={{duration: .6, ease: "easeInOut",delay:0.2}}
                        className="toggle bg-black  w-[240px] h-[42px] flex items-center justify-between border rounded-full p-1">
                        <button
                            onClick={() => handleToggle('monthly')}
                            className={`w-1/2 text-center py-1 rounded-full transition-all  ${
                                isMonthly ? 'bg-white text-black' : 'bg-black text-white'
                            }`}
                        >
                            Seasonal
                        </button>
                        <button
                            onClick={() => handleToggle('battlePass')}
                            className={`w-1/2 text-center py-1 rounded-full transition-all ${
                                !isMonthly ? 'bg-white text-black' : 'bg-black text-white'
                            }`}
                        >
                            BattlePass
                        </button>
                    </motion.div>
                </div>
                {/*<p className={'text-center text-[14px]  text-[#3199FF] mt-4'}>-5% off on seasonally payments</p>*/}

                <div className={'mt-6 items-center justify-center   text-center text-white'}>
                    {isMonthly ? (
                        <MonthlyPlan handlePurchase={handlePurchase} />
                    ) : (
                        <BattlePass/>
                    )}
                </div>
            </div>
            <DialogRoot open={showLoginDialog}  placement={"center"}>
                <DialogContent className={'flex flex-col w-80 p-2'}>
                    <DialogBody>
                        <Login />
                    </DialogBody>
                    <DialogCloseTrigger onClick={()=>setShowLoginDialog(false)}/>
                </DialogContent>

            </DialogRoot>
        </section>
    );
};

const MonthlyPlan = ({ handlePurchase }) => {


    return (
        <motion.div
            initial={{opacity: 0, scale: 0.9}}
            whileInView={{opacity: 1, scale: 1}}
            exit={{opacity: 0, scale: 0.7}}
            transition={{duration: 0.5}}
            className={' flex  justify-between  gap-8 items-center  plan '}>

            <div
                className="min-w-[300px] h-[480px]   text-left border border-[#ceff00] md:space-y-5 rounded-3xl p-6 flex flex-col justify-between">
                <div>
                    <h3 className="text-xl text-[#b87333] Plan-head font-bold">Copper</h3>
                    <p className="text-sm text-[#CFCFCF] Plan-head">Basic Plan</p>
                    <h2 className="my-3 Plan-head font-medium text-3xl">
                        ₹59 <span className="text-xl">/per season</span>
                    </h2>
                </div>

                <div className="space-y-2 ">
                    <p className={'text-sm flex Plan-head items-center '}><span className={'mr-1'}><img
                        src={vector}/> </span> INGAME Role</p>
                    <p className={'text-sm flex Plan-head items-center '}><span className={'mr-1'}><img
                        src={vector}/> </span> MYMC Discord Role</p>
                    <p className={'text-sm flex Plan-head items-center '}><span className={'mr-1'}><img
                        src={vector}/> </span> Multiple Homes ( 3 Max )</p>
                    <p className={'text-sm flex Plan-head items-center '}><span className={'mr-1'}><img
                        src={vector}/> </span> Custom Kit ( Tools and Armor )</p>
                    <p className={'text-sm flex Plan-head items-center '}><span className={'mr-1'}><img
                        src={vector}/> </span> Ingame Currency ( 5000 )</p>
                    <p className={'text-sm flex Plan-head items-center '}><span className={'mr-1'}><img
                        src={vector}/> </span>Bonus Claim Blocks ( +1000 )</p>
                </div>
                <button className="mt-4 Plan-head bg-black text-white px-4 py-2 shiny-cta"
                        onClick={() => handlePurchase(59)}>
                    Purchase
                </button>
            </div>

            <div
                className="min-w-[300px] h-[480px]   text-left border border-[#ceff00] md:space-y-5 rounded-3xl p-6 flex flex-col justify-between">
                <div>
                    <h3 className="text-xl text-[#FFBB00] Plan-head font-bold">Gold</h3>
                    <p className="text-sm text-[#CFCFCF] Plan-head">The Best One</p>
                    <h2 className="my-3 font-medium Plan-head text-3xl">
                        ₹199 <span className="text-xl">/per season</span>
                    </h2>
                </div>

                <div className="space-y-2">
                    <p className={'text-sm flex items-center Plan-head '}><span className={'mr-1'}><img
                        src={Badge}/> </span>/craft Command </p>
                    <p className={'text-sm flex items-center Plan-head'}><span className={'mr-1'}><img
                        src={vector}/> </span> INGAME Role </p>
                    <p className={'text-sm flex items-center Plan-head'}><span className={'mr-1'}><img
                        src={vector}/> </span> MYMC Discord Role </p>
                    <p className={'text-sm flex items-center Plan-head'}><span className={'mr-1'}><img
                        src={vector}/> </span> Multiple Homes ( 4 Max )</p>
                    <p className={'text-sm flex items-center Plan-head'}><span className={'mr-1'}><img
                        src={vector}/> </span>Custom Kit ( Tools and Armor )</p>
                    <p className={'text-sm flex items-center Plan-head'}><span className={'mr-1'}><img
                        src={vector}/> </span>Ingame Currency ( 15000 )</p>
                    <p className={'text-sm flex items-center Plan-head'}><span className={'mr-1'}><img
                        src={vector}/> </span>Bonus Claim Blocks ( +3000 )</p>
                </div>

                <button className="mt-4 Plan-head bg-black text-white px-4 py-2 shiny-cta"
                        onClick={() => handlePurchase(59)}>
                    Purchase
                </button>
            </div>


            <div
                className="w-[308px] h-[496px] bg-[#FFBB00] flex flex-col justify-between md:space-y-5 items-center rounded-3xl p-2 ">
                <p className="text-[12px] text-center Plan-head text-black">RECOMMENDED</p>

                <div
                    className="w-[300px] h-[459px] bg-[#18131e] text-left border border-[#ceff00] rounded-3xl p-6 flex flex-col justify-between">
                    <div>
                        <h3 className="text-xl text-[#1BF0FF] font-bold Plan-head">Diamond</h3>
                        <p className="text-sm text-[#CFCFCF] Plan-head">The Flex</p>
                        <h2 className="my-3 font-medium text-3xl Plan-head">
                            ₹399 <span className="text-xl">/per season</span>
                        </h2>
                    </div>

                    <div className="space-y-2">
                        <p className={'text-sm flex items-center Plan-head'}><span className={'mr-1'}><img
                            src={Badge}/> </span> /anvil Command </p>
                        <p className={'text-sm flex items-center Plan-head'}><span className={'mr-1'}><img
                            src={vector}/> </span> /craft Command </p>
                        <p className={'text-sm flex items-center Plan-head'}><span className={'mr-1'}><img
                            src={vector}/> </span> INGAME Role </p>
                        <p className={'text-sm flex items-center Plan-head'}><span className={'mr-1'}><img
                            src={vector}/> </span> MYMC Discord Role </p>
                        <p className={'text-sm flex items-center Plan-head'}><span className={'mr-1'}><img
                            src={vector}/> </span> Multiple Homes ( 5 Max )</p>
                        <p className={'text-sm flex items-center Plan-head'}><span className={'mr-1'}><img
                            src={vector}/> </span> Custom Kit ( Tools and Armor )</p>
                        <p className={'text-sm flex items-center Plan-head'}><span className={'mr-1'}><img
                            src={vector}/> </span> Ingame Currency ( 30000 )</p>
                        <p className={'text-sm flex items-center Plan-head'}><span className={'mr-1'}><img
                            src={vector}/> </span>Bonus Claim Blocks ( +10000 )</p>

                    </div>

                    <button className="mt-4 bg-black text-white Plan-head px-4 py-2 mb-3 shiny-cta"
                            onClick={() => handlePurchase(199)}>
                        Purchase
                    </button>
                </div>
            </div>

            <div
                className="min-w-[300px] h-[480px]  text-left border border-[#ceff00] md:space-y-5 rounded-3xl p-6 flex flex-col justify-between">
                <div>
                    <h3 className="text-xl text-[#00BC32] font-bold Plan-head">Emerald</h3>
                    <p className="text-sm text-[#CFCFCF] Plan-head">The Flex</p>
                    <h2 className="my-3 font-medium text-3xl Plan-head">
                        ₹399 <span className="text-xl">/per season</span>
                    </h2>
                </div>

                <div className="space-y-2">
                    <p className={'text-sm flex items-center Plan-head'}><span className={'mr-1'}><img
                        src={Badge}/> </span> /anvil Command </p>
                    <p className={'text-sm flex items-center Plan-head'}><span className={'mr-1'}><img
                        src={vector}/> </span> /craft Command </p>
                    <p className={'text-sm flex items-center Plan-head'}><span className={'mr-1'}><img
                        src={vector}/> </span> INGAME Role </p>
                    <p className={'text-sm flex items-center Plan-head'}><span className={'mr-1'}><img
                        src={vector}/> </span> MYMC Discord Role </p>
                    <p className={'text-sm flex items-center Plan-head'}><span className={'mr-1'}><img
                        src={vector}/> </span> Multiple Homes ( 5 Max )</p>
                    <p className={'text-sm flex items-center Plan-head'}><span className={'mr-1'}><img
                        src={vector}/> </span> Custom Kit ( Tools and Armor )</p>
                    <p className={'text-sm flex items-center Plan-head'}><span className={'mr-1'}><img
                        src={vector}/> </span> Ingame Currency ( 30000 )</p>
                    <p className={'text-sm flex items-center Plan-head'}><span className={'mr-1'}><img
                        src={vector}/> </span>Bonus Claim Blocks ( +10000 )</p>

                </div>

                <button className="text-white Plan-head  shiny-cta" onClick={() => handlePurchase(399)}>
                    Purchase
                </button>
            </div>
        </motion.div>
    );
};

const BattlePass = () => {
    return (
        <motion.div
            initial={{opacity: 0, scale: 0.7}}
            whileInView={{opacity: 1, scale: 1}}
            exit={{opacity: 0, scale: 0.7}}
            transition={{duration: 1}}
            className={'max-w-[950px] min-h-[500px] flex  justify-center  gap-4 items-center '}>
            <h1 className={'mine-logo text-[71px]  font-bold'}><span
                className={"text-[#0eff00] mine-logo"}>COMING</span> SOON</h1>
        </motion.div>
    );
};
