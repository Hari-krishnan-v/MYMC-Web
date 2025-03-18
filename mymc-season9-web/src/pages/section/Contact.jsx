import React, { useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";

export const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const HandleSubmit = () => {
        if (!name || !email || !subject || !message) {
            toast.error("You need to fill up all !", {
                position: "bottom-right",
                className: "toast-message",
            });
        } else {
            toast.success("Request submitted successfully !", {
                position: "bottom-right",
                className: "toast-message",
            });
        }
    };

    return (
        <section className="min-h-screen flex flex-col gap-8 justify-center items-center relative" id="Contact">
            <div className="gradient-overlay2 h-full"></div>
            <motion.h2
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.7 }}
                transition={{ duration: .6, ease: "easeInOut" }}
                className="text-center font-bold text-white text-4xl sm:text-5xl md:text-6xl mine-logo z-20">
                <span className="text-[#0eff00] mine-logo">Contact</span> Us
            </motion.h2>

            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.7 }}
                transition={{ duration: .6, ease: "easeInOut", delay: 0.2 }}
                className="w-11/12 sm:w-3/4 md:w-2/4 h-3/4 mine-logo z-20 rounded-2xl flex flex-col gap-5 p-5">
                <div className="flex flex-col sm:flex-row gap-5">
                    <motion.input
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: 'easeInOut' }}
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full sm:w-1/2 h-14 border rounded-xl p-4"
                        placeholder="Player Name"
                    />
                    <motion.input
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.1 }}
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full sm:w-1/2 h-14 border rounded-xl p-4"
                        placeholder="Your Email"
                    />
                </div>
                <motion.input
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.2 }}
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full h-14 border rounded-xl p-4"
                    placeholder="Subject"
                />
                <motion.textarea
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.3 }}
                    rows={13}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Message"
                    className="w-full h-32 sm:h-48 md:h-64 rounded-xl p-4 border"
                ></motion.textarea>
                <motion.input
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.4 }}
                    type="submit"
                    onClick={HandleSubmit}
                    className="w-fit py-3 px-7 rounded-xl border cursor-pointer border-[#0eff00] active:scale-105 duration-700 ease-in-out"
                />
            </motion.div>
            <ToastContainer />
        </section>
    );
};