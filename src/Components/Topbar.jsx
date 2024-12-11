import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";


const Topbar = () => {
    return (
        <div className="bg-[#131212] text-yellow-500 flex items-center justify-between p-4">
            <div className="Topbar-icon">
                <FaLocationDot />
                <span className='Topbar-text'>123 Main Street, City, Country</span>
            </div>
            <div className="Topbar-icon">
                <MdEmail />
                <span className='text-white'>info@example.com</span>
            </div>
            <div className="Topbar-icon">
                <IoCall />
                <span className='Topbar-text'>+123 456 7890</span>
            </div>
        </div>
    )
}

export default Topbar
