import React, { useState } from 'react';
import {links} from "../Data/Data"
const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <>
            <header className="header sticky top-0 left-0 right-0 z-[1000] bg-white flex items-center justify-between py-2 px-[9%] border-b border-primary">
            <a href="/" className="logo mr-auto text-2xl text-primaryGray font-semibold"> <i className="fas fa-lightbulb text-primary"></i> Educator </a>
                {isMenuOpen ?
                    <div onClick={() => setIsMenuOpen(!isMenuOpen)} id="menu-btn" className="fas fa-times text-2xl text-primaryGray cursor-pointer hidden"></div>
                    :
                    <div onClick={() => setIsMenuOpen(!isMenuOpen)} id="menu-btn" className="fas fa-bars text-2xl text-primaryGray cursor-pointer hidden"></div>
                }
                <nav className={`navbar ${isMenuOpen ? 'active' : ''}`}>
                    <ul className="">
                    {
                            links.map((link) => {
                                const { id, url, text } = link;
                                return (
                                    <li key={id} className="relative float-left">
                                        <a href={url} className="navLink">{text}</a>

                                    </li>
                                );
                            })
                        }
                    </ul>
                </nav>
            </header>
        </>
    );
};

export default Header;

