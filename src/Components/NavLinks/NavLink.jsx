import React from 'react';

const NavLinks = () => {
    const links = ['Fav Creators', 'Merchandise', 'Brand', 'Digital'];

    return (
        <nav className="flex flex-wrap gap-9 items-center self-stretch my-auto text-2xl font-bold text-white min-w-[240px] w-[573px] max-md:max-w-full">
            {links.map((link, index) => (
                <a key={index} href={`#${link.toLowerCase().replace(' ', '-')}`} className="self-stretch my-auto">
                    {link}
                </a>
            ))}
        </nav>
    );
};

export default NavLinks;