import React from 'react';

const Navbar = () => {

    return (
        <>
           <div className="px-6 container ">
                <div className="flex justify-between items-center py-7">
                <a href="/" className="logo mr-auto text-2xl text-primaryGray font-semibold"> <i className="fas fa-lightbulb text-primary"></i> Educator </a>
                    <nav className="hidden md:flex md:items-center md:space-x-10">
                        <a href="/" className="text-gray-700 hover:text-gray-900">Home</a>
                        <a href="/" className="text-gray-700 hover:text-gray-900">About</a>
                        <a href="/" className="text-gray-700 hover:text-gray-900">Blogs</a>
                        <a href="/" className="text-gray-700 hover:text-gray-900">Contact</a>
                        <a href="/" className="font-semibold text-primary capitalize hover:text-red-800">
                            Try now
                        </a>
                    </nav>
                    <button className=" md:hidden">
                        <div id="menu-btn" className="fas fa-bars cursor-pointer text-2xl text-primaryGray ml-4 hover:text-primary transition "></div>
                    </button>
                </div>
            </div>
        </>
    );
};

export default Navbar;