import React from 'react';

const Hero = () => {
    return (
        <section className="flex flex-wrap gap-9 justify-center items-center mt-12 w-full max-md:mt-10 max-md:max-w-full">
            <div className="flex flex-col flex-1 shrink self-stretch my-auto font-bold basis-0 min-w-[240px] max-md:max-w-full">
                <h1 className="flex flex-wrap gap-3 items-start w-full text-6xl text-black whitespace-nowrap max-md:max-w-full max-md:text-4xl">
                    <span className="gap-2.5 self-stretch p-2.5 bg-white rounded-xl max-md:text-4xl">One</span>
                    <span className="gap-2.5 self-stretch p-2.5 bg-white rounded-xl max-md:text-4xl">Stop</span>
                    <span className="gap-2.5 self-stretch p-2.5 bg-white rounded-xl min-w-[240px] max-md:text-4xl">Marketplace</span>
                    <div className="flex overflow-hidden gap-3 items-center min-w-[240px] max-md:max-w-full max-md:text-4xl">
                        <span className="self-stretch p-2.5 my-auto bg-white rounded-xl max-md:text-4xl">For</span>
                        <span className="gap-2.5 self-stretch p-2.5 my-auto bg-emerald-500 rounded-xl min-w-[240px] max-md:text-4xl">Influencers</span>
                    </div>
                </h1>
                <p className="mt-11 text-4xl text-white max-md:mt-10 max-md:max-w-full">
                    "Unleash Your Influence: Sell Itineraries, Build Your Brand, Create Merch, and Share Content – All in One Hub."
                </p>
                <div className="flex gap-9 items-center self-start mt-11 text-lg font-semibold max-md:mt-10">
                    <button className="overflow-hidden self-stretch px-6 py-4 my-auto text-black bg-emerald-500 rounded-2xl max-md:px-5 hover:bg-emerald-600 hover:text-white transition duration-300">
                        Demo Store
                    </button>
                    <button className="flex overflow-hidden justify-center items-center self-stretch px-6 py-4 my-auto text-white rounded-2xl max-md:px-5 hover:bg-blue-600 hover:scale-105 transition duration-300">
                        Join Waitlist
                    </button>
                </div>
            </div>
            <ImageGrid />
        </section>
    );
};

const ImageGrid = () => {
    const images = [
        ["https://cdn.builder.io/api/v1/image/assets/TEMP/d7b9bb1dc9bf74a228af7367b9968c59debdc2c1c4837066720a7ed9b737dadd?placeholderIfAbsent=true&apiKey=81cb913614704511878cada97e5eac5c", "https://cdn.builder.io/api/v1/image/assets/TEMP/5ff744d92227030d9e5de0397a95d84b5aaa7a3a011f944ff0e61d2789750ba6?placeholderIfAbsent=true&apiKey=81cb913614704511878cada97e5eac5c", "https://cdn.builder.io/api/v1/image/assets/TEMP/6678394455680a90afadcc44a09b34a6acb345e04eccbf8ddfec590bc5a7817e?placeholderIfAbsent=true&apiKey=81cb913614704511878cada97e5eac5c"],
        ["https://cdn.builder.io/api/v1/image/assets/TEMP/28aa27827f2cf403dca55213fc96352b54271098dee92579070c766fd2a9d8fa?placeholderIfAbsent=true&apiKey=81cb913614704511878cada97e5eac5c", "https://cdn.builder.io/api/v1/image/assets/TEMP/64fc8a3cd69c22f2b63a3a417e02f37b131014cc14e6cd3141d89fa856edd9ac?placeholderIfAbsent=true&apiKey=81cb913614704511878cada97e5eac5c", "https://cdn.builder.io/api/v1/image/assets/TEMP/78f58ad814e7d9d1fb7c98a215e55cbe2dc4743badddfb103903fcb46bb296e0?placeholderIfAbsent=true&apiKey=81cb913614704511878cada97e5eac5c"]
    ];

    return (
        <div className="flex flex-wrap flex-1 shrink gap-4 items-start self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full">
            {images.map((column, colIndex) => (
                <div key={colIndex} className="flex flex-col flex-1 shrink basis-0 min-w-[240px]">
                    {column.map((src, imgIndex) => (
                        <img
                            key={imgIndex}
                            loading="lazy"
                            src={src}
                            alt={`Grid image ${colIndex * 3 + imgIndex + 1}`}
                            className={`object-contain w-full rounded-2xl ${imgIndex > 0 ? 'mt-2' : ''} ${imgIndex === 1 ? 'aspect-[0.81]' : imgIndex === 2 ? 'aspect-[2.3]' : 'aspect-[1.72]'}`}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Hero;