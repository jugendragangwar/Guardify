import React, { useState } from 'react';
import Img1 from '../assets/t1.jpg'
import Img2 from '../assets/t2.jpg'
import Img3 from '../assets/t3.jpg'

const testimonials = [
    {
        id: 1,
        name: 'Minim Veniam',
        image: Img1,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.'
    },
    {
        id: 2,
        name: 'Lorem Ipsum',
        image: Img2, 
        text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    },
    {
        id: 3,
        name: 'John Doe',
        image: Img3,
        text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.'
    }
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section className="py-12 bg-white text-center">
            <h2 className="sub-Heading">WHAT IT SAYS OUR CLIENTS</h2>
            <div className="bottom-Line mx-auto"></div>

            <div className="relative max-w-5xl mx-auto">
                <div className="text-center">
                    <img
                        src={testimonials[currentIndex].image}
                        alt={testimonials[currentIndex].name}
                        className="w-32 h-32 mx-auto rounded-full mb-4"
                    />
                    <h3 className="text-xl font-semibold text-gray-800">{testimonials[currentIndex].name}</h3>
                    <p className="text-gray-600 font-semibold mt-4">{testimonials[currentIndex].text}</p>
                </div>

                <button
                    onClick={handlePrevious}
                    className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black text-white w-10 h-10 flex items-center justify-center rounded-full shadow-md hover:bg-gray-800 transition"
                >
                    &lt;
                </button>
                <button
                    onClick={handleNext}
                    className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black text-white w-10 h-10 flex items-center justify-center rounded-full shadow-md hover:bg-gray-800 transition"
                >
                    &gt;
                </button>
            </div>
        </section>
    );
};

export default Testimonials;
