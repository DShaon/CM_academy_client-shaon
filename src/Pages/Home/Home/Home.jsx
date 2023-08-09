import React from 'react';
import Banner from '../Banner/Banner';
import FAQ from '../FAQ/FAQ';
import Categories from '../Categories/Categories';
import Features from '../Features/Features';
import WhyUs from '../WhyUs/WhyUs';
import StatSection from '../StatSection/StatSection';
import KeySponsor from '../KeySponsor/KeySponsor';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
           <Categories></Categories>
           <Features></Features>
           <WhyUs></WhyUs>
           <StatSection></StatSection>
            <FAQ></FAQ>
            <KeySponsor></KeySponsor>
        </div>
    );
};

export default Home;