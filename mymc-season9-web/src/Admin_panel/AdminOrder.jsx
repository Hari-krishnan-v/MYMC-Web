import React from 'react'
import {AdminHeader} from "./AdminComponents/AdminHeader.jsx";
import {AdminFooter} from "./AdminComponents/AdminFooter.jsx";
import {motion} from "framer-motion";

const PendingOrders = () => {
    return (
        <div className="flex flex-col gap-5">
            <h1 className="text-white text-2xl font-bold">Pending Orders</h1>
            <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between bg-[#554274]/10 p-4 rounded-2xl">
                    <div className="flex items-center gap-4">
                        <img src="https://via.placeholder.com/50" alt=""/>
                        <div className="flex flex-col">
                            <h1 className="text-white text-lg font-bold">Player 1</h1>
                            <p className="text-white opacity-60">Order details</p>
                        </div>
                    </div>
                    <button className="bg-red-600 text-white px-4 py-2 rounded-full">Cancel</button>
                </div>
                {/* Add more orders here */}
            </div>
        </div>
    )
}

const TransactionHistory = () => {
    return (
        <div className="flex flex-col gap-5">
            <h1 className="text-white text-2xl font-bold">Transaction History</h1>
            <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between bg-[#554274]/10 p-4 rounded-2xl">
                    <div className="flex items-center gap-4">
                        <img src="https://via.placeholder.com/50" alt=""/>
                        <div className="flex flex-col">
                            <h1 className="text-white text-lg font-bold">Player 1</h1>
                            <p className="text-white opacity-60">Transaction details</p>
                        </div>
                    </div>
                </div>
                {/* Add more transactions here */}
            </div>
        </div>
    )
}

export const AdminOrder = () => {
    const [selectedTab, setSelectedTab] = React.useState("PedningOrders");

    return (
        <>
            <AdminHeader/>
            <main>
                <section
                    className="min-h-screen bg-gradient-to-b from-black to-[#231D2D] w-full flex items-center pl-20 ">

                    <div className="w-full gap-20 flex items-start justify-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: .8 }}
                            className="flex flex-col gap-5 w-[405px] min-h-[200px] p-8 rounded-2xl shadow-xl bg-[#554274]/10">
                            <button
                                onClick={() => setSelectedTab("PedningOrders")}
                                className={`w-full h-10 flex items-center justify-start pl-6 rounded-3xl transition-all duration-500 ${selectedTab === "PedningOrders" ? "bg-[#A782E5]" : ""}`}
                            >
                                Pedning Orders
                            </button>
                            <button
                                onClick={() => setSelectedTab("TransactionHistory")}
                                className={`w-full h-10 flex items-center justify-start pl-6 rounded-3xl transition-all duration-500 ${selectedTab === "TransactionHistory" ? "bg-[#A782E5]" : ""}`}
                            >
                                Transaction History
                            </button>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: .8 }}
                            className="flex flex-col shadow-xl rounded-2xl w-[842px] p-8 min-h-[700px] bg-[#554274]/10">
                            {selectedTab === "PedningOrders" ? <PendingOrders/> :
                                <TransactionHistory/>}

                        </motion.div>
                    </div>
                </section>
            </main>
            <AdminFooter/>
        </>

    )
}
