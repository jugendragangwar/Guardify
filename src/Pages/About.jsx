import React from 'react';
import Img from '../assets/about-img.jpg'; // Replace with your image path

const About = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center  min-h-[90vh] mx-4 md:container md:mx-auto mt-10 md:mt-20">
      <div className="lg:w-1/2 w-full h-96 lg:h-auto">
        <img src={Img} alt="About Us" className="w-full h-full object-cover" />
      </div>
      <div className="lg:w-1/2 mt-4 lg:mt-0 md:-ml-12 w-full bg-white p-8 lg:px-12 shadow-lg border sm:border-none border-gray-500">
        <h2 className="sub-Heading text-gray-900">Who Are We?</h2>
        <div className="bottom-Line"></div>
        <p className="text-gray-700 text-lg mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <button className="all-Button hover:text-black">
          Read More
        </button>
      </div>
    </section>
  );
};

export default About;
