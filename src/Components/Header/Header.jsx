import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Icons for hamburger and close button
import SearchBar from '../SearchBar/SearchBar';
import NavLinks from '../NavLinks/NavLink';
import UserProfile from '../UserProfile/UserProfile';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="flex justify-between items-center bg-neutral-900 w-full h-[63px] px-8 max-w-[1200px] mx-auto">
            {/* Container for Logo and Search */}
            <div className="flex justify-between items-center gap-6 flex-1">
                <div className="flex items-center gap-6">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/83327bf2b5cd87a43f755586848be560579995438091825ca5760f6dbe4b5976?placeholderIfAbsent=true&apiKey=81cb913614704511878cada97e5eac5c"
                        alt="VybStore Logo"
                        className="object-contain w-[90px] md:w-[105px] h-auto"
                    />
                    <SearchBar />
                </div>
            </div>

            {/* Hamburger Menu for Mobile */}
            <div className="md:hidden">
                <button
                    onClick={toggleMenu}
                    aria-label="Toggle navigation"
                    className="text-white text-2xl"
                >
                    {isMenuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Navigation Links */}
            <nav
                className={`${
                    isMenuOpen ? 'flex' : 'hidden'
                } flex-col md:flex md:flex-row gap-4 absolute md:static top-[63px] left-0 bg-neutral-900 w-full md:w-auto items-center md:items-start z-50 p-4 md:p-0`}
            >
                <NavLinks />
            </nav>

            {/* User Profile */}
            <div className="hidden md:block">
                <UserProfile />
            </div>
        </header>
    );
};

export default Header;
