import React, { useState } from 'react';

const UserProfile = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');

    const handleToggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleSelectOption = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    return (
        <div className="relative flex items-center gap-5 px-6 py-2 my-auto bg-white rounded-2xl">
            {/* User Avatar */}
            <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/95e591085f11ff2d279b50f5b3aca6f8979bfca4138fb215d2907387f6385938?placeholderIfAbsent=true&apiKey=81cb913614704511878cada97e5eac5c"
                alt="User avatar"
                className="object-contain w-[30px] h-[30px] rounded-full"
            />
            {/* Dropdown Toggle */}
            <div
                onClick={handleToggleDropdown}
                className="cursor-pointer flex items-center gap-2 text-lg font-semibold"
            >
                <span>{selectedOption}</span>
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/63cb7b7e16ce73456399638046f5662b604fc8c9d7ceec854a22e9a98abb8fa4?placeholderIfAbsent=true&apiKey=81cb913614704511878cada97e5eac5c"
                    alt="Dropdown arrow"
                    className="object-contain w-[13px] h-auto"
                />
            </div>

            {/* Dropdown Options */}
            {isOpen && (
                <div className="absolute top-full left-0 mt-2 bg-white border border-gray-300 shadow-lg rounded-lg w-full z-10">
                    <ul className="flex flex-col p-2">
                        <li
                            onClick={() => handleSelectOption('Profile')}
                            className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                        >
                            Profile
                        </li>
                        <li
                            onClick={() => handleSelectOption('Dashboard')}
                            className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                        >
                            Dashboard
                        </li>
                        <li
                            onClick={() => handleSelectOption('My Story')}
                            className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                        >
                            My Story
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default UserProfile;
