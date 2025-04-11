import React from 'react'
import {AdminHeader} from "./AdminComponents/AdminHeader.jsx";
import {AdminFooter} from "./AdminComponents/AdminFooter.jsx";

export const AdminLogin = () => {
    return (
        <>
            <AdminHeader/>
            <main>
                <section
                    className="min-h-screen bg-gradient-to-b from-black to-[#231D2D] w-full flex items-center pl-20 ">
                    <div className="flex flex-col items-start justify-center h-full gap-4  w-[700px]">
                        <h1 className="text-green-700 text-start text-4xl font-bold mine-logo">MYMC Online Store
                            Services</h1>
                        <p className="text-white opacity-60 text-lg">
                            Muttayi Minecraft is a Kerala-based Minecraft server with an amazing community and active
                            admins.
                        </p>
                    </div>
                </section>
            </main>
            <AdminFooter/>
        </>

    )
}
