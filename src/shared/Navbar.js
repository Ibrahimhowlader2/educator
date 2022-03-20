import React from 'react';

const Navbar = () => {

    return (
        <>
           <div class="px-6 container ">
                <div class="flex justify-between items-center py-7">
                <a href="/" class="logo mr-auto text-2xl text-primaryGray font-semibold"> <i class="fas fa-lightbulb text-primary"></i> Educator </a>
                    <nav class="hidden md:flex md:items-center md:space-x-10">
                        <a href="/" class="text-gray-700 hover:text-gray-900">Home</a>
                        <a href="/" class="text-gray-700 hover:text-gray-900">About</a>
                        <a href="/" class="text-gray-700 hover:text-gray-900">Blogs</a>
                        <a href="/" class="text-gray-700 hover:text-gray-900">Contact</a>
                        <a href="/" class="font-semibold text-primary capitalize hover:text-red-800">
                            Try now
                        </a>
                    </nav>
                    <button class=" md:hidden">
                        <div id="menu-btn" class="fas fa-bars cursor-pointer text-2xl text-primaryGray ml-4 hover:text-primary transition "></div>
                    </button>
                </div>
            </div>
        </>
    );
};

export default Navbar;