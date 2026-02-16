import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Youtube, Mail, Phone, MapPin, Heart, ExternalLink } from 'lucide-react';

const Footer = () => {
    const socialLinks = [
        { icon: Facebook, href: 'https://www.facebook.com/College-of-Engineering-Trivandrum-Alumni-Association-595120010597674', label: 'Facebook' },
        { icon: Twitter, href: 'https://twitter.com/@CetaaSecretary', label: 'Twitter' },
        { icon: Linkedin, href: 'https://www.linkedin.com/school/college-of-engineering-trivandrum', label: 'LinkedIn' },
        { icon: Youtube, href: 'https://www.youtube.com/channel/UCJI_IdamgOdlw8ZcyDpQeRg', label: 'YouTube' },
    ];

    return (
        <footer className="bg-secondary text-white pt-16 pb-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold via-primary to-navy"></div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-navy/30 via-transparent to-transparent"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                    {/* About */}
                    <div className="md:col-span-2">
                        <h3 className="text-2xl font-extrabold mb-4 flex items-center">
                            <span className="text-gradient">CETAA</span>
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-sm">
                            The Official Alumni Network of College of Engineering Trivandrum.
                            Connecting past, present, and future generations of engineering excellence since 1939.
                        </p>
                        {/* Social Icons */}
                        <div className="flex space-x-3">
                            {socialLinks.map((social, idx) => (
                                <a
                                    key={idx}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    className="w-10 h-10 bg-white/5 hover:bg-gold/20 border border-white/10 hover:border-gold/30 rounded-xl flex items-center justify-center text-gray-400 hover:text-gold transition-all duration-300"
                                >
                                    <social.icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-sm font-bold mb-5 text-gold uppercase tracking-widest">Quick Links</h3>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><Link to="/" className="hover:text-white transition flex items-center"><ExternalLink className="w-3 h-3 mr-2" /> Home</Link></li>
                            <li><Link to="/renovation" className="hover:text-white transition flex items-center"><ExternalLink className="w-3 h-3 mr-2" /> Renovation</Link></li>
                            <li><a href="https://alumni.cet.ac.in" target="_blank" rel="noopener noreferrer" className="hover:text-white transition flex items-center"><ExternalLink className="w-3 h-3 mr-2" /> Alumni Portal</a></li>
                            <li><a href="https://alumni.cet.ac.in/dir.dz" target="_blank" rel="noopener noreferrer" className="hover:text-white transition flex items-center"><ExternalLink className="w-3 h-3 mr-2" /> Directory</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-sm font-bold mb-5 text-gold uppercase tracking-widest">Contact</h3>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li className="flex items-start">
                                <MapPin size={16} className="mr-2 mt-0.5 flex-shrink-0 text-gold" />
                                <span>CET Alumni Association,<br />College of Engineering,<br />Trivandrum, Kerala - 695016</span>
                            </li>
                            <li className="flex items-center">
                                <Phone size={16} className="mr-2 text-gold" />
                                <span>+91 471 2515502</span>
                            </li>
                            <li className="flex items-center">
                                <Mail size={16} className="mr-2 text-gold" />
                                <span>secretary@cetaa.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 mt-14 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
                    <p>© {new Date().getFullYear()} CETAA. All rights reserved.</p>
                    <p className="flex items-center gap-1">
                        Made with <Heart className="w-3 h-3 text-primary fill-primary" /> for the CETAA Internship Competition
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
