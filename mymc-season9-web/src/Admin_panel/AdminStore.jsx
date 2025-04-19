import React, {useEffect, useState} from 'react'
import {AdminHeader} from "./AdminComponents/AdminHeader.jsx";
import {motion} from "framer-motion";
import {AdminFooter} from "./AdminComponents/AdminFooter.jsx";
import useAuthStore from "../store/authStore.js";
import {toast, ToastContainer} from "react-toastify";

export const fetchStoreItems = async (updatecategory) => {
    const response = await fetch(`http://localhost:5000/api/store/${updatecategory}`
    );
    return await response.json();
};


const AddStore = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const {addItem} = useAuthStore()

    const handleSubmit = (e) => {
        e.preventDefault();
        const descriptionArray = description.split('\n').map(item => item.trim()).filter(item => item !== '');
        addItem(name, descriptionArray, price, category)
        toast.success("Item added successfully!");
        setName('');
        setDescription('');
        setPrice('');
        setCategory('');
    };

    return (
        <div className="flex flex-col gap-5">
            <h1 className="text-white text-2xl font-bold">Add Premium Pack</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <input
                    type="text"
                    placeholder="Enter name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="p-3 rounded-xl bg-white/10 text-white focus:outline-none"
                    required
                />
                <textarea
                    placeholder="Enter description (one item per line)"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="p-3 rounded-xl bg-white/10 text-white focus:outline-none resize-none h-[200px]"
                    required
                />
                <input
                    type="number"
                    placeholder="Enter price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="p-3 rounded-xl bg-white/10 text-white focus:outline-none"
                    required
                />
                <input
                    type="text"
                    placeholder="Enter category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="p-3 rounded-xl bg-white/10 text-white focus:outline-none"
                    required
                />
                <button type="submit" className="bg-[#A782E5] text-white p-3 rounded-xl">Submit</button>
            </form>
        </div>
    );
};

const UpdateStore = () => {
    const [items, setItems] = useState([]);
    const [selected, setSelected] = useState('Claim Blocks');
    const { updateStoreItem ,deleteStoreItem} = useAuthStore();

    useEffect(() => {
        fetchStoreItems(selected).then(data => {
            // Add editable state to each item
            const updated = data.map(item => ({
                ...item,
                editName: item.name,
                editPrice: item.price,
                editDescription: item.description.join('\n'),
            }));
            setItems(updated);
        });
    }, [selected]);

    const handleChange = (index, field, value) => {
        const updatedItems = [...items];
        updatedItems[index][field] = value;
        setItems(updatedItems);
    };

    const handleUpdate = async (index,category) => {
        const item = items[index];
        const descriptionArray = item.editDescription
            .split('\n')
            .map(desc => desc.trim())
            .filter(desc => desc !== '');
        console.log(item._id, item.editName, descriptionArray, item.editPrice);

       await updateStoreItem(item._id, item.editName, descriptionArray, item.editPrice,category);
        toast.success(`${item.editName} updated successfully!`);
    };

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this item?")) {
            await deleteStoreItem(id);
            setItems(items.filter(item => item._id !== id));
            toast.success("Item deleted successfully!");
        }
    }

    return (
        <div className="flex flex-col gap-5">
            <h1 className="text-white text-2xl font-bold">Update Premium</h1>
            <div className="flex flex-col gap-3">
                <div className="w-full flex justify-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="flex gap-3 flex-wrap p-4 rounded-xl bg-[#121212] border border-[#2a2a2a] shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
                    >
                        {['Claim Blocks', 'Money', 'Kits', 'Home'].map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelected(category)}
                                className={`w-[100px] h-[50px] rounded-xl px-3 py-2 flex flex-col items-center justify-center text-xs font-medium tracking-wide transition-all duration-300
                                ${selected === category ? 'bg-gradient-to-b from-black to-[#4B0082] shadow-[0_0_30px_rgba(75,0,130,0.4)]' : 'bg-[#0d0d0d] text-gray-300 hover:bg-[#2c2c2c] hover:text-white hover:shadow-[0_0_8px_#00ff9966]'}`}
                            >
                                <span>{category}</span>
                            </button>
                        ))}
                    </motion.div>
                </div>

                <div className="flex flex-wrap justify-center gap-8 w-full px-4 z-20">
                    {items.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.8 }}
                            className="relative flex flex-col justify-between w-fit sm:w-[300px] h-[380px] p-6 rounded-2xl border transition-all duration-500 space-y-3 bg-[#0d0d0d] border-[#2a2a2a] hover:scale-105 hover:shadow-[0_0_30px_rgba(75,0,130,0.4)]"
                        >
                            <input
                                type="text"
                                value={item.editName}
                                onChange={(e) => handleChange(index, 'editName', e.target.value)}
                                className="p-3 rounded-xl bg-white/10 text-white focus:outline-none"
                            />

                            <input
                                type="number"
                                value={item.editPrice}
                                onChange={(e) => handleChange(index, 'editPrice', e.target.value)}
                                className="p-3 rounded-xl bg-white/10 text-white focus:outline-none"
                            />

                            <textarea
                                value={item.editDescription}
                                onChange={(e) => handleChange(index, 'editDescription', e.target.value)}
                                className="p-3 rounded-xl bg-white/10 text-white focus:outline-none resize-none h-[100px]"
                            />

                            <div className="mt-auto flex gap-2 w-full">
                                <button
                                    onClick={() => handleUpdate(index,item.category)}
                                    className="w-1/2 py-4 rounded-xl font-semibold transition-all text-sm bg-white text-black hover:bg-gray-200"
                                >
                                    Update
                                </button>
                                <button
                                    onClick={() => handleDelete(item._id)}
                                    className="w-1/2 py-4 rounded-xl font-semibold transition-all text-sm bg-red-900 text-white hover:bg-gray-200"
                                >
                                    Delete
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};


export const AdminStore = () => {
    const [selectedTab, setSelectedTab] = React.useState("AddPremium");

    return (
        <>
            <AdminHeader/>
            <main>
                <section className="min-h-screen bg-gradient-to-b from-black to-[#231D2D] w-full  flex  pt-36  pl-20">
                    <div className="w-full gap-20 flex items-start justify-center">
                        <motion.div
                            initial={{opacity: 0, scale: 0.9}}
                            whileInView={{opacity: 1, scale: 1}}
                            exit={{opacity: 0, scale: 0.9}}
                            transition={{duration: .8}}
                            animate={{y: 0}}
                            className="flex flex-col gap-5 w-[405px] min-h-[200px] p-8 rounded-2xl shadow-xl bg-[#554274]/10">
                            <button
                                onClick={() => setSelectedTab("AddPremium")}
                                className={`w-full h-10 flex items-center justify-start pl-6 rounded-3xl transition-all duration-500 ${selectedTab === "AddPremium" ? "bg-[#A782E5]" : ""}`}
                            >
                                Add Store Item
                            </button>
                            <button
                                onClick={() => setSelectedTab("UpdatePremium")}
                                className={`w-full h-10 flex items-center justify-start pl-6 rounded-3xl transition-all duration-500 ${selectedTab === "UpdatePremium" ? "bg-[#A782E5]" : ""}`}
                            >
                                Update Store
                            </button>
                        </motion.div>
                        <motion.div
                            initial={{opacity: 0, scale: 0.9}}
                            whileInView={{opacity: 1, scale: 1}}
                            exit={{opacity: 0, scale: 0.9}}
                            transition={{duration: .8}}
                            animate={{y: 0}}
                            className="flex flex-col shadow-xl rounded-2xl w-[1000px] p-8 min-h-[700px]  bg-[#554274]/10">
                            {selectedTab === "AddPremium" ? <AddStore/> : <UpdateStore/>}

                        </motion.div>
                    </div>
                    <ToastContainer/>
                </section>
            </main>
            <AdminFooter/>
        </>
    )
}
