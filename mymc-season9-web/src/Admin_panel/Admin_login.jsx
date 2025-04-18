import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AdminHeader } from "./AdminComponents/AdminHeader.jsx";
import { AdminFooter } from "./AdminComponents/AdminFooter.jsx";
import useAuthStore from "../store/authStore";

export const AdminLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const { adminLogin, loading ,error } = useAuthStore();


    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await adminLogin(username, password);
            if (!res?.success) {
                setError(res?.message || 'Invalid credentials. Please try again.');
            }
        } catch (err) {
            setError(err.message || 'Failed to login. Please try again.');
        }
    };

    return (
        <>
            <AdminHeader />
            <main>
                <section className="min-h-screen bg-gradient-to-b from-black to-[#231D2D] w-full flex items-center justify-center">
                    <div className="bg-[#1F1F1F] p-8 rounded-lg shadow-lg w-[400px]">
                        <h1 className="text-green-700 text-center text-3xl font-bold mb-6">Admin Login</h1>
                        {error && (
                            <p className="text-red-500 text-sm mb-4">{error}</p>
                        )}
                        <form onSubmit={handleLogin} className="flex flex-col gap-4">
                            <div>
                                <label htmlFor="username" className="block text-white text-sm mb-2">Username</label>
                                <input
                                    type="text"
                                    id="username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    className="w-full p-2 rounded bg-[#2A2A2A] text-white focus:outline-none"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="block text-white text-sm mb-2">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full p-2 rounded bg-[#2A2A2A] text-white focus:outline-none"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-green-700 text-white py-2 rounded hover:bg-green-600 transition"
                            >
                                {loading ? 'Loading...' : 'Login'}
                            </button>
                        </form>
                    </div>
                </section>
            </main>
            <AdminFooter />
        </>
    );
};