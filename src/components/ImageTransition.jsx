import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
    { src: '/images/cet/cet-main-building.jpeg', caption: 'Heritage Since 1939' },
    { src: '/images/cet/cet-library.jpeg', caption: 'Knowledge Hub' },
    { src: '/images/cet/cet-campus-stairs.jpeg', caption: 'Steps to Success' },
    { src: '/images/cet/cet-college-building.jpeg', caption: 'Engineering Excellence' },
];

const ImageTransition = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative h-[60vh] overflow-hidden bg-navy">
            <AnimatePresence mode="wait">
                <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0"
                >
                    <img
                        src={images[index].src}
                        alt={images[index].caption}
                        className="w-full h-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent" />
                </motion.div>
            </AnimatePresence>

            <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="text-center px-4">
                    <motion.span
                        key={`caption-${index}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="inline-block text-gold font-bold text-sm tracking-[0.3em] uppercase mb-4"
                    >
                        {images[index].caption}
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-7xl font-black text-white leading-tight"
                    >
                        Where Legends <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">
                            Are Made
                        </span>
                    </motion.h2>
                </div>
            </div>
        </section>
    );
};

export default ImageTransition;
