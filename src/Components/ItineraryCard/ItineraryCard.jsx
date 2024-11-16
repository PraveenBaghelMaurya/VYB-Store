import React from 'react';

const ItineraryCard = ({ title, location, creator }) => {
    return (
        <div className="flex flex-col items-center self-stretch pb-3 my-auto rounded-2xl min-h-[480px] min-w-[240px] w-[270px]">
            <div className="flex flex-col justify-center items-center max-w-full text-white min-h-[59px] w-[252px]">
                <h4 className="text-2xl font-bold">{title}</h4>
                <p className="text-lg font-medium">
                    <span className="font-bold">{location}</span>
                </p>
            </div>
            <div className="flex justify-between items-center px-2 py-1 max-w-full text-lg font-medium text-black bg-white rounded-2xl w-[191px]">
                <div className="flex-1 shrink self-stretch my-auto basis-0">
                    <span className="font-bold">{creator}</span>
                </div>
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/18465ffa495b3029cb9b9ae72f3cc29302d2498031ec9513482d6d85069ce4bb?placeholderIfAbsent=true&apiKey=81cb913614704511878cada97e5eac5c" alt={`${creator}'s avatar`} className="object-contain shrink-0 self-stretch my-auto aspect-square rounded-[141px] w-[23px]" />
            </div>
        </div>
    );
};

export default ItineraryCard;