import React, {useState} from 'react';
import {motion} from 'framer-motion';
import vector from '../../assets/Vector.svg';
import Cookies from "js-cookie";
import ClaimBlocksimg from '../../assets/storeItems/ClaimBlocks.png';
import money from '../../assets/storeItems/money.png';
import AddItemBtn from "../../components/Buttons/AddItem.jsx";
import {toast, ToastContainer} from "react-toastify";

export const StoreSection = () => {
    const [selected, setSelected] = useState('All');
    const user = Cookies.get('username');

    const addToCart = (item) => {
        if(!user) {
            toast.error("please login", {
                position: "bottom-right",
                className: "toast-message",
            });

        }else{
            const cart = JSON.parse(Cookies.get('cart') || '[]');
            cart.push(item);
            Cookies.set('cart', JSON.stringify(cart), {expires: 7});
            toast.success("Item added to the cart !", {
                position: "bottom-right",
                className: "toast-message",
            });
            setSelected(selected); // Trigger re-render
        }
    };

    return (
        <section className="min-h-dvh w-full flex flex-col gap-9 mt-32 items-center relative">
            <div className="gradient-overlay2 h-full"></div>
            <div className="z-20 w-11/12 sm:w-3/4 md:w-2/3 lg:w-1/2 h-16 py-2 flex gap-5 flex-wrap justify-center">
                {['All', 'ClaimBlocks', 'IngameCurrency', 'Kits', 'Homes'].map((category) => (
                    <button
                        key={category}
                        className={`px-6 animate-in transition-all duration-500 rounded-xl border ${selected === category ? 'bg-gray-100 text-black scale-110' : 'hover:bg-gray-100 hover:text-black'}`}
                        onClick={() => setSelected(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>
            {selected === 'ClaimBlocks' ? <ClaimBlocks addToCart={addToCart}/> : selected === 'IngameCurrency' ?
                <IngameCurrency addToCart={addToCart}/> : selected === 'Kits' ?
                    <Kits addToCart={addToCart}/> : selected === 'Homes' ? <Homes addToCart={addToCart}/> :
                        <All addToCart={addToCart}/>}
            <ToastContainer />

        </section>
    );
};

const All = ({addToCart}) => <ClaimBlocks addToCart={addToCart}/>;

const ClaimBlocks = ({addToCart}) => {
    const items = [
        {
            name: 'ClaimBlocks Basic',
            description: 'The Flex',
            price: 299,
        },
        {
            name: 'ClaimBlocks Pro',
            description: 'The Flex Pro',
            price: 499,
        },
        {
            name: 'ClaimBlocks Ultimate',
            description: 'The Ultimate Flex',
            price: 999,
        },
    ];

    return (
        <motion.div initial={{opacity: 0, scale: 0.9}} animate={{opacity: 1, scale: 1}}
                    transition={{duration: 0.5, ease: 'easeInOut'}}
                    className="min-h-[500px] w-11/12 sm:w-3/4 md:w-full lg:w-full p-5 flex flex-wrap gap-9 justify-center z-20">
            {items.map((item, index) => (
                <div key={index}
                     className="min-w-[280px] max-w-[300px] h-[400px] bg-[#2A2A2A] text-left border border-[#ceff00] rounded-3xl p-6 flex flex-col justify-between items-center shadow-lg transform transition-transform hover:scale-105 overflow-hidden">
                    <div className="w-full flex justify-center mb-4  py-2">
                        <img src={ClaimBlocksimg} alt={item.name}
                             className="w-24 h-24 "/>
                    </div>
                    <div className="text-center">
                        <h3 className="text-2xl text-[#00BC32] font-bold Plan-head">{item.name}</h3>
                        <p className="text-sm text-[#CFCFCF] Plan-head">{item.description}</p>
                        <h2 className="my-3 font-medium text-3xl Plan-head">₹{item.price}</h2>
                    </div>
                    <div className="space-y-2 text-center">
                        <p className="text-sm flex items-center justify-center Plan-head">
                        </p>
                        <p className="text-sm flex items-center justify-center Plan-head">
                            </p>
                        <p className="text-sm flex items-center justify-center Plan-head">
                         </p>
                    </div>
                    <AddItemBtn
                        className="mt-4 bg-[#00BC32] text-white Plan-head px-4 py-2 rounded-full shadow-md hover:bg-[#00a82d] transition-colors"
                        onClick={() => addToCart(item)}>Add to Cart
                    </AddItemBtn>
                </div>
            ))}
        </motion.div>
    );
};


const IngameCurrency = ({addToCart}) => {
    const items = [
        {
            name: 'In-Game Money',
            description: 'The Flex – A small boost to your balance.',
            price: 299,
        },
        {
            name: 'In-Game Money',
            description: 'The Flex Pro – A solid amount to upgrade your gameplay.',
            price: 499,
        },
        {
            name: 'In-Game Money',
            description: 'The Ultimate Flex – A massive boost for the best experience.',
            price: 999,
        },
    ]


    return (
        <motion.div initial={{opacity: 0, scale: 0.9}} animate={{opacity: 1, scale: 1}}
                    transition={{duration: 0.5, ease: 'easeInOut'}}
                    className="min-h-[500px] w-11/12 sm:w-3/4 md:w-full lg:w-full p-5 flex flex-wrap gap-9 justify-center z-20">
            {items.map((item, index) => (
                <div key={index}
                     className="min-w-[280px] max-w-[300px] h-[400px] bg-[#2A2A2A] text-left border border-[#ceff00] rounded-3xl p-6 flex flex-col justify-between items-center  shadow-lg transform transition-transform hover:scale-105 overflow-hidden">
                    <div className="w-full flex justify-center mb-4  py-2">
                        <img src={money} alt={item.name}
                             className="w-24 h-24 "/>
                    </div>
                    <div className="text-center">
                        <h3 className="text-2xl text-[#00BC32] font-bold Plan-head">{item.name}</h3>
                        <p className="text-sm text-[#CFCFCF] Plan-head">{item.description}</p>
                        <h2 className="my-3 font-medium text-3xl Plan-head">₹{item.price}</h2>
                    </div>
                    <div className="space-y-2 text-center">
                        <p className="text-sm flex items-center justify-center Plan-head">
                        </p>
                        <p className="text-sm flex items-center justify-center Plan-head">
                        </p>
                        <p className="text-sm flex items-center justify-center Plan-head">
                        </p>
                    </div>
                    <AddItemBtn

                        onClick={() => addToCart(item)}>Add to Cart
                    </AddItemBtn>
                </div>
            ))}
        </motion.div>
    );
};

const Kits = ({addToCart}) => {
    const items = [
        {
            name: 'ClaimBlocks Basic',
            description: 'The Flex',
            price: 299,
        },
        {
            name: 'ClaimBlocks Pro',
            description: 'The Flex Pro',
            price: 499,
        },
        {
            name: 'ClaimBlocks Ultimate',
            description: 'The Ultimate Flex',
            price: 999,
        },
    ];

    return (
        <motion.div initial={{opacity: 0, scale: 0.9}} animate={{opacity: 1, scale: 1}}
                    transition={{duration: 0.5, ease: 'easeInOut'}}
                    className="min-h-[500px] w-11/12 sm:w-3/4 md:w-full lg:w-full p-5 flex flex-wrap gap-9 justify-center z-20">
            {items.map((item, index) => (
                <div key={index}
                     className="min-w-[280px] max-w-[300px] h-[400px] bg-[#2A2A2A] text-left border border-[#ceff00] rounded-3xl p-6 flex flex-col justify-between items-center shadow-lg transform transition-transform hover:scale-105 overflow-hidden">
                    <div className="w-full flex justify-center mb-4  py-2">
                        <img src={ClaimBlocksimg} alt={item.name}
                             className="w-24 h-24 "/>
                    </div>
                    <div className="text-center">
                        <h3 className="text-2xl text-[#00BC32] font-bold Plan-head">{item.name}</h3>
                        <p className="text-sm text-[#CFCFCF] Plan-head">{item.description}</p>
                        <h2 className="my-3 font-medium text-3xl Plan-head">₹{item.price}</h2>
                    </div>
                    <div className="space-y-2 text-center">
                        <p className="text-sm flex items-center justify-center Plan-head">
                        </p>
                        <p className="text-sm flex items-center justify-center Plan-head">
                        </p>
                        <p className="text-sm flex items-center justify-center Plan-head">
                        </p>
                    </div>
                    <AddItemBtn
                        className="mt-4 bg-[#00BC32] text-white Plan-head px-4 py-2 rounded-full shadow-md hover:bg-[#00a82d] transition-colors"
                        onClick={() => addToCart(item)}>Add to Cart
                    </AddItemBtn>
                </div>
            ))}
        </motion.div>
    );
};

const Homes = ({addToCart}) => {
    const items = [
        {
            name: 'ClaimBlocks Basic',
            description: 'The Flex',
            price: 299,
        },
        {
            name: 'ClaimBlocks Pro',
            description: 'The Flex Pro',
            price: 499,
        },
        {
            name: 'ClaimBlocks Ultimate',
            description: 'The Ultimate Flex',
            price: 999,
        },
    ];

    return (
        <motion.div initial={{opacity: 0, scale: 0.9}} animate={{opacity: 1, scale: 1}}
                    transition={{duration: 0.5, ease: 'easeInOut'}}
                    className="min-h-[500px] w-11/12 sm:w-3/4 md:w-full lg:w-full p-5 flex flex-wrap gap-9 justify-center z-20">
            {items.map((item, index) => (
                <div key={index}
                     className="min-w-[280px] max-w-[300px] h-[400px] bg-[#2A2A2A] text-left border border-[#ceff00] rounded-3xl p-6 flex flex-col justify-between items-center shadow-lg transform transition-transform hover:scale-105 overflow-hidden">
                    <div className="w-full flex justify-center mb-4  py-2">
                        <img src={ClaimBlocksimg} alt={item.name}
                             className="w-24 h-24 "/>
                    </div>
                    <div className="text-center">
                        <h3 className="text-2xl text-[#00BC32] font-bold Plan-head">{item.name}</h3>
                        <p className="text-sm text-[#CFCFCF] Plan-head">{item.description}</p>
                        <h2 className="my-3 font-medium text-3xl Plan-head">₹{item.price}</h2>
                    </div>
                    <div className="space-y-2 text-center">
                        <p className="text-sm flex items-center justify-center Plan-head">
                        </p>
                        <p className="text-sm flex items-center justify-center Plan-head">
                        </p>
                        <p className="text-sm flex items-center justify-center Plan-head">
                        </p>
                    </div>
                    <AddItemBtn
                        className="mt-4 bg-[#00BC32] text-white Plan-head px-4 py-2 rounded-full shadow-md hover:bg-[#00a82d] transition-colors"
                        onClick={() => addToCart(item)}>Add to Cart
                    </AddItemBtn>
                </div>
            ))}
        </motion.div>
    );
};