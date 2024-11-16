import React from 'react';

const CategoryTabs = () => {
    const categories = ['Travel', 'Digital', 'Brand', 'Merch'];

    return (
        <div className="flex flex-col mt-12 w-full text-center max-md:mt-10 max-md:max-w-full">
            <nav className="flex flex-col w-full text-4xl font-bold text-white whitespace-nowrap max-md:max-w-full">
                <div className="flex flex-wrap gap-10 justify-between items-center px-6 py-7 w-full bg-black rounded-3xl min-h-[112px] max-md:px-5 max-md:max-w-full">
                    {categories.map((category, index) => (
                        <div
                            key={index}
                            className="flex flex-col justify-center items-center self-stretch my-auto group"
                        >
                            <div className="relative cursor-pointer">
                                {category}
                                <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-emerald-500 transition-all duration-300 group-hover:w-full group-hover:h-[4px]"></span>
                            </div>
                        </div>
                    ))}
                </div>
            </nav>
        </div>
    );
};

export default CategoryTabs;
