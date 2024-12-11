import React from 'react'
import Topbar from './Topbar'

const Navbar = () => {
    return (

        <>
            <Topbar />
            <nav className="flex justify-between items-center bg-[#0C0C0C] text-white p-4">
                <div>
                    <span className="text-xl font-bold tracking-wide">GOURDIFY</span>
                </div>
                <div className="hidden md:flex gap-8">
                    <a href="#" className="Nav-Item">Home</a>
                    <a href="#" className="Nav-Item">About</a>
                    <a href="#" className="Nav-Item">Services</a>
                    <a href="#" className="Nav-Item">Guards</a>
                    <a href="#" className="Nav-Item">Contact Us</a>
                </div>
            </nav>

        </>
    )
}

export default Navbar
