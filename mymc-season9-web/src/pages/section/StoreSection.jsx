import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import  useAuthStore  from '../../store/authStore';
import vector from '../../assets/Vector.svg';
import ClaimBlocksimg from '../../assets/storeItems/ClaimBlocks.png';
import money from '../../assets/storeItems/money.png';
import AddItemBtn from "../../components/Buttons/AddItem.jsx";
import { toast, ToastContainer } from "react-toastify";
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
    const { user, isAuthenticated ,addToCart} = useAuthStore();
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
        <section className="min-h-dvh w-full flex flex-col gap-9 pt-32 items-center relative ">
            {/*<div className="gradient-overlay2 h-full"></div>*/}
            <div className="z-20 w-11/12 sm:w-3/4 md:w-2/3 lg:w-1/2 h-16 py-2 flex gap-5 flex-wrap justify-center">
                {['All', 'ClaimBlocks', 'Money', 'Kits', 'Home'].map((category) => (
                    <button
                        key={category}
                        className={`px-6 animate-in transition-all duration-500 rounded-xl border ${selected === category ? 'bg-gray-100 text-black scale-110' : 'hover:bg-gray-100 hover:text-black'}`}
                        onClick={() => setSelected(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>
            <div className="flex flex-wrap gap-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.7 }}
                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                    className="min-h-[500px] w-11/12 sm:w-3/4 md:w-full lg:w-full p-5 flex flex-wrap gap-9 justify-center z-20">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="min-w-[280px] max-w-[300px] h-[400px] bg-[#2A2A2A] text-left border border-[#ceff00] rounded-3xl p-6 flex flex-col justify-between items-center shadow-lg transform transition-transform hover:scale-105 overflow-hidden"
                        >
                            <div className="w-full flex justify-center mb-4 py-2">
                                <img src={itemImage(item.name)} alt={item.name} className="w-24 h-24" />
                            </div>
                            <div className="text-center space-y-2">
                                <h3 className="text-2xl text-[#00BC32] font-bold Plan-head">{item.name}</h3>
                                <div>
                                    {item.description.map((desc, index) => (
                                        <p key={index} className="text-sm text-[#CFCFCF] text-start flex Plan-head">
                                            <span className="mr-1">
                                                <img
                                                    src={
                                                        desc.includes('Pickaxe') ? pickaxeImg :
                                                            desc.includes('Axe') ? axeImg :
                                                                desc.includes('Shovel') ? shovelImg :
                                                                    vector
                                                    }
                                                    className="h-[20px]"
                                                />
                                            </span>
                                            {desc}
                                        </p>
                                    ))}
                                </div>
                                <h2 className="my-3 text-3xl Plan-head font-bold">₹{item.price}</h2>
                            </div>
                            <AddItemBtn
                                className="mt-4 bg-[#00BC32] text-white Plan-head px-4 py-2 rounded-full shadow-md hover:bg-[#00a82d] transition-colors"
                                onClick={() => addItemToCart(item)}
                            >
                                Add to Cart
                            </AddItemBtn>
                        </div>
                    ))}
                </motion.div>
            </div>
            <ToastContainer />
        </section>
    );
};
