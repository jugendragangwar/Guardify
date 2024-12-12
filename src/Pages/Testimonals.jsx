import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Img1 from '../assets/t1.jpg';
import Img2 from '../assets/t2.jpg';
import Img3 from '../assets/t3.jpg';

const testimonials = [
    {
        id: 1,
        name: 'Minim Veniam',
        image: Img1, 
        text: `Lorem ipsum dolor sit amet, non odio tincidunt ut ante, lorem a euismod suspendisse vel, sed quam nulla mauris iaculis.
                Erat eget vitae malesuada, tortor tincidunt porta lorem lectus.`
    },
    {
        id: 2,
        name: 'Lorem Ipsum',
        image: Img2,
        text: `Lorem ipsum dolor sit amet, non odio tincidunt ut ante, lorem a euismod suspendisse vel, sed quam nulla mauris iaculis.
                Erat eget vitae malesuada, tortor tincidunt porta lorem lectus.`
    },
    {
        id: 3,
        name: 'John Doe',
        image: Img3,
        text: `E Lorem ipsum dolor sit amet, non odio tincidunt ut ante, lorem a euismod suspendisse vel, sed quam nulla mauris iaculis.
                Erat eget vitae malesuada, tortor tincidunt porta lorem lectus.`
    }
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [fade, setFade] = useState(true);

    const handleNext = () => {
        setFade(false);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
            setFade(true);
        }, 300); 
    };

    const handlePrevious = () => {
        setFade(false);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
            setFade(true);
        }, 500); 
    };

    return (
        <section className="py-12 bg-white text-center mx-4 md:container md:mx-auto mt-10 md:mt-20">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">WHAT IT SAYS OUR CLIENTS</h2>
            <div className="bottom-Line mx-auto mb-8"></div>

            <div className="relative max-w-4xl mx-auto">
               
                <button
                    onClick={handlePrevious}
                    className="absolute top-1/4 sm:top-1/3 left-0 transform -translate-y-1/2 bg-black text-white w-10 h-10 flex items-center justify-center rounded-full shadow-md hover:bg-gray-800 transition-all duration-300 ease-in-out"
                >
                    <FaChevronLeft className="text-xl" />
                </button>
                <div
                    className={`text-center transition-opacity duration-500 ease-in-out ${fade ? 'opacity-100' : 'opacity-0'}`}
                >
                    <img
                        src={testimonials[currentIndex].image}
                        alt={testimonials[currentIndex].name}
                        className="w-32 h-32 mx-auto rounded-full mb-4"
                    />
                    <h3 className="text-xl font-semibold text-gray-800 mb-2 ">
                        {testimonials[currentIndex].name}
                    </h3>
                    <p className="text-gray-700 mb-8 mx-auto md:w-2/3 text-center">
                        {testimonials[currentIndex].text}
                    </p>
                </div>
                <button
                    onClick={handleNext}
                    className="absolute top-1/4 sm:top-1/3 right-0 transform -translate-y-1/2 bg-black text-white w-10 h-10 flex items-center justify-center rounded-full shadow-md hover:bg-gray-800 transition-all duration-300 ease-in-out"
                >
                    <FaChevronRight className="text-xl" />
                </button>
            </div>
        </section>
    );
};

export default Testimonials;
