import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaUser, FaShoppingCart } from "react-icons/fa";
import { motion } from "framer-motion";
import {
    DrawerActionTrigger,
    DrawerBackdrop,
    DrawerBody,
    DrawerCloseTrigger,
    DrawerContent,
    DrawerHeader, DrawerRoot,
    DrawerTitle,
    DrawerTrigger,
} from "../../components/ui/drawer";
import Cookies from "js-cookie";
import {
    DialogBody,
    DialogCloseTrigger,
    DialogContent,
    DialogHeader,
    DialogRoot,
    DialogTitle,
    DialogTrigger
} from "../../components/ui/dialog";
import Login from "./Login.jsx";


export const Header = () => {
    const [open, setOpen] = useState(false);
    const [isAuthenticated, setAuthenticated] = useState(false);
    const username = Cookies.get("username");

    useEffect(() => {
        setAuthenticated(!!username);
    }, [username]);

    const handleLogout = () => {
        Cookies.remove("username");
        setAuthenticated(false);
        window.location.reload(); // Ensure UI updates correctly
    };


    return (
        <motion.header
            initial={{ opacity: 0, top: -100 }}
            animate={{ opacity: 1, top: 8 }}
            exit={{ opacity: 0, top: -100 }}
            transition={{ duration: .8 }}
            className="fixed top left-0 right-0 flex justify-center items-center shadow-xl h-[65px] max-w-[1100px] rounded-3xl mx-auto z-50"
            style={{ backgroundColor: 'rgba(37, 38, 41, 0.8)', backdropFilter: 'blur(10px)' }}
        >
            <nav className={'flex justify-between w-full px-7 items-center navbar'}>
                <div className="logo">
                    <h2 className={'text-white text-[2rem] ml-3 font-bold mine-logo'}>MYMC</h2>
                </div>
                <ul className={'list-none flex deactivate transition-all'}>
                    <li className={'mx-2'}>
                        <a className={'block text-[16px] px-3'} href={'/#home'}>HOME</a>
                    </li>
                    <li className={'mx-2'}>
                        <a className={'block text-[16px] px-3'} href={'/#MymcConnection'}>ABOUT US</a>
                    </li>
                    <li className={'mx-2'}>
                        <a className={'block text-[16px] px-3'} href={'/#PremiumPacks'}>PACKS</a>
                    </li>
                    <li className={'mx-2'}>
                        <a className={'block text-[16px] px-3'} href={'/#OurPartners'}>PARTNERS</a>
                    </li>
                    <li className={'mx-2'}>
                        <a className={'block text-[16px] px-3'} href={'/#OurTeam'}>OUR TEAM</a>
                    </li>
                    <li className={'mx-2'}>
                        <a className={'block text-[16px] px-3'} href={'/#Contact'}>CONTACT US</a>
                    </li>
                    <li className={'mx-2'}>
                        <Link className={'block text-[16px] px-3'} to={'/store'}>STORE</Link>
                    </li>
                    <li className={'mx-2'}>
                        <a className={'block text-[16px] px-3'} href={'/#News'}> NEWS</a>
                    </li>
                </ul>
                <div className="flex items-center">
                    {isAuthenticated ? (
                        <>
                            <Link to="/profile" className="text-white mx-2">
                                <FaUser />
                            </Link>
                            <Link to="/cart" className="text-white mx-2">
                                <FaShoppingCart />
                            </Link>
                        </>
                    ) : (
                        <DialogRoot placement={"center"}>
                            <DialogTrigger asChild>
                                <button className="text-white mx-2">
                                    <FaUser/>
                                </button>
                            </DialogTrigger>
                            <DialogContent className={' flex flex-col w-80 h-80 p-2 '} >
                                <DialogBody className={' '} >
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
                                            to={'#home'}>HOME</Link>
                                    </li>
                                    <li className={'my-6'}>
                                        <a className={'block hover:text-[#62db40] text-center duration-700 transition text-[16px] px-3'}
                                           href={'/#MymcConnection'}>ABOUT US</a>
                                    </li>
                                    <li className={'my-6'}>
                                        <a className={'block hover:text-[#62db40] text-center duration-700 transition text-[16px] px-3'}
                                           href={'/#PremiumPacks'}>PACKS</a>
                                    </li>
                                    <li className={'my-6'}>
                                        <a className={'block hover:text-[#62db40] text-center duration-700 transition text-[16px] px-3'}
                                           href={'/#OurPartners'}>PARTNERS</a>
                                    </li>
                                    <li className={'my-6'}>
                                        <a className={'block hover:text-[#62db40] text-center duration-700 transition text-[16px] px-3'}
                                           href={'/#OurTeam'}>OUR TEAM</a>
                                    </li>
                                    <li className={'my-6'}>
                                        <a className={'block hover:text-[#62db40] text-center duration-700 transition text-[16px] px-3'}
                                           href={'/#Contact'}>CONTACT US</a>
                                    </li>
                                    <li className={'my-6'}>
                                        <Link
                                            className={'block hover:text-[#62db40] text-center duration-700 transition text-[16px] px-3'}
                                            to={'/store'}>STORE</Link>
                                    </li>
                                    <li className={'my-6'}>
                                        <a className={'block hover:text-[#62db40] text-center duration-700 transition text-[16px] px-3'}
                                           href={'/#News'}>NEWS</a>
                                    </li>
                                </ul>
                            </DrawerBody>
                            <DrawerCloseTrigger/>
                        </DrawerContent>
                    </DrawerRoot>
                </div>
            </nav>
        </motion.header>
    );
};