import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";


const Topbar = () => {
    return (
        <>
            <div className="bg-[#131212] hidden text-yellow-500 md:flex items-center justify-between p-4">
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


            <div className="bg-[#131212] md:hidden">
                <marquee behavior="scroll" direction="left">
                    <div className="text-yellow-500 flex items-center justify-between p-4 gap-6">
                        <div className="Topbar-icon flex items-center gap-2">
                            <FaLocationDot />
                            <span className="Topbar-text">123 Main Street, City, Country</span>
                        </div>
                        <div className="Topbar-icon flex items-center gap-2">
                            <MdEmail />
                            <span className="text-white">info@example.com</span>
                        </div>
                        <div className="Topbar-icon flex items-center gap-2">
                            <IoCall />
                            <span className="Topbar-text">+123 456 7890</span>
                        </div>
                    </div>
                </marquee>
            </div>

        </>
    )
}

export default Topbar
