import React from 'react'
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import CategoryTabs from './Components/CategoryTabs/CategoryTabs'
import TravelSection from './Components/TravelSection/TravelSection'
import HowToList from './Components/HowToList/HowToList'
import Features from './Components/Features/Features'
import InfluencerShowcase from './Components/InfluencerShowcase/InfluencerShowcase'
import GetStarted from './Components/GetStarted/GetStarted'
import FAQ from './FAQ/FAQ'
import VybStore from './Components/VybStore/VybStore'


const App = () => {
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
        <FAQ />
      </main>

      {/* <VybStore/> */}


    </div>
  )
}

export default App
