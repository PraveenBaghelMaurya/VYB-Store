import React from 'react';
import ItineraryCard from '../ItineraryCard/ItineraryCard';

const TravelSection = () => {
    const itineraries = [
        { title: 'Darjeeling Itinerary', location: 'West Bengal', creator: 'Samira Hadid' },
        { title: 'Munnar Itinerary', location: 'Kerala', creator: 'Samira Hadid' },
        { title: 'Delhi Itinerary', location: 'Delhi', creator: 'Samira Hadid' },
        { title: 'Delhi Itinerary', location: 'Delhi', creator: 'Samira Hadid' },
        // { title: 'Delhi Itinerary', location: 'Delhi', creator: 'Samira Hadid' },
        // { title: 'Delhi Itinerary', location: 'Delhi', creator: 'Samira Hadid' },
    ];

    return (
        <div className="flex overflow-hidden flex-wrap gap-16 items-end mt-9 w-full bg-black rounded-3xl max-md:max-w-full">
            <div className="flex grow shrink gap-2.5 justify-center items-center px-24 py-24 font-bold text-white min-h-[540px] min-w-[240px] w-[960px] max-md:px-5 max-md:max-w-full">
                <div className="flex flex-col flex-1 shrink justify-center self-stretch my-auto w-full basis-0 h-[358px] min-w-[240px] max-md:max-w-full">
                    <h2 className="text-[180px] max-md:max-w-full max-md:text-4xl">TRAVEL</h2>
                    <p className="self-center mt-8 text-4xl max-w-[700px] w-[700px] max-md:max-w-full">
                        Turn your travel experience into itinerary, travel package with VYB Store and share it with your true followers.
                    </p>
                </div>
            </div>
            <div className="flex flex-col grow shrink min-w-[240px] w-[960px] max-md:max-w-full">
                <h3 className="text-4xl font-bold text-white max-md:max-w-full">Explore Our Curated Travel Itineraries</h3>
                <div className="flex overflow-hidden overflow-x-auto gap-6 items-center pl-4 mt-14 w-full max-md:mt-10 max-md:max-w-full">
                    {itineraries.map((itinerary, index) => (
                        <ItineraryCard key={index} {...itinerary} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TravelSection;