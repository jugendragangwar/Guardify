import React from 'react';
import Img from '../assets/contact-bg.jpg';

const Contact = () => {
    return (
        <section
            className="relative w-full h-screen bg-cover bg-center flex items-center justify-center"
            style={{ backgroundImage: `url(${Img})`, backgroundSize: 'cover', backgroundPosition: 'center',
            backgroundRepeat : "no-repeat",
         }}
        >
            {/* Background Overlay */}
            <div className="absolute inset-0 bg-black opacity-50"></div>

      
            <div className="relative z-10 bg-opacity-90 w-1/2">
                <h2 className="sub-Heading text-center text-white">GET IN TOUCH</h2>
                <div className="bottom-Line mx-auto"></div>
                <form className='mt-10'>
                    <div className="mt-6">
                        <input
                            type="text"
                            id="name"
                            className="w-full px-4 py-3 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-yellow-500"
                            placeholder="Enter your name"
                        />
                    </div>

                    <div className="mt-10">
                        <input
                            type="email"
                            id="email"
                            className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                            placeholder="Enter your email"
                        />
                    </div>

              
                    <div className="mt-10">
                        <textarea
                            id="message"
                            rows="4"
                            className="w-full px-4 py-5 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-yellow-500"
                            placeholder="Write your message"
                        ></textarea>
                    </div>

                    <div className='flex justify-center items-center mt-6'>
                    <button
                        type="submit"
                        className="all-Button"
                    >
                        Send Message
                    </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contact;
