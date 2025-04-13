import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import useAuthStore from '../../store/authStore';
import { toast, ToastContainer } from "react-toastify";
import ClaimBlocksimg from '../../assets/storeItems/ClaimBlocks.png';
import money from '../../assets/storeItems/money.png';
import AddItemBtn from "../../components/Buttons/AddItem.jsx";
import pickaxeImg from '../../assets/storeItems/pickaxeImg.png';
import axeImg from '../../assets/storeItems/Axe.png';
import shovelImg from '../../assets/storeItems/shovelImg.png';
import Minecraft_home from '../../assets/storeItems/Minecraft_home.png';

export const fetchStoreItems = async (category) => {
    const response = await fetch(
        category === 'All'
            ? 'http://localhost:5000/api/store/'
            : `http://localhost:5000/api/store/${category}`
    );
    return await response.json();
};

export const StoreSection = () => {
    const [selected, setSelected] = useState('All');
    const [items, setItems] = useState([]);
    const { user, isAuthenticated, addToCart } = useAuthStore();

    useEffect(() => {
        fetchStoreItems(selected).then(setItems);
    }, [selected]);

    const addItemToCart = async (item) => {
        if (!isAuthenticated) {
            toast.error("Please login", {
                position: "bottom-left",
                className: "toast-message",
            });
            return;
        }

        try {
            const response = await addToCart(user, item); // Using authStore method
            if (response.ok) {
                toast.success("Item added to cart!", {
                    position: "bottom-left",
                    className: "toast-message",
                });
            } else {
                toast.error(data.error || "Failed to add to cart", {
                    position: "bottom-left",
                    className: "toast-message",
                });
            }
        } catch (err) {
            console.error(err);
            toast.error("Server error", {
                position: "bottom-left",
                className: "toast-message",
            });
        }
    };

    const itemImage = (name) => {
        if (name.includes('ClaimBlock')) {
            return ClaimBlocksimg;
        } else if (name.includes('In-Game Money')) {
            return money;
        } else if (name.includes('Home')) {
            return Minecraft_home;
        }
    };

    return (
        <section className="min-h-screen w-full flex flex-col gap-12 pt-32 items-center bg-gradient-to-b from-black to-[#231D2D]">
            {/* Category Buttons */}
            <div className="w-full flex justify-center">
                <div className="flex gap-4 flex-wrap p-4 rounded-lg border border-[#444]">
                    {['All', 'ClaimBlocks', 'Money', 'Kits', 'Home'].map((category) => (
                        <button
                            key={category}
                            className={`px-6 py-3 rounded-lg text-sm font-semibold border-2 transition-all duration-300 ease-in-out ${
                                selected === category
                                    ? 'bg-[#1c1c1c] text-white border-[#009f29]'
                                    : 'bg-transparent text-white hover:bg-[#525252] hover:border-[#00BC32]'
                            }`}
                            onClick={() => setSelected(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            {/* Item Grid */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-11/12 max-w-7xl"
            >
                {items.map((item, index) => (
                    <div
                        key={index}
                        className="rounded-lg bg-gradient-to-r from-[#1c1c1c] to-[#23232d] shadow-lg p-6 flex flex-col justify-between items-center transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
                    >
                        {/* Item Image */}
                        <motion.img
                            src={itemImage(item.name)}
                            alt={item.name}
                            className="w-24 h-24 mb-4 rounded-md transition-transform duration-300 ease-in-out hover:scale-110"
                        />

                        {/* Item Name */}
                        <h3 className="text-xl text-white font-semibold text-center mb-2">{item.name}</h3>

                        {/* Item Description */}
                        <div className="text-sm text-gray-300 w-full space-y-1 mb-3">
                            {item.description.map((desc, i) => (
                                <p key={i} className="flex items-center">
                                    <img
                                        src={
                                            desc.includes("Pickaxe")
                                                ? pickaxeImg
                                                : desc.includes("Axe")
                                                    ? axeImg
                                                    : desc.includes("Shovel")
                                                        ? shovelImg
                                                        : ''
                                        }
                                        alt="icon"
                                        className="h-4 w-4 mr-2"
                                    />
                                    {desc}
                                </p>
                            ))}
                        </div>

                        {/* Price Section */}
                        <div className="w-full text-center bg-[#009f29] text-white py-2 rounded-lg mb-4">
                            <h2 className="text-xl font-semibold">₹{item.price}</h2>
                        </div>

                        {/* Add to Cart Button */}
                        <AddItemBtn
                            className="bg-[#00BC32] hover:bg-[#009f29] text-white font-medium px-6 py-3 rounded-lg mt-auto shadow-md transform hover:translate-y-1"
                            onClick={() => addItemToCart(item)}
                        >
                            Add to Cart
                        </AddItemBtn>
                    </div>
                ))}
            </motion.div>

            <ToastContainer />
        </section>
    );
};
