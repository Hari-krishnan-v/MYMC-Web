import React from 'react'
import {AdminHeader} from "./AdminComponents/AdminHeader.jsx";
import {AdminFooter} from "./AdminComponents/AdminFooter.jsx";
import Minecraft_illustration from "../assets/Minecraft_illustration.png";
import {motion} from "framer-motion";

const AddAnnouncement = () => {
    const [title, setTitle] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [file, setFile] = React.useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({
            title,
            description,
            file
        });
        // You can later replace this with actual API request logic
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full">
            <h1 className="text-white text-2xl font-bold">Add Dev Update</h1>

            <div className="flex flex-col gap-3">
                <label className="text-white font-medium">Title</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="p-3 rounded-xl bg-white/10 text-white focus:outline-none"
                    placeholder="Enter announcement title"
                    required
                />
            </div>

            <div className="flex flex-col gap-3">
                <label className="text-white font-medium">Description</label>
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="p-3 rounded-xl bg-white/10 text-white resize-none focus:outline-none"
                    rows={5}
                    placeholder="Enter announcement description"
                    required
                />
            </div>

            <div className="flex flex-col gap-3">
                <label className="text-white font-medium">Upload File</label>
                <input
                    type="file"
                    onChange={handleFileChange}
                    className="text-white"
                    accept=".jpg,.jpeg,.png,.pdf,.docx"
                />
                {file && <p className="text-white opacity-70">Selected: {file.name}</p>}
            </div>

            <button
                type="submit"
                className="mt-4 px-6 py-2 bg-[#A782E5] text-white font-semibold rounded-xl hover:bg-[#c29cf3] transition"
            >
                Submit Announcement
            </button>
        </form>
    );
};


const RecentAnnouncements = () => {
    return (
        <div className="flex flex-col gap-5">
            <h1 className="text-white text-2xl font-bold">Recent Announcements</h1>
            <div className="flex flex-col gap-3">

                <div className="flex items-center justify-between bg-[#554274]/10 p-4 rounded-2xl">
                    <div className="flex items-center gap-4">
                        <img src={Minecraft_illustration} alt="" className="w-16 h-16 object-contain"/>
                        <div className="flex flex-col">
                            <h1 className="text-white text-lg font-bold">New Anti-Cheat System Deployed</h1>
                            <p className="text-white opacity-60">We've implemented a new anti-cheat system to ensure
                                fair gameplay across all servers</p>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-between bg-[#554274]/10 p-4 rounded-2xl">
                    <div className="flex items-center gap-4">
                        <img src={Minecraft_illustration} alt="" className="w-16 h-16 object-contain"/>
                        <div className="flex flex-col">
                            <h1 className="text-white text-lg font-bold">New Anti-Cheat System Deployed</h1>
                            <p className="text-white opacity-60">We've implemented a new anti-cheat system to ensure
                                fair gameplay across all servers</p>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-between bg-[#554274]/10 p-4 rounded-2xl">
                    <div className="flex items-center gap-4">
                        <img src={Minecraft_illustration} alt="" className="w-16 h-16 object-contain"/>
                        <div className="flex flex-col">
                            <h1 className="text-white text-lg font-bold">New Anti-Cheat System Deployed</h1>
                            <p className="text-white opacity-60">We've implemented a new anti-cheat system to ensure
                                fair gameplay across all servers</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};


export const AdminDevUpdate = () => {
    const [selectedTab, setSelectedTab] = React.useState("AddAnnouncement");
    return (
        <>
            <AdminHeader/>
            <main>
                <section
                    className="min-h-screen bg-gradient-to-b from-black to-[#231D2D] w-full flex items-center pt-8 justify-center pl-20">
                    <div className="w-full gap-20 flex items-start justify-center">
                        <motion.div
                            initial={{opacity: 0, scale: 0.9}}
                            whileInView={{opacity: 1, scale: 1}}
                            exit={{opacity: 0, scale: 0.9}}
                            transition={{ duration: .8 }}
                            animate={{ y: 0 }}
                            className="flex flex-col gap-5 w-[405px] min-h-[200px] p-8 rounded-2xl shadow-xl bg-[#554274]/10">
                            <button
                                onClick={() => setSelectedTab("AddAnnouncement")}
                                className={`w-full h-10 flex items-center justify-start pl-6 rounded-3xl transition-all duration-500 ${selectedTab === "AddAnnouncement" ? "bg-[#A782E5]" : ""}`}
                            >
                                Add Dev Update
                            </button>
                            <button
                                onClick={() => setSelectedTab("RecentAnnouncements")}
                                className={`w-full h-10 flex items-center justify-start pl-6 rounded-3xl transition-all duration-500 ${selectedTab === "RecentAnnouncements" ? "bg-[#A782E5]" : ""}`}
                            >
                               Recent Dev Update
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
