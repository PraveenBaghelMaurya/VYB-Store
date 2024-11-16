import React from 'react';

const HowToList = () => {
    return (
        <section className="grow shrink text-4xl font-bold text-white min-w-[240px] w-[1200px] max-md:max-w-full">
            <h2 className="text-center">How to list?</h2>

            <div className="flex flex-col grow shrink pt-12 text-4xl text-white min-w-[240px] w-[960px] max-md:max-w-full">
                <div className="flex relative flex-col pb-4 w-full min-h-[497px] max-md:max-w-full">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/44c32d554bafd4dffc31f22d589cd38343d5722567f8e48a9fb23ad3b52f15c9?placeholderIfAbsent=true&apiKey=81cb913614704511878cada97e5eac5c" alt="Background" className="object-cover absolute inset-0 size-full" />
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/4f826710a9457169ee126e5fba0cbeee826aa45eeb5dc963b172a88e7f0f87fb?placeholderIfAbsent=true&apiKey=81cb913614704511878cada97e5eac5c" alt="Foreground" className="object-contain z-10 mt-0 w-full aspect-[2.9] max-md:max-w-full" />
                    <p className="relative self-center mt-28 max-md:mt-10 max-md:max-w-full">
                        You Curate Experience, We Make It Happen
                    </p>
                </div>
            </div>
        </section>
    );
};

export default HowToList;
