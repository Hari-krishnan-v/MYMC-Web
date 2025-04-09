import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaShoppingCart, FaUser } from "react-icons/fa";
import { motion } from "framer-motion";
import {
    DrawerBackdrop,
    DrawerBody,
    DrawerCloseTrigger,
    DrawerContent,
    DrawerHeader,
    DrawerRoot,
    DrawerTitle,
    DrawerTrigger,
} from "../../components/ui/Drawer.tsx";
import Cookies from "js-cookie";
import { DialogBody, DialogCloseTrigger, DialogContent, DialogRoot, DialogTrigger } from "../../components/ui/Dialog.tsx";
import Login from "./Login.jsx";
import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from "../../components/ui/Menu.tsx";
import { Cart } from "./Cart.jsx";
import MYMC_S9_Resorcepack from "../../assets/MYMC_S9_Resorcepack.png"
import useAuthStore from "../../store/authStore.js";

export const Header = () => {
    const [open, setOpen] = useState(false);
    const [cartCount, setCartCount] = useState(0);
    const { cart,user, isAuthenticated, logout } = useAuthStore();



    useEffect(() => {
         console.log(user)
        const updateCartCount = () => {
            setCartCount(cart.length);
        }
        updateCartCount();
        const interval = setInterval(updateCartCount, 1000);
        return () => clearInterval(interval);
    }, []);


    return (
        <motion.header
            initial={{ opacity: 0, top: -100 }}
            animate={{ opacity: 1, top: 8 }}
            exit={{ opacity: 0, top: -100 }}
            transition={{ duration: 1 }}
            className="fixed top left-0 right-0 flex justify-center items-center shadow-xl h-[65px] max-w-[1100px] rounded-3xl mx-auto z-50 "
            style={{ backgroundColor: 'rgba(37, 38, 41, 0.8)', backdropFilter: 'blur(10px)' }}
        >
            <nav className={'flex justify-between w-full px-7 items-center navbar'}>
                <div className="logo flex justify-center items-center ">
                    <img src={MYMC_S9_Resorcepack} width={100}/>
                    {/*<h2 className={'text-white text-[1.8rem]  font-bold mine-logo'}>MYMC</h2>*/}
                </div>
                <ul className={'list-none flex deactivate transition-all'}>
                    <li className={'mx-2'}>
                        <a className={'block text-[16px] px-3'} href={'/home'}>HOME</a>
                    </li>
                    <li className={'mx-2'}>
                        <a className={'block text-[16px] px-3'} href={'/home#MymcConnection'}>ABOUT US</a>
                    </li>
                    <li className={'mx-2'}>
                        <a className={'block text-[16px] px-3'} href={'/home#PremiumPacks'}>PACKS</a>
                    </li>
                    <li className={'mx-2'}>
                        <a className={'block text-[16px] px-3'} href={'/home#OurPartners'}>PARTNERS</a>
                    </li>
                    <li className={'mx-2'}>
                        <a className={'block text-[16px] px-3'} href={'/home#OurTeam'}>OUR TEAM</a>
                    </li>
                    <li className={'mx-2'}>
                        <a className={'block text-[16px] px-3'} href={'/home#Contact'}>CONTACT US</a>
                    </li>
                    <li className={'mx-2'}>
                        <Link className={'block text-[16px] px-3'} to={'/store'}>STORE</Link>
                    </li>
                </ul>
                <div className="flex gap-3  ">
                    {isAuthenticated ? (
                        <>
                            <MenuRoot>
                                <MenuTrigger asChild>
                                    <button className="text-white mx-2">
                                        <FaUser />
                                    </button>
                                </MenuTrigger>
                                <MenuContent className="p-[10px] rounded-[5px]">
                                    <MenuItem>{user}</MenuItem>
                                    <MenuItem
                                        value="delete"
                                        color="fg.error"
                                        _hover={{ bg: "bg.error", color: "fg.error" }}
                                        onClick={logout}
                                    >
                                        Logout...
                                    </MenuItem>
                                </MenuContent>
                            </MenuRoot>
                            <DrawerRoot>
                                <DrawerBackdrop />
                                <DrawerTrigger>
                                    <button className="text-white mx-2 relative">
                                        <FaShoppingCart />
                                        {cartCount > 0 && (
                                            <span className="absolute top-[-10px] right-[-10px] bg-red-500 text-white text-xs rounded-full px-2">
                                                {cartCount}
                                            </span>
                                        )}
                                    </button>
                                </DrawerTrigger>
                                <DrawerContent className={'p-[20px] flex flex-col gap-5'}>
                                    <DrawerHeader className={'text-2xl mine-logo font-bold py-3'}>
                                        <DrawerTitle>Cart</DrawerTitle>
                                    </DrawerHeader>
                                    <DrawerBody>
                                        <Cart />
                                    </DrawerBody>
                                    <DrawerCloseTrigger />
                                </DrawerContent>
                            </DrawerRoot>
                        </>
                    ) : (
                        <DialogRoot placement={"center"}>
                            <DialogTrigger asChild>
                                <button className="text-white mx-2">
                                    <FaUser />
                                </button>
                            </DialogTrigger>
                            <DialogContent className={'flex flex-col w-80  p-2'}>
                                <DialogBody className={''}>
                                    <Login />
                                </DialogBody>
                                <DialogCloseTrigger />
                            </DialogContent>
                        </DialogRoot>
                    )}
                    <DrawerRoot open={open} onOpenChange={(e) => setOpen(e.open)}>
                        <DrawerBackdrop />
                        <DrawerTrigger asChild>
                            <div className="icon text-2xl">
                                <FaBars />
                            </div>
                        </DrawerTrigger>
                        <DrawerContent>
                            <DrawerHeader>
                                <DrawerTitle>
                                    <div className={'flex my-7 justify-center items-center'}>
                                        <h2 className={'text-white font-bold mine-logo'}>MYMC</h2>
                                    </div>
                                </DrawerTitle>
                            </DrawerHeader>
                            <DrawerBody>
                                <ul className={'list-none h-1/2 flex-col justify-between transition-all'}>
                                    <li className={'my-6'}>
                                        <Link
                                            className={'block hover:text-[#62db40] text-center duration-700 transition text-[16px] px-3'}
                                            to={'/home'}>HOME</Link>
                                    </li>
                                    <li className={'my-6'}>
                                        <a className={'block hover:text-[#62db40] text-center duration-700 transition text-[16px] px-3'}
                                           href={'/home#MymcConnection'}>ABOUT US</a>
                                    </li>
                                    <li className={'my-6'}>
                                        <a className={'block hover:text-[#62db40] text-center duration-700 transition text-[16px] px-3'}
                                           href={'/home#PremiumPacks'}>PACKS</a>
                                    </li>
                                    <li className={'my-6'}>
                                        <a className={'block hover:text-[#62db40] text-center duration-700 transition text-[16px] px-3'}
                                           href={'/home#OurPartners'}>PARTNERS</a>
                                    </li>
                                    <li className={'my-6'}>
                                        <a className={'block hover:text-[#62db40] text-center duration-700 transition text-[16px] px-3'}
                                           href={'/home#OurTeam'}>OUR TEAM</a>
                                    </li>
                                    <li className={'my-6'}>
                                        <a className={'block hover:text-[#62db40] text-center duration-700 transition text-[16px] px-3'}
                                           href={'/home#Contact'}>CONTACT US</a>
                                    </li>
                                    <li className={'my-6'}>
                                        <Link
                                            className={'block hover:text-[#62db40] text-center duration-700 transition text-[16px] px-3'}
                                            to={'/store'}>STORE</Link>
                                    </li>

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