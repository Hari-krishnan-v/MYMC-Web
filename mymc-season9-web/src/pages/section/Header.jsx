import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {FaBars, FaBoxOpen, FaShoppingCart, FaSignOutAlt, FaUser} from "react-icons/fa";
import { motion } from "framer-motion";
import {
    DrawerBackdrop,
    DrawerBody,
    DrawerCloseTrigger,
    DrawerContent,
    DrawerHeader,
    DrawerTitle,
    DrawerRoot,
    DrawerTrigger,
} from "../../components/ui/Drawer.tsx";
import Cookies from "js-cookie";
import {
    DialogBody,
    DialogCloseTrigger,
    DialogContent,
    DialogRoot,
    DialogTrigger
} from "../../components/ui/Dialog.tsx";
import Login from "./Login.jsx";
import {
    MenuContent,
    MenuItem,
    MenuRoot,
    MenuSeparator,
    MenuTrigger
} from "../../components/ui/Menu.tsx";
import { Cart } from "./Cart.jsx";
import MYMC_S9_Resorcepack from "../../assets/MYMC_S9_Resorcepack.png"
import useAuthStore from "../../store/authStore.js";

export const Header = () => {
    const [open, setOpen] = useState(false);
    const [cartCount, setCartCount] = useState(0);
    const { cart, user, isAuthenticated, logout } = useAuthStore();

    useEffect(() => {
        const updateCartCount = () => {
            setCartCount(cart.length);
        };
        updateCartCount();
        const interval = setInterval(updateCartCount, 1000);
        return () => clearInterval(interval);
    }, [cart]);

    return (
        <motion.header
            initial={{ opacity: 0, top: -100 }}
            animate={{ opacity: 1, top: 8 }}
            exit={{ opacity: 0, top: -100 }}
            transition={{ duration: 1 }}
            className="fixed top left-0 right-0 flex justify-center items-center shadow-xl h-[65px] max-w-[1100px] rounded-3xl mx-auto mt-5 z-50 bg-black/90 backdrop-blur-md"
        >
            <nav className="flex justify-between items-center w-full px-6 lg:px-10 navbar">
                {/* Logo */}
                <div className="flex items-center">
                    <img src={MYMC_S9_Resorcepack} width={100} alt="MYMC Logo"/>
                </div>

                {/* Navigation Links */}
                <ul className="hidden lg:flex list-none gap-7 items-center text-white">
                    <li><a href="/home#home" className="hover:text-[#ff9800] transition">HOME</a></li>
                    <li><a href="/home#MymcConnection" className="hover:text-[#ff9800] transition">ABOUT US</a></li>
                    <li><a href="/home#PremiumPacks" className="hover:text-[#ff9800] transition">PACKS</a></li>
                    <li><a href="/home#OurTeam" className="hover:text-[#ff9800] transition">OUR TEAM</a></li>
                    <li><a href="/home#Contact" className="hover:text-[#ff9800] transition">CONTACT US</a></li>
                    <li><Link to="/store" className="hover:text-[#ff9800] transition">STORE</Link></li>
                </ul>

                {/* Right Section */}
                <div className="flex items-center gap-3">
                    {isAuthenticated ? (
                        <>
                            {/* User Menu */}
                            <MenuRoot>
                                <MenuTrigger asChild>
                                    <button className="flex items-center gap-2 text-white border border-[#ff9800] px-3 py-1.5 rounded-xl">
                                        <motion.img
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.9 }}
                                            transition={{ duration: 0.3 }}
                                            src={user.minecraft.avatar}
                                            alt="User Avatar"
                                            className="w-fit h-10 rounded-full object-cover"
                                        />
                                        <span className="text-sm font-semibold">#{user.username}</span>
                                    </button>
                                </MenuTrigger>
                                <MenuContent className="p-2 rounded-md bg-black flex flex-col gap-1">
                                    <MenuItem className="text-white hover:bg-[#ff9800] rounded-lg px-4 py-2 flex items-center gap-2">
                                        <FaUser className="text-[#ff9800]" />
                                        {user.username}
                                    </MenuItem>
                                    <MenuSeparator />
                                    <MenuItem className="text-white hover:bg-[#ff9800] rounded-lg px-4 py-2 flex items-center gap-2">
                                        <FaBoxOpen className="text-[#ff9800]" />
                                        <Link to="/orders" className={""}>Orders</Link>
                                    </MenuItem>
                                    <MenuItem
                                        onClick={logout}
                                        className="text-red-500 hover:bg-red-500 hover:text-white rounded-lg px-4 py-2 transition flex items-center gap-2"
                                    >
                                        <FaSignOutAlt />
                                        Logout
                                    </MenuItem>
                                </MenuContent>
                            </MenuRoot>

                            {/* Cart Drawer */}
                            <DrawerRoot>
                                <DrawerBackdrop />
                                <DrawerTrigger>
                                    <button className="relative text-white ">
                                        <FaShoppingCart size={20} />
                                        {cartCount > 0 && (
                                            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1.5">
                                                {cartCount}
                                            </span>
                                        )}
                                    </button>
                                </DrawerTrigger>
                                <DrawerContent className="p-5">
                                    <DrawerHeader className="text-2xl font-bold text-white">Cart</DrawerHeader>
                                    <DrawerBody>
                                        <Cart />
                                    </DrawerBody>
                                    <DrawerCloseTrigger />
                                </DrawerContent>
                            </DrawerRoot>
                        </>
                    ) : (
                        // Login Button
                        <DialogRoot placement="center">
                            <DialogTrigger asChild>
                                <button className="text-white border border-[#ff9800] px-4 py-2 rounded-xl hover:bg-[#ff9800] hover:text-black transition">
                                    Sign In
                                </button>
                            </DialogTrigger>
                            <DialogContent className="w-80 p-2">
                                <DialogBody>
                                    <Login />
                                </DialogBody>
                                <DialogCloseTrigger />
                            </DialogContent>
                        </DialogRoot>
                    )}

                    {/* Mobile Drawer */}
                    <DrawerRoot open={open} onOpenChange={(e) => setOpen(e.open)}>
                        <DrawerBackdrop />
                        <DrawerTrigger asChild>
                            <button className="text-white text-2xl lg:hidden">
                                <FaBars />
                            </button>
                        </DrawerTrigger>
                        <DrawerContent className="bg-black p-5 text-white">
                            <DrawerHeader>
                                <DrawerTitle className="text-center text-2xl font-bold">MYMC</DrawerTitle>
                            </DrawerHeader>
                            <DrawerBody>
                                <ul className="flex flex-col gap-5 text-center mt-4">
                                    <li><Link to="/home" className="hover:text-[#62db40]">HOME</Link></li>
                                    <li><a href="/home#MymcConnection" className="hover:text-[#62db40]">ABOUT US</a></li>
                                    <li><a href="/home#PremiumPacks" className="hover:text-[#62db40]">PACKS</a></li>
                                    <li><a href="/home#OurTeam" className="hover:text-[#62db40]">OUR TEAM</a></li>
                                    <li><a href="/home#Contact" className="hover:text-[#62db40]">CONTACT US</a></li>
                                    <li><Link to="/store" className="hover:text-[#62db40]">STORE</Link></li>
                                </ul>
                            </DrawerBody>
                            <DrawerCloseTrigger />
                        </DrawerContent>
                    </DrawerRoot>
                </div>
            </nav>
        </motion.header>
    );
};
