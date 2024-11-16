import React from 'react';
import FeatureCard from '../FeatureCard/FeatureCard';

const Features = () => {
    const features = [
        {
            title: 'Trusted By Influencers',
            description: 'A trusted platform for influencers to grow and earn.',
            imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/6ef603d8173de36ff6e823279c63d4030a442ed52e456715c739e224bf2d9ebe?placeholderIfAbsent=true&apiKey=81cb913614704511878cada97e5eac5c',
            imageAlt: 'Trusted By Influencers illustration',
        },
        {
            title: 'Authentic Payment Partner',
            description: 'Reliable, fast, and secure payments you can trust',
            imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/c35263694f1535fcc6ecef538953f4433b7899712ad425f8638e7b330c5c6c57?placeholderIfAbsent=true&apiKey=81cb913614704511878cada97e5eac5c',
            imageAlt: 'Authentic Payment Partner illustration'
        },
        {
            title: 'Secured Data',
            description: 'Advanced security measures to protect your valuable data',
            imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/47d0c0dc5d9a10b8a28988dc0638fbec03de0908319cdaccdbe39d9d9c6a33ca?placeholderIfAbsent=true&apiKey=81cb913614704511878cada97e5eac5c',
            imageAlt: 'Secured Data illustration'
        },
        {
            title: 'Monetize Your Influence',
            description: 'Seamlessly turn your influence into consistent revenue',
            imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/59502d9d3b7c79e2d45dd2f9b0c18f202a72902e2387a8820e1c7cb2f7db2ca9?placeholderIfAbsent=true&apiKey=81cb913614704511878cada97e5eac5c',
            imageAlt: 'Monetize Your Influence illustration'
        }
    ];

    return (
        <section className="flex flex-wrap gap-9 justify-center items-center mt-12 w-full text-center max-md:mt-10 max-md:max-w-full">
            <h2 className="flex-1 shrink self-stretch my-auto text-4xl font-bold text-emerald-500 basis-0 max-md:max-w-full">
                From Creation to Monetization: Vyb Store Has It All
            </h2>
            <div className="flex flex-wrap gap-4 items-center self-stretch my-auto text-white min-w-[360px] w-[726px] max-md:max-w-full">
                {features.map((feature, index) => (
                    <FeatureCard key={index} {...feature} />
                ))}
            </div>
        </section>
    );
};

export default Features;