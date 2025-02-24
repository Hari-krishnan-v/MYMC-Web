import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const InfiniteScrollingLogosAnimation = () => {
    const logosRef = useRef(null);

    useEffect(() => {
        const ul = logosRef.current;
        ul.insertAdjacentHTML('afterend', ul.outerHTML);
        ul.nextSibling.setAttribute('aria-hidden', 'true');
    }, []);

    return (
        <section className="h-[50vh] w-full flex items-center justify-center relative">
            <div className="gradient-overlay2 h-full"></div>
            <div className="relative font-inter antialiased">
                <main className="relative min-h-screen flex flex-col justify-center overflow-hidden">
                    <div className="w-full max-w-5xl mx-auto px-4 md:px-6 py-24">
                        <div className="text-center">
                            <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
                                <motion.ul
                                    ref={logosRef}
                                    className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none"
                                    animate={{ x: ['100%', '-100%'] }}
                                    transition={{ repeat: Infinity, duration: 40, ease: 'linear' }}
                                >
                                    <li className="w-[200px] sm:w-[250px] md:w-[300px] lg:w-[350px] h-[150px] sm:h-[200px] md:h-[250px] lg:h-[300px]">
                                        <img src="https://cruip-tutorials.vercel.app/logo-carousel/facebook.svg" alt="Facebook" className="w-full h-full object-contain" />
                                    </li>
                                    <li className="w-[200px] sm:w-[250px] md:w-[300px] lg:w-[350px] h-[150px] sm:h-[200px] md:h-[250px] lg:h-[300px]">
                                        <img src="https://cruip-tutorials.vercel.app/logo-carousel/disney.svg" alt="Disney" className="w-full h-full object-contain" />
                                    </li>
                                    <li className="w-[200px] sm:w-[250px] md:w-[300px] lg:w-[350px] h-[150px] sm:h-[200px] md:h-[250px] lg:h-[300px]">
                                        <img src="https://cruip-tutorials.vercel.app/logo-carousel/airbnb.svg" alt="Airbnb" className="w-full h-full object-contain" />
                                    </li>
                                    <li className="w-[200px] sm:w-[250px] md:w-[300px] lg:w-[350px] h-[150px] sm:h-[200px] md:h-[250px] lg:h-[300px]">
                                        <img src="https://cruip-tutorials.vercel.app/logo-carousel/apple.svg" alt="Apple" className="w-full h-full object-contain" />
                                    </li>
                                    <li className="w-[200px] sm:w-[250px] md:w-[300px] lg:w-[350px] h-[150px] sm:h-[200px] md:h-[250px] lg:h-[300px]">
                                        <img src="https://cruip-tutorials.vercel.app/logo-carousel/spark.svg" alt="Spark" className="w-full h-full object-contain" />
                                    </li>
                                    <li className="w-[200px] sm:w-[250px] md:w-[300px] lg:w-[350px] h-[150px] sm:h-[200px] md:h-[250px] lg:h-[300px]">
                                        <img src="https://cruip-tutorials.vercel.app/logo-carousel/samsung.svg" alt="Samsung" className="w-full h-full object-contain" />
                                    </li>
                                    <li className="w-[200px] sm:w-[250px] md:w-[300px] lg:w-[350px] h-[150px] sm:h-[200px] md:h-[250px] lg:h-[300px]">
                                        <img src="https://cruip-tutorials.vercel.app/logo-carousel/quora.svg" alt="Quora" className="w-full h-full object-contain" />
                                    </li>
                                    <li className="w-[200px] sm:w-[250px] md:w-[300px] lg:w-[350px] h-[150px] sm:h-[200px] md:h-[250px] lg:h-[300px]">
                                        <img src="https://cruip-tutorials.vercel.app/logo-carousel/sass.svg" alt="Sass" className="w-full h-full object-contain" />
                                    </li>
                                </motion.ul>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </section>
    );
};

export default InfiniteScrollingLogosAnimation;