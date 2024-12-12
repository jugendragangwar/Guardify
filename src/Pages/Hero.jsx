import React from 'react';
import Heroimg from '../assets/hero-bg.jpg';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false,
        arrows: false,
    };

    const slides = [
        {
            title: "YOUR SAFETY,",
            subtitle: "Your protection is our priority. We are committed to ensuring your well-being every step of the way."
        },
        {
            title: "EXCELLENCE,",
            subtitle: "Building trust through dedication and delivering excellence in every service we provide."
        },
        {
            title: "PEACE OF MIND,",
            subtitle: "Experience reliability and care with solutions designed to safeguard your future."
        }
    ];

    return (
        <section
            className="relative w-full py-24 sm:py-0 sm:h-screen bg-cover bg-center flex items-center justify-center"
            style={{ backgroundImage: `url(${Heroimg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 w-full max-w-6xl px-4">
                <Slider {...settings}>
                    {slides.map((slide, index) => (
                        <div key={index} className="flex flex-col items-center justify-center   text-white">
                            <h1 className="text-4xl md:text-6xl font-bold mb-4">{slide.title}</h1>
                            <h3 className='text-4xl md:text-6xl font-bold mb-4 text-yellow-500'>OUR RESPONSBILITY</h3>
                            <h2 className="text-lg md:text-2xl mb-6 sm:w-1/2">{slide.subtitle}</h2>
                            <div className="flex gap-4">
                                <a
                                    href="#read-more"
                                    className="all-Button"
                                >
                                    Read More
                                </a>
                                <a
                                    href="#get-quote"
                                    className="py-2 px-6 bg-transparent text-white font-semibold hover:bg-yellow-500 border-2 border-yellow-500 hover:text-black transition duration-300"
                                >
                                    Get A Quote
                                </a>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default Hero;
