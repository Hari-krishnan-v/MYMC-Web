import React,{useEffect} from 'react';
import {AdminHeader} from "./AdminComponents/AdminHeader.jsx";
import {AdminFooter} from "./AdminComponents/AdminFooter.jsx";
import {motion} from "framer-motion";
import LoadingSpinner from "../components/LoadingSpinner.jsx";
import {toast, ToastContainer} from "react-toastify";

const CurrentlyPlaying = () => {
    return(
        <div className="flex flex-col gap-5">
            <h1 className="text-white text-2xl font-bold">Currently Playing</h1>
            <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between bg-[#554274]/10 p-4 rounded-2xl">
                    <div className="flex items-center gap-4">
                        <img src="https://via.placeholder.com/50" alt=""/>
                        <div className="flex flex-col">
                            <h1 className="text-white text-lg font-bold">Player 1</h1>
                            <p className="text-white opacity-60">Playing Minecraft</p>
                        </div>
                    </div>
                    <button className="bg-red-600 text-white px-4 py-2 rounded-full">Kick</button>
                </div>
                 <div className="flex items-center justify-between bg-[#554274]/10 p-4 rounded-2xl">
                    <div className="flex items-center gap-4">
                        <img src="https://via.placeholder.com/50" alt=""/>
                        <div className="flex flex-col">
                            <h1 className="text-white text-lg font-bold">Player 1</h1>
                            <p className="text-white opacity-60">Playing Minecraft</p>
                        </div>
                    </div>
                    <button className="bg-red-600 text-white px-4 py-2 rounded-full">Kick</button>
                </div>
                 <div className="flex items-center justify-between bg-[#554274]/10 p-4 rounded-2xl">
                    <div className="flex items-center gap-4">
                        <img src="https://via.placeholder.com/50" alt=""/>
                        <div className="flex flex-col">
                            <h1 className="text-white text-lg font-bold">Player 1</h1>
                            <p className="text-white opacity-60">Playing Minecraft</p>
                        </div>
                    </div>
                    <button className="bg-red-600 text-white px-4 py-2 rounded-full">Kick</button>
                </div>

                {/* Add more players here */}
            </div>

        </div>
    )
}

const Users = () => {
    const [admin_users, setAdminUsers] = React.useState(null);
    const fetchAdminUsers = () => {
        fetch("http://localhost:5000/api/store/admin-usersFetch")
            .then((response) => response.json())
            .then((data) => {
                setAdminUsers(data.data);
            })
            .catch((error) => {
                console.error("Error fetching admin users:", error);
            });
    }
    useEffect(() => {
        fetchAdminUsers();
    }, []);

    if (!admin_users) {
        return <LoadingSpinner/>;
    }

    const handleKick = (userId) => {
        const secretPassword = "SrRashSam"; // Replace with your actual password
        const enteredPassword = window.prompt("Enter the secret password to kick the player:");

        if (enteredPassword === secretPassword) {
            console.log(`Kicking user with ID: ${userId}`);
            toast.success("User kicked successfully!", {
                position: "bottom-left",
                className: "toast-message",
            });
            // Add your kick logic here (e.g., API call to kick the user)
        } else {
            toast.error("Incorrect password. User not kicked.", {
                position: "bottom-left",
                className: "toast-message",
            });
        }
    };

    return (
        <div className="flex flex-col gap-5">
            <h1 className="text-white text-2xl font-bold">Users</h1>
            <div className="flex flex-col gap-3">
                {admin_users.map((user) => (
                    <div key={user._id} className="flex items-center justify-between bg-[#554274]/10 p-4 rounded-2xl">
                        <div className="flex items-center gap-4">
                            <img src={user.avatar} alt="User Avatar" className="w-fit h-12 rounded-full"/>
                            <div className="flex flex-col">
                                <h1 className="text-white text-lg font-bold">{user.username}</h1>
                                <p className="text-white opacity-60">Playing Minecraft</p>
                            </div>
                        </div>
                        <button
                            onClick={() => handleKick(user._id)}
                            className="bg-red-600 text-white px-4 py-2 rounded-full"
                        >
                            Kick
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};
const BannedUsers = () => {
    return(
        <div className="flex flex-col gap-5">
            <h1 className="text-white text-2xl font-bold">Banned Users</h1>
            <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between bg-[#554274]/10 p-4 rounded-2xl">
                    <div className="flex items-center gap-4">
                        <img src="https://via.placeholder.com/50" alt=""/>
                        <div className="flex flex-col">
                            <h1 className="text-white text-lg font-bold">Player 1</h1>
                            <p className="text-white opacity-60">Playing Minecraft</p>
                        </div>
                    </div>
                    <button className="bg-red-600 text-white px-4 py-2 rounded-full">UnBan</button>
                </div>
                {/* Add more players here */}
            </div>

        </div>
    )
}

export const AdminUsersView = () => {
    const [selectedTab, setSelectedTab] = React.useState("CurrentlyPlaying");

    return (<>
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
                        className="flex flex-col gap-5 w-[405px] min-h-[200px] p-8 rounded-2xl shadow-xl bg-[#554274]/10">
                        <button
                            onClick={() => setSelectedTab("CurrentlyPlaying")}
                            className={`w-full h-10 flex items-center justify-start pl-6 rounded-3xl transition-all duration-500 ${selectedTab === "CurrentlyPlaying" ? "bg-[#A782E5]" : ""}`}
                        >
                            Currently Playing
                        </button>
                        <button
                            onClick={() => setSelectedTab("Users")}
                            className={`w-full h-10 flex items-center justify-start pl-6 rounded-3xl transition-all duration-500 ${selectedTab === "Users" ? "bg-[#A782E5]" : ""}`}
                        >
                            Users
                        </button>
                        <button
                            onClick={() => setSelectedTab("BannedUsers")}
                            className={`w-full h-10 flex items-center justify-start pl-6 rounded-3xl transition-all duration-500 ${selectedTab === "BannedUsers" ? "bg-red-900" : ""}`}
                        >
                            Banned Users
                        </button>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: .8 }}
                        className="flex flex-col shadow-xl rounded-2xl w-[842px] p-8 min-h-[700px] bg-[#554274]/10">
                        {selectedTab === "CurrentlyPlaying" ? <CurrentlyPlaying/>:
                            selectedTab === "Users"? <Users/>: <BannedUsers/> }
                    </motion.div>
                </div>
                <ToastContainer/>

            </section>
        </main>
        <AdminFooter/>
        </>
    );
};