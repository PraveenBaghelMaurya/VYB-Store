import React from 'react';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import CategoryTabs from '../CategoryTabs/CategoryTabs';
import TravelSection from '../TravelSection/TravelSection';
import HowToList from '../HowToList/HowToList';
import Features from '../Features/Features';
import InfluencerShowcase from '../InfluencerShowcase/InfluencerShowcase';
import GetStarted from '../GetStarted/GetStarted';
// import FAQ from '../FAQ/FAQ';

const VybStore = () => {
    return (
        <div className="flex overflow-hidden flex-col justify-center px-32 py-9 bg-neutral-900 max-md:px-5">
            <Header />
            <main>
                <Hero />
                <CategoryTabs />
                <TravelSection />
                <HowToList />
                <Features />
                <InfluencerShowcase />
                <GetStarted />
                {/* <FAQ /> */}
            </main>
        </div>
    );
};

export default VybStore;