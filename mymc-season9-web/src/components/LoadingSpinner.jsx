import { motion } from "framer-motion";

const LoadingSpinner = () => {
    return (
        <div className='min-h-screen bg-gradient-to-b from-black to-[#231D2D] flex items-center justify-center relative overflow-hidden'>

            <motion.div
                className='w-16 h-16 border-4 border-t-4 border-t-green-500 border-green-200 rounded-full'
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
        </div>
    );
};

export default LoadingSpinner;