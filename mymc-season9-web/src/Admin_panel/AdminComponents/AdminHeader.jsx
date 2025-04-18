import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import useAuthStore from '../../store/authStore';

export const AdminHeader = () => {
    const { logoutAdmin , isAdminAuthenticated} = useAuthStore();
    const navigate = useNavigate();

    const handleLogout = () => {
        logoutAdmin();
        navigate("/admin");
    };

    return (
        <motion.header
            initial={{ opacity: 0, top: -100 }}
            animate={{ opacity: 1, top: 8 }}
            exit={{ opacity: 0, top: -100 }}
            transition={{ duration: 1 }}
            className={"flex items-center justify-center fixed w-full p-8"}
        >
            <nav>
                <ul className={"flex gap-8 text-[16px]"}>
                    <li className={"text-white opacity-60 transition-all ease-in-out duration-700 cursor-pointer hover:opacity-100"}>
                        <a href="/admin/dashboard">Home</a>
                    </li>
                    <li className={"text-white opacity-60 transition-all ease-in-out duration-700 cursor-pointer hover:opacity-100"}>
                        <a href="/admin/users">Users</a>
                    </li>
                    <li className={"text-white opacity-60 transition-all ease-in-out duration-700 cursor-pointer hover:opacity-100"}>
                        <a href="/admin/orders">Orders</a>
                    </li>
                    <li className={"text-white opacity-60 transition-all ease-in-out duration-700 cursor-pointer hover:opacity-100"}>
                        <a href="">Premium items</a>
                    </li>
                    <li className={"text-white opacity-60 transition-all ease-in-out duration-700 cursor-pointer hover:opacity-100"}>
                        <a href="/admin/announcement">Announcement</a>
                    </li>
                    { isAdminAuthenticated && (
                        <li
                            className={"text-white opacity-60 transition-all ease-in-out duration-700 cursor-pointer hover:opacity-100"}
                            onClick={handleLogout}
                        >
                            Logout
                        </li>
                    )}

                </ul>
            </nav>
        </motion.header>
    );
};