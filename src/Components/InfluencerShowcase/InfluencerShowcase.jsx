import React from 'react';

const InfluencerShowcase = () => {
    const influencers = [
        { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/d733a7c4b674e45e99e95a44428d3a21c42f0c1872fbd1b8ac4fc769b45a35d8?placeholderIfAbsent=true&apiKey=81cb913614704511878cada97e5eac5c", alt: "Influencer 1" },
        { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/6c38d23a544ff12288ae569475a2c490640d070b8702d34fe8ae221dbdf6077a?placeholderIfAbsent=true&apiKey=81cb913614704511878cada97e5eac5c", alt: "Influencer 2" },
        { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/2280aa5eddc95d23a2d158f416eafb647b0db0d0a2da2d83c9be798a1e4d7967?placeholderIfAbsent=true&apiKey=81cb913614704511878cada97e5eac5c", alt: "Influencer 3" },
        { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/c6d5d91d702d01b6b2bbe869122949fd3640b2e9c20ff3d9c7bb3bf456a9e391?placeholderIfAbsent=true&apiKey=81cb913614704511878cada97e5eac5c", alt: "Influencer 4" }
    ];

    return (
        <section className="flex flex-col mt-12 w-full max-md:mt-10 max-md:max-w-full">
            <h2 className="self-start text-4xl font-bold text-center text-emerald-500 max-md:max-w-full">
                Our Influencers
            </h2>
            <div className="flex overflow-hidden flex-wrap gap-9 items-center mt-9 w-full max-md:max-w-full">
                {influencers.map((influencer, index) => (
                    <div key={index} className="flex flex-col grow shrink self-stretch my-auto min-w-[240px] w-[215px]">
                        <img loading="lazy" src={influencer.src} alt={influencer.alt} className="object-contain w-full aspect-square rounded-[368px]" />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default InfluencerShowcase;