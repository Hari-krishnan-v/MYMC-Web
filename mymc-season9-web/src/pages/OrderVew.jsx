import React from 'react';
import { Header } from "./section/Header.jsx";
import Footer from "./section/Footer.jsx";

export const OrderVew = () => {
    const orders = [
        { id: "ORD12345", item: "Premium Pack", price: "$10", status: "Completed" },
        { id: "ORD12346", item: "VIP Membership", price: "$20", status: "Pending" },
        { id: "ORD12347", item: "Custom Skin", price: "$5", status: "Completed" },
    ];

    return (
        <>
            <Header />
            <main className="min-h-screen bg-gradient-to-b from-black to-[#231D2D] w-full flex flex-col items-center justify-center pt-10">

                <section className="w-[700px] mt-10">
                    <h2 className="text-white text-2xl font-bold mb-4">Your Orders</h2>
                    <table className="w-full text-left text-white border-collapse border border-gray-700">
                        <thead>
                        <tr className="bg-gray-800">
                            <th className="p-3 border border-gray-700">Order ID</th>
                            <th className="p-3 border border-gray-700">Item Name</th>
                            <th className="p-3 border border-gray-700">Price</th>
                            <th className="p-3 border border-gray-700">Status</th>
                        </tr>
                        </thead>
                        <tbody>
                        {orders.map((order) => (
                            <tr key={order.id} className="odd:bg-gray-900 even:bg-gray-800">
                                <td className="p-3 border border-gray-700">{order.id}</td>
                                <td className="p-3 border border-gray-700">{order.item}</td>
                                <td className="p-3 border border-gray-700">{order.price}</td>
                                <td className={`p-3 border border-gray-700 ${order.status === "Completed" ? "text-green-500" : "text-yellow-500"}`}>
                                    {order.status}
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </section>
            </main>
            <Footer />
        </>
    );
};