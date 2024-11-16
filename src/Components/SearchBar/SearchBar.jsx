import React from 'react';

const SearchBar = () => {
    return (
        <div className="flex gap-8 justify-center items-center self-stretch my-auto min-w-[240px] w-[290px]">
            <div className="flex overflow-hidden gap-2.5 self-stretch px-4 py-4 my-auto rounded-3xl border border-white border-solid bg-slate-50 min-w-[240px] w-[290px]">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/59b01a4f6b8241debb678878da7379dda37b9f62db66a32caafc2c42f2d9723c?placeholderIfAbsent=true&apiKey=81cb913614704511878cada97e5eac5c" alt="Search icon" className="object-contain shrink-0 w-5 aspect-square" />
                <input
                    type="text"
                    placeholder="Search Creator/Product"
                    className="grow shrink w-56 bg-transparent border-none outline-none font-bold"
                    aria-label="Search Creator or Product"
                />
            </div>
        </div>
    );
};

export default SearchBar;