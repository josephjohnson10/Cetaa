import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, GraduationCap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Renovation Project', path: '/renovation' },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
            ? 'bg-white/70 backdrop-blur-xl shadow-lg border-b border-white/20'
            : 'bg-transparent'
            }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    {/* Logo */}
                    <Link to="/" className="flex items-center group">
                        <img
                            src="/images/logo.jpeg"
                            alt="CETAA Logo"
                            className="h-10 w-10 rounded-lg object-contain bg-white/90"
                        />
                        <span className={`ml-2.5 text-xl font-extrabold tracking-tight transition-colors duration-300 ${scrolled ? 'text-navy' : 'text-white'
                            }`}>
                            CETAA
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center space-x-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${isActive(link.path)
                                    ? scrolled ? 'text-navy bg-navy/5' : 'text-white bg-white/10'
                                    : scrolled ? 'text-gray-600 hover:text-navy hover:bg-gray-100/50' : 'text-white/70 hover:text-white hover:bg-white/10'
                                    }`}
                            >
                                {link.name}
                                {isActive(link.path) && (
                                    <motion.div
                                        layoutId="nav-indicator"
                                        className={`absolute bottom-0 left-4 right-4 h-0.5 rounded-full ${scrolled ? 'bg-gold' : 'bg-gold'}`}
                                    />
                                )}
                            </Link>
                        ))}
                        <Link
                            to="/renovation"
                            className="ml-4 bg-gradient-to-r from-primary to-red-600 text-white px-5 py-2 rounded-lg text-sm font-bold hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 transform hover:-translate-y-0.5"
                        >
                            Donate Now
                        </Link>
                    </div>

                    {/* Mobile Hamburger */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className={`md:hidden p-2 rounded-lg transition-colors ${scrolled ? 'text-navy hover:bg-gray-100' : 'text-white hover:bg-white/10'
                            }`}
                    >
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white/90 backdrop-blur-2xl border-t border-white/20 shadow-xl"
                    >
                        <div className="px-4 pt-3 pb-4 space-y-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className={`block px-4 py-3 rounded-xl text-base font-medium transition-all ${isActive(link.path)
                                        ? 'text-navy bg-navy/5 border-l-4 border-gold'
                                        : 'text-gray-600 hover:text-navy hover:bg-gray-50'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                to="/renovation"
                                onClick={() => setIsOpen(false)}
                                className="block mt-3 px-4 py-3 text-center bg-gradient-to-r from-primary to-red-600 text-white rounded-xl font-bold shadow-lg"
                            >
                                Donate Now
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
