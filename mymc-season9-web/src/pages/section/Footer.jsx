import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = ({playerCount}) => {
    return (
        <footer className="text-white py-10 px-4 text-center">
            <div className="container mx-auto grid md:grid-cols-3 gap-6 text-sm">
                {/* Quick Links */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeInOut' }}
                    className="flex flex-col gap-2"
                >
                    <h3 className="text-lg head-font text-[20px] font-bold mb-2 text-start">Quick Links</h3>
                    <ul className="space-y-1 flex flex-col gap-1 text-[15px] text-[#adb7be] text-start">
                        <li><a href="#" className="hover:text-yellow-400">Home</a></li>
                        <li><a href="#" className="hover:text-yellow-400">How to Join</a></li>
                        <li><a href="#" className="hover:text-yellow-400">Server Features</a></li>
                        <li><a href="#" className="hover:text-yellow-400">Community & Forum</a></li>
                        <li><a href="/store" className="hover:text-yellow-400">Store</a></li>
                        <li><a href="#" className="hover:text-yellow-400">Contact Us</a></li>
                        <li><a href="/terms-and-conditions" className="hover:text-yellow-400">Terms and Conditions</a></li>
                        <li><a href="/privacy-policy" className="hover:text-yellow-400">Privacy Policy</a></li>
                        <li><a href="/refund-policy" className="hover:text-yellow-400">Refund Policy</a></li>
                    </ul>
                </motion.div>

                {/* Server Info */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.1 }}
                    className="flex flex-col gap-2"
                >
                    <h3 className="text-lg head-font text-[20px] font-bold mb-2 text-start">Server Info</h3>
                    <div className="flex flex-col gap-2 text-[15px] text-[#adb7be] text-start">
                        <p><span className="font-semibold">Server IP : </span><a href="#" className="rainbow-text"> play.muttayi.world</a></p>
                        <p><span className="font-semibold">Version :</span>  1.18 - 1.21.4</p>
                        <p><span className="font-semibold">Uptime:</span> 24/7</p>
                        <p><span className="font-semibold">Players Online:</span> <span className="text-green-400">{playerCount}</span></p>
                    </div>
                </motion.div>

                {/* Socials */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeInOut' ,delay:0.2 }}
                >
                    <h3 className="text-lg head-font text-[20px] font-bold mb-2 text-start">Follow Us</h3>
                    <div className="flex space-x-4">
                        <a href="https://discord.gg/mymc" className="text-blue-500 hover:text-white bg-slate-700 p-1 rounded-xl text-2xl"><FaDiscord /></a>
                        <a href="#" className="text-blue-400 hover:text-white bg-slate-700 p-1 rounded-xl text-2xl"><FaInstagram /></a>
                        <a href="#" className="text-red-500 hover:text-white bg-slate-700 p-1 rounded-xl text-2xl"><FaYoutube /></a>
                    </div>
                    <p className="mt-2 text-start">Email: mymc0786@gmail.com</p>
                </motion.div>
            </div>

            {/* Bottom Section */}
            <div className="border-t border-gray-700 mt-6 pt-4 text-xs text-gray-400">
                <p>&copy; 2025 Muttayi Minecraft. All Rights Reserved.</p>
                {/*<p>Not affiliated with Mojang Studios or Microsoft.</p>*/}
                {/*<p>Designed with ❤️ by the Muttayi Minecraft Team.</p>*/}
            </div>
        </footer>
    );
};

export default Footer;