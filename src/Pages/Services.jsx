import React from 'react';
import Img1 from '../assets/Home Security.png'
import Img2 from '../assets/Bodyguard.png'
import Img3 from '../assets/Office Security.png'

const Services = () => {
    // Data for services
    const servicesData = [
        {
            id: 1,
            image: Img1,
            category: 'Home Security',
            description: 'Minima consequatur architecto eaque assumenda ipsam itaque quia eum in doloribus debitis impedit ut minus tenetur corrupti excepturi ullam.',
        },
        {
            id: 2,
            image: Img3,
            category: 'Office Security',
            description: 'Minima consequatur architecto eaque assumenda ipsam itaque quia eum in doloribus debitis impedit ut minus tenetur corrupti excepturi ullam.',
        },
        {
            id: 3,
            image: Img2,
            category: 'Bodyguard',
            description: 'Minima consequatur architecto eaque assumenda ipsam itaque quia eum in doloribus debitis impedit ut minus tenetur corrupti excepturi ullam.',
        },
    ];

    return (
        <section className="py-12 bg-[#1C1C1C] text-center">
            <h1 className="sub-Heading text-white">Our Services</h1>
            <div className="bottom-Line mx-auto "></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {/* Dynamically render services */}
                {servicesData.map((service) => (
                    <div key={service.id} className="bg-white p-6">
                        <img
                            src={service.image}
                            alt={service.category}
                            className="w-[25%] object-cover rounded-md mb-4 mx-auto"
                        />
                        <span className="text-black uppercase text-xl font-bold">{service.category}</span>
                        <p className="text-gray-700 my-4 mx-6 text-center">{service.description}</p>
                        <div className="flex items-center justify-center">
                            <button className="all-Button hover:text-black ">
                                Learn More
                            </button>
                        </div>
                    </div>
                ))}
            </div>
          
        </section>
    );
};

export default Services;
