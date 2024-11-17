import React from 'react';
import ItineraryCard from '../ItineraryCard/ItineraryCard';

const TravelSection = () => {
    const itineraries = [
        {
            title: 'Darjeeling Itinerary',
            location: 'West Bengal',
            creator: 'Samira Hadid',
            src: './images/stockpictures/travel section/our curated travel itineraries/Frame 1182.png',
        },
        {
            title: 'Munnar Itinerary',
            location: 'Kerala',
            creator: 'Samira Hadid',
            src: './images/stockpictures/travel section/our curated travel itineraries/Frame 1183.png',
        },
        {
            title: 'Delhi Itinerary',
            location: 'Delhi',
            creator: 'Samira Hadid',
            src: './images/stockpictures/travel section/our curated travel itineraries/Frame 1182.png',
        },
        {
            title: 'Delhi Itinerary',
            location: 'Delhi',
            creator: 'Samira Hadid',
            src: './images/stockpictures/travel section/our curated travel itineraries/Frame 1182.png',
        },
    ];

    return (
        <div className="flex flex-col gap-16 mt-9 w-full bg-black rounded-3xl max-md:max-w-full">
            {/* Section 1: Image with Text Overlay */}
            <div className="relative flex justify-center items-center w-full h-[540px] max-md:h-[300px]">
                {/* Image */}
                <img
                    src="./images/stockpictures/travel section/Frame 1574.png"
                    className="object-cover rounded-lg w-full h-full"
                    alt="Travel background"
                />

                {/* Text Overlay */}
                <div className="absolute flex flex-col items-center text-center text-white px-6 max-md:px-4">
                    <h2 className="text-[80px] font-bold leading-none max-md:text-4xl">
                        TRAVEL
                    </h2>
                    <p className="mt-6 text-2xl leading-relaxed max-w-[700px] max-md:text-base max-md:max-w-full">
                        Turn your travel experience into an itinerary or travel package with VYB Store and share it with your true followers.
                    </p>
                </div>
            </div>

            {/* Section 2: Curated Travel Itineraries */}
            <div className="flex flex-col w-full items-center max-md:max-w-full">
                <h3 className="text-3xl font-bold text-white text-center max-md:text-2xl">
                    Explore Our Curated Travel Itineraries
                </h3>
                <div className="flex flex-wrap justify-center gap-6 mt-10 w-full max-md:mt-6">
                    {itineraries.map((itinerary, index) => (
                        <ItineraryCard
                            key={index}
                            title={itinerary.title}
                            location={itinerary.location}
                            creator={itinerary.creator}
                            src={itinerary.src}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TravelSection;
