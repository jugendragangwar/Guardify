import React, { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import Topbar from './Topbar';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false); 

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); 
    };

    return (
        <>
            <Topbar />
            <nav className="flex justify-between items-center bg-[#0C0C0C] text-white p-4">
                <div>
                    <span className="text-xl font-bold tracking-wide text-yellow-500">GOURDIFY</span>
                </div>
                <div className="md:hidden" onClick={toggleMenu}>
                    <FaBars className="text-white w-8 h-8 border-yellow-500 border-2 p-1" />
                </div>
                <div className="hidden md:flex gap-8">
                    <a href="#" className="Nav-Item">Home</a>
                    <a href="#" className="Nav-Item">About</a>
                    <a href="#" className="Nav-Item">Services</a>
                    <a href="#" className="Nav-Item">Guards</a>
                    <a href="#" className="Nav-Item">Contact Us</a>
                </div>
            </nav>
            <div
                className={`fixed top-16 z-50 left-0 w-full h-full bg-[#0C0C0C] text-white p-4 flex flex-col  gap-4 md:hidden transition-transform duration-500 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
            >
                <div className="absolute top-4 right-4 cursor-pointer" onClick={toggleMenu}>
                    <FaTimes className="text-white w-8 h-8 border-yellow-500 border-2 p-1" />
                </div>
                <div>
                    <span className="text-xl font-bold tracking-wide text-yellow-500">GOURDIFY</span>
                </div>
                <a href="#" className="Nav-Item" onClick={toggleMenu}>Home</a>
                <a href="#" className="Nav-Item" onClick={toggleMenu}>About</a>
                <a href="#" className="Nav-Item" onClick={toggleMenu}>Services</a>
                <a href="#" className="Nav-Item" onClick={toggleMenu}>Guards</a>
                <a href="#" className="Nav-Item" onClick={toggleMenu}>Contact Us</a>
            </div>
        </>
    );
};

export default Navbar;
