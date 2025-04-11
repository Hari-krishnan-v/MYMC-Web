import React from 'react'
import {AdminHeader} from "./AdminComponents/AdminHeader.jsx";
import {AdminFooter} from "./AdminComponents/AdminFooter.jsx";
import Minecraft_illustration from "../assets/Minecraft_illustration.png";
import {motion} from "framer-motion";

const AddAnnouncement = () => {
    return (
        <div className="flex flex-col gap-5 ">
            <h1 className="text-white text-2xl font-bold">Add Announcement</h1>
            <div className="flex flex-col justify-between gap-3 h-full">
                <div className="flex items-center justify-between bg-[#554274]/10 p-4 rounded-2xl">
                    <div className="flex items-center gap-4">
                        <div className="flex flex-col">
                            <h1 className="text-white text-lg font-bold">File</h1>
                            <p className="text-white opacity-60">Announcement details</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const RecentAnnouncements = () => {
    return (
        <div className="flex flex-col gap-5">
            <h1 className="text-white text-2xl font-bold">Recent Announcements</h1>
            <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between bg-[#554274]/10 p-4 rounded-2xl">
                    <div className="flex items-center gap-4">
                        <img src={Minecraft_illustration} alt=""/>
                        <div className="flex flex-col">
                            <h1 className="text-white text-lg font-bold">Announcement 1</h1>
                            <p className="text-white opacity-60">Announcement details</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export const AdminAnnouncement = () => {
    const [selectedTab, setSelectedTab] = React.useState("AddAnnouncement");
    return (
        <>
            <AdminHeader/>
            <main>
                <section
                    className="min-h-screen bg-gradient-to-b from-black to-[#231D2D] w-full flex items-center pt-8 justify-center pl-20">
                    <div className="w-full gap-20 flex items-start justify-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: .8 }}
                            animate={{ y: 0 }}
                            className="flex flex-col gap-5 w-[405px] min-h-[200px] p-8 rounded-2xl shadow-xl bg-[#554274]/10">
                            <button
                                onClick={() => setSelectedTab("AddAnnouncement")}
                                className={`w-full h-10 flex items-center justify-start pl-6 rounded-3xl transition-all duration-500 ${selectedTab === "AddAnnouncement" ? "bg-[#A782E5]" : ""}`}
                            >
                                Add Announcement
                            </button>
                            <button
                                onClick={() => setSelectedTab("RecentAnnouncements")}
                                className={`w-full h-10 flex items-center justify-start pl-6 rounded-3xl transition-all duration-500 ${selectedTab === "RecentAnnouncements" ? "bg-[#A782E5]" : ""}`}
                            >
                               Recent Announcements
                            </button>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: .8 }}
                            animate={{ y: 0 }}
                            className="flex flex-col shadow-xl rounded-2xl w-[842px] p-8 min-h-[700px] bg-[#554274]/10">
                            {selectedTab === "AddAnnouncement" ? <AddAnnouncement/> :
                                <RecentAnnouncements/>}

                        </motion.div>
                    </div>
                </section>
            </main>
            <AdminFooter/>
        </>
    )
}
