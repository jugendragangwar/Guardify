import React from 'react';
import Img1 from '../assets/t1.jpg';
import Img2 from '../assets/t2.jpg';
import Img3 from '../assets/t3.jpg';

const Team = () => {
    return (
        <section className="py-12 text-center">
            <h1 className="sub-Heading text-slate-900">Our Guards</h1>
            <div className="bottom-Line mx-auto "></div>
            <p className="text-gray-700 mb-8 w-2/3 mx-auto">
                Lorem ipsum dolor sit amet, non odio tincidunt ut ante, lorem a euismod suspendisse vel, sed quam nulla mauris iaculis.
                Erat eget vitae malesuada, tortor tincidunt porta lorem lectus.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8  max-w-6xl mx-auto">
                {/* Team Member 1 */}
                <div className="relative">
                    <img src={Img1} alt="Martin Anderson" className="w-full  object-cover " />
                    <div className="absolute bottom-0 left-0 w-full bg-black opacity-50 p-4 text-white text-center">
                        <p className="text-xl font-semibold">Martin Anderson</p>
                        <p className="text-lg">Supervisor</p>
                    </div>
                </div>

                {/* Team Member 2 */}
                <div className="relative">
                    <img src={Img2} alt="Denny Butler" className="w-full  object-cover " />
                    <div className="absolute bottom-0 left-0 w-full bg-black opacity-50 p-4 text-white text-center">
                        <p className="text-xl font-semibold">Denny Butler</p>
                        <p className="text-lg">Supervisor</p>
                    </div>
                </div>

                {/* Team Member 3 */}
                <div className="relative">
                    <img src={Img3} alt="Nathan Mcpherson" className="w-full object-cover " />
                    <div className="absolute bottom-0 left-0 w-full bg-black opacity-50 p-4 text-white text-center">
                        <p className="text-xl font-semibold">Nathan Mcpherson</p>
                        <p className="text-lg">Supervisor</p>
                    </div>
                </div>
            </div>
            <button className="all-Button hover:text-black mt-10 ">
              View All
            </button>
        </section>
    );
};

export default Team;
