import React from 'react'

export const AdminFooter = () => {
    return (
        <footer className="w-full bg-black py-6">
            <div className="flex justify-between items-center px-8 text-gray-400">
                <p>&copy; 2025 MYMC. All rights reserved.</p>
                <ul className="flex gap-4">
                    <li className="cursor-pointer hover:text-white">Privacy Policy</li>
                    <li className="cursor-pointer hover:text-white">Terms of Service</li>
                    <li className="cursor-pointer hover:text-white">Contact Us</li>
                </ul>
            </div>
        </footer>
    )
}
