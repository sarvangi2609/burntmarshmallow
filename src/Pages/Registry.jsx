
import React from 'react'
// import { BrandsGrid, FAQSection, GiftsGrid, Hero, Perks, RecentlyAddedGifts, RegistryLookup, RegistryTools } from './RegistryPages'

import {  FAQSection,  Hero } from './RegistryPages'

const Registry = () => {


  return (

    <>

    <div className="faqpage mb-5">

    <Hero />
    {/* <Perks />
      <RegistryTools />
      <GiftsGrid />
      <RegistryLookup />
      <RecentlyAddedGifts />
      <BrandsGrid /> */}
      <FAQSection />

    </div>
    
    </>

    
  )
}

export default Registry