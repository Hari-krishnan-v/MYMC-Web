import React, {useEffect, useState} from 'react';
import {motion} from 'framer-motion';
import useAuthStore from '../../store/authStore';
import {toast, ToastContainer} from "react-toastify";
import ClaimBlocksimg from '../../assets/storeItems/ClaimBlocks.png';
import money from '../../assets/storeItems/money.png';
import Minecraft_home from '../../assets/storeItems/Minecraft_home.png';

export const fetchStoreItems = async (category) => {
    const response = await fetch(`http://localhost:5000/api/store/${category}`
    );
    return await response.json();
};

export const StoreSection = () => {
    const [selected, setSelected] = useState('Claim Blocks');
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
            await addToCart(user.username, item);
            toast.success("Item added to cart!", {
                position: "bottom-left", className: "toast-message",
            });
        } catch (err) {
            console.error(err);
            toast.error("Server error", {
                position: "bottom-left",
                className: "toast-message",
            });
        }
    };

    const itemImage = (name) => {
        if (name.includes('ClaimBlock')) return ClaimBlocksimg;
        if (name.includes('In-Game Money')) return money;
        if (name.includes('Home')) return Minecraft_home;
    };

    return (
        <section className="min-h-screen w-full flex flex-col gap-12 pt-32 items-center bg-gradient-to-b from-black to-[#231D2D]">
            {/* Category Buttons */}
            <div className="w-full flex justify-center">
                <motion.div
                    initial={{opacity: 0, scale: 0.95}}
                    animate={{opacity: 1, scale: 1}}
                    exit={{opacity: 0, scale: 0.95}}
                    transition={{duration: 0.5, ease: "easeInOut"}}
                    className="flex gap-3 flex-wrap p-4 rounded-xl bg-[#121212] border border-[#2a2a2a] shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
                >
                    {['Claim Blocks', 'Money', 'Kits', 'Home'].map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelected(category)}
                            className={`w-[100px] h-[80px] rounded-xl px-3 py-2 flex flex-col items-center justify-center text-xs font-medium tracking-wide transition-all duration-300
                                ${selected === category ? 'bg-gradient-to-b from-black to-[#4B0082]  shadow-[0_0_30px_rgba(75,0,130,0.4)]' : 'bg-[#0d0d0d] text-gray-300 hover:bg-[#2c2c2c] hover:text-white hover:shadow-[0_0_8px_#00ff9966]'}`}
                        >
                            <div className="text-base mb-1">🎮</div>
                            <span>{category}</span>
                        </button>
                    ))}
                </motion.div>
            </div>

            {/* Item Grid */}
            <div className="flex flex-wrap justify-center gap-8 w-full max-w-6xl px-4 z-20">
                {items.map((item, index) => {
                    const isUltimate = item.name.toLowerCase().includes("ultimate");
                    const isBusiness = item.name.toLowerCase().includes("pro");

                    return (
                        <motion.div
                            initial={{opacity: 0, scale: 0.8}}
                            whileInView={{opacity: 1, scale: 1}}
                            exit={{opacity: 0, scale: 0.8}}
                            transition={{duration: 0.8,}}
                        key={index}
                            className={`group relative flex flex-col justify-between w-full sm:w-[300px] h-[380px] p-6 rounded-2xl border transition-all duration-500
                                        ${isUltimate ? 'bg-gradient-to-br from-[#1f1f1f] via-[#2f2f2f] to-[#1f1f1f] border-[#333] shadow-[0_0_30px_#1fd07d44]'
                                : 'bg-[#0d0d0d] border-[#2a2a2a] '
                            } 
                            hover:scale-105 hover:shadow-[0_0_30px_rgba(75,0,130,0.4)]`}

                        >
                            {/* Title */}
                            <h2 className="text-white text-lg font-semibold mb-2">{item.name}</h2>

                            {/* Price */}
                            <h3 className="text-4xl font-bold text-white mb-2">
                                ₹{item.price}
                            </h3>

                            {/* Subtitle */}
                            <p className="text-white text-sm font-semibold mb-4">
                                includes
                            </p>

                            {/* Description */}
                            <div className="text-sm text-gray-300 flex-1 space-y-2 mb-4">
                                {item.description.map((desc, i) => (<p key={i} className="flex items-start">
                                    <span className="mr-2">✔️</span>{desc}
                                </p>))}
                        </div>


                            <div className="mt-auto w-full ">
                                <button
                                    onClick={() => addItemToCart(item)}
                                    className={"w-3/4 py-4 rounded-xl font-semibold transition-all text-sm bg-white text-black hover:bg-gray-200"}
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </motion.div>);
                })}
            </div>

            <ToastContainer/>
        </section>
    );
};
