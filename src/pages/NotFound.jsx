import React from 'react';
import { Link } from 'react-router-dom';
import { Home, AlertTriangle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const NotFound = () => {
    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <Navbar />
            <main className="flex-grow flex items-center justify-center px-4 py-24 pt-32">
                <div className="text-center max-w-lg mx-auto">
                    <div className="inline-flex items-center justify-center p-4 bg-red-100 rounded-full mb-6">
                        <AlertTriangle className="w-12 h-12 text-red-600" />
                    </div>
                    <h1 className="text-6xl font-black text-navy mb-2">404</h1>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Page Not Found</h2>
                    <p className="text-gray-600 mb-8">
                        Oops! The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                    </p>
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 bg-navy text-white px-6 py-3 rounded-xl font-bold hover:bg-opacity-90 transition-all hover:-translate-y-1 shadow-lg shadow-navy/20"
                    >
                        <Home size={20} />
                        Back to Home
                    </Link>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default NotFound;
