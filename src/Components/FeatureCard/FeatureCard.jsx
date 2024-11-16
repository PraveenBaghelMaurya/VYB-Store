import React from 'react';

const FeatureCard = ({ title, description, imageSrc, imageAlt }) => {
    return (
        <div className="flex flex-col flex-1 shrink justify-center self-stretch my-auto basis-0 min-w-[160px]">
            <div className="flex flex-col p-6 w-full bg-black rounded-3xl max-md:px-5">
                <div className="flex flex-col justify-center w-full">
                    <h3 className="text-4xl font-bold">{title}</h3>
                    <p className="mt-2 text-lg font-medium">
                        <span className="font-bold">{description}</span>
                    </p>
                </div>
                <img loading="lazy" src={imageSrc} alt={imageAlt} className="object-contain self-center mt-6 max-w-full aspect-[1.18] w-[190px]" />
            </div>
        </div>
    );
};

export default FeatureCard;