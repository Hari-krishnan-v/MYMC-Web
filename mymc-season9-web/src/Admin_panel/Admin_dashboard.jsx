import React from 'react';
import Minecraft_illustration from "../assets/Minecraft_illustration.png";
import {AdminHeader} from "./AdminComponents/AdminHeader.jsx";
import {AdminFooter} from "./AdminComponents/AdminFooter.jsx";
import {motion} from "framer-motion";

export const AdminDashboard = () => {
    return (
        <>
           <AdminHeader/>
            <main>
                <section
                    className="min-h-screen bg-gradient-to-b from-black to-[#231D2D] w-full flex items-center pl-20 ">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: .8 }}
                        className="flex flex-col items-start justify-center h-full gap-4  w-[700px]">
                        <h1 className="text-green-700 text-start text-4xl font-bold mine-logo">MYMC Online Store
                            Services</h1>
                        <p className="text-white opacity-60 text-lg">
                            Muttayi Minecraft is a Kerala-based Minecraft server with an amazing community and active
                            admins.
                        </p>
                    </motion.div>
                    <motion.img
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: .8 }}
                        src={Minecraft_illustration} className={"absolute bottom-[70px] right-0"} alt=""/>
                </section>
            </main>
            <AdminFooter/>
        </>
    );
};