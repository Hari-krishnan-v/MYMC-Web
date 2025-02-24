import React, { useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
        <section className="min-h-screen flex flex-col gap-5 justify-center items-center relative" id="Contact">
            <div className="gradient-overlay2 h-full"></div>
            <h2 className="text-center font-bold text-white text-4xl sm:text-5xl md:text-6xl mine-logo z-20">
                <span className="text-[#0eff00] mine-logo">Contact</span> Us
            </h2>

            <div className="w-11/12 sm:w-3/4 md:w-2/4 h-3/4 mine-logo z-20 rounded-2xl flex flex-col gap-5 p-5">
                <div className="flex flex-col sm:flex-row gap-5">
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full sm:w-1/2 h-14 border rounded-xl p-4"
                        placeholder="Player Name"
                    />
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full sm:w-1/2 h-14 border rounded-xl p-4"
                        placeholder="Your Email"
                    />
                </div>
                <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full h-14 border rounded-xl p-4"
                    placeholder="Subject"
                />
                <textarea
                    rows={13}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Message"
                    className="w-full h-32 sm:h-48 md:h-64 rounded-xl p-4 border"
                ></textarea>
                <input
                    type="submit"
                    onClick={HandleSubmit}
                    className="w-fit py-3 px-7 rounded-xl border border-[#0eff00] active:scale-105 duration-700 ease-in-out"
                />
            </div>
            <ToastContainer />
        </section>
    );
};