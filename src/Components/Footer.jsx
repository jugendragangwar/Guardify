import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';


const Footer = () => {
    return (
        <footer className="bg-[#0C0C0C] text-white py-8">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <h3 className="text-xl font-bold mb-4">GOURDIFY</h3>
                    <p className="text-sm">
                        dolor sit amet, consectetur magna aliqua. Ut enim ad minim veniam,
                        quisdotenpor incididunt r
                    </p>
                </div>
                <div>
                    <h3 className="text-xl font-bold mb-4">Useful Links</h3>
                    <ul>
                        <li>Item 1</li>
                        <li>Item 1</li>
                        <li>Item 1</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                    <p className="text-sm mb-2">
                        <span className="font-bold">Address:</span> Lorem ipsum dolor sit amet,
                    </p>
                    <p className="text-sm mb-2">
                        <span className="font-bold">Call:</span> +01 1234567890
                    </p>
                    <p className="text-sm">
                        <span className="font-bold">Email:</span> demo@gmail.com
                    </p>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-4 mt-8 flex justify-between items-center border-t-2 pt-6">
                <div className="flex items-center gap-4">
                    <h3 className="text-lg font-bold">Newsletter</h3>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="py-2 px-4 outline-yellow-500 text-black"
                    />
                    <button className="all-Button">
                        Subscribe
                    </button>
                </div>
                <div className="flex gap-4">
                    <FaFacebook size={40} className="p-1 border-2 border-gray-300 rounded-full hover:bg-blue-500 hover:text-white transition-all" />
                    <FaTwitter size={40} className="p-1 border-2 border-gray-300 rounded-full hover:bg-blue-400 hover:text-white transition-all" />
                    <FaYoutube size={40} className="p-1 border-2 border-gray-300 rounded-full hover:bg-red-500 hover:text-white transition-all" />
                    <FaInstagram size={40} className="p-1 border-2 border-gray-300 rounded-full hover:bg-pink-500 hover:text-white transition-all" />
                </div>

            </div>

            <div className="text-center mt-6 text-sm">
                <p>&copy; 2024 All Rights Reserved. Design by Jugendra Gangwar</p>
            </div>
        </footer>
    );
};

export default Footer;
