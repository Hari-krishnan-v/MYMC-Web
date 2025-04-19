import React, {useEffect, useState} from 'react';
import {motion} from "framer-motion";
import {FaCircle} from "react-icons/fa";
import Minecraft_illustration from "../../assets/Minecraft_illustration.png";
import {toast, ToastContainer} from "react-toastify";
import useAuthStore from "../../store/authStore.js";
import {DialogBody, DialogContent, DialogRoot} from "../../components/ui/Dialog.tsx";
import Login from "./Login.jsx";
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

dayjs.extend(duration);


export const Home = ({ playerCount, serverStatus }) => {
    const {user, luckyDraw, checkAuth} = useAuthStore();
    const [showLuckyDraw, setShowLuckyDraw] = useState(false);
    const [timeLeft, setTimeLeft] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
            const now = dayjs();
            const currentMonth = now.month();
            const currentYear = now.year();

            let target = dayjs(new Date(currentYear, currentMonth, 28, 20, 0, 0));

            if (now.isAfter(target)) {
                setTimeLeft("⏳ Waiting for next month’s draw");
                return;
            }

            const diff = target.diff(now);
            const duration = dayjs.duration(diff);

            const days = target.diff(now, 'day');
            const hours = Math.floor(duration.asHours()) % 24;
            const minutes = duration.minutes();
            const seconds = duration.seconds();

            setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
        }, 1000);

        return () => clearInterval(interval);
    }, []);



    if (playerCount === undefined) {
        playerCount = 0;
    }

    const handleLuckyDraw = async () => {

        if (!user) {
            toast.error("Please login to enter the lucky draw!");
            return;
        }
        if (user.luckyDraw && user.luckyDrawMonth === new Date().toLocaleString('default', {month: 'long'})) {
            toast.error("You have already entered the lucky draw this month!");
            return;
        }
        await luckyDraw(user._id)
            .then(res => {
                if (res.status === 200) {
                    toast.success("You have entered the lucky draw!");
                } else {
                    toast.error("Failed to enter the lucky draw!");
                }
            })
        setShowLuckyDraw(false);
    };


    return (
        <section className={'home bg-no-repeat relative bg-gradient-to-b from-black to-[#231D2D]'} id={'home'}>
            <div className="gradient-overlay2 h-full"></div>
            <motion.img
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{opacity: 0.9, scale: 1}}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: .8 }}
                src={Minecraft_illustration} className={"absolute bottom-0 right-0 z-20 select-none"} alt=""/>

            <div className={'max-w-[1440px] relative z-20 w-full m-auto'}>
                <div className={'flex'}>
                    <motion.div
                        initial={{opacity: 0, scale: 0.9}}
                        whileInView={{opacity: 1, scale: 1}}
                        exit={{opacity: 0, scale: 0.9}}
                        transition={{duration: .8}}
                        className={'justify-items-start lg:ml-20 xl:ml-5 md:ml-16 home-div space-y-3'}>
                        <div className={'border flex items-center gap-2 w-fit rounded-[20px] px-4 p-2'}>
                            <FaCircle fill={serverStatus ? "#0eff00" : "#ff0000"}/>
                            <h2 className={'font-bold text-sm sm:text-base md:text-lg lg:text-xl'}>{serverStatus ? "Online" : "Offline"}</h2>
                        </div>
                        <h1 className={'text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mine-logo text-green-700 '}>MUTTAYI
                            MINECRAFT</h1>
                        <p className={'text-sm sm:text-base md:text-lg lg:text-lg mb-4 font-medium w-full sm:w-[600px] text-left text-white opacity-65'}>
                            Muttayi Minecraft is a Kerala-based Minecraft server with an amazing community and active
                            admins.
                        </p>
                        <p className={'text-xs sm:text-sm md:text-base lg:text-lg mb-2'}>Currently playing</p>
                        <div className={'flex '}>
                            <h2 className={'font-bold head-font text-4xl sm:text-5xl md:text-6xl lg:text-7xl '}>{playerCount}</h2>
                            <p className={'mx-2 mt-10 font-bold text-xs sm:text-sm md:text-base lg:text-lg'}
                               style={{color: '#0eff00'}}>/Playing</p>
                        </div>
                        <div className="flex items-center justify-between h-fit w-fit gap-6 ">
                            {/*<button className={'shiny-cta text-xs sm:text-sm md:text-base lg:text-lg'}>*/}
                            {/*    <a href="/play">JOIN NOW</a>*/}
                            {/*</button>*/}
                            {user.luckyDraw === true && user.luckyDrawTicket ?
                                <>
                                    <p className={'flex gap-2 text-xs sm:text-sm md:text-base lg:text-lg mt-4'}
                                       style={{color: '#da0006'}}>
                                      <span className={"text-white "}>
                                              Winner will be selected in :
                                      </span>
                                        {timeLeft}
                                    </p>


                                </>
                                :
                                <button
                                    onClick={() => setShowLuckyDraw(true)}
                                    className={'shiny-cta text-xs sm:text-sm md:text-base lg:text-lg'}
                                >
                                    Enter Lucky Draw
                                </button>


                            }

                        </div>
                    </motion.div>
                </div>
            </div>
            <DialogRoot open={showLuckyDraw} placement={"center"}>
                <DialogContent className={'flex flex-col w-80 p-2'}>
                    <DialogBody>
                        {user ? <div className="bg-black p-6 rounded-lg shadow-lg w-full max-w-md text-center">
                            <h2 className="text-2xl  font-bold mb-4">Lucky Draw</h2>
                            <p className="text-white/80 mb-6">Participate in the lucky draw and stand a chance to
                                win Premium pack!</p>
                            <button
                                onClick={handleLuckyDraw}
                                className="bg-white text-black px-4 py-2 rounded-[9px] mr-2"
                            >
                                Enter Now
                            </button>
                            <button
                                onClick={() => setShowLuckyDraw(false)}
                                className="bg-red-500 text-white px-4 py-2 rounded-[9px]"
                            >
                                Close
                            </button>
                        </div> : <Login/>}
                    </DialogBody>
                    {/*<DialogCloseTrigger onClick={() => setShowLuckyDraw(false)}/>*/}
                </DialogContent>

            </DialogRoot>

            {/* Lucky Draw Popup */}
            {/*{showLuckyDraw && (*/}

            {/*)}*/}
            <ToastContainer/>
        </section>
    );
};