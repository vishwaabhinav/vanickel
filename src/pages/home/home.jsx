/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import AboutUs from "../../components/AboutUs/about-us.component";
import ContactUs from "../../components/ContactUs/contact-us.component";
import Header from "../../components/Header/header.component";
import HeaderSection from "../../components/HeaderSection/header-section.component";
import OurProjects from "../../components/OurProjects/our-projects.component";
// import Testimonial from "../../components/Testimonial/testimonial.component";
import TotalsSection from "../../components/TotalsSection/totals-section.component";
import WeOffer from "../../components/WeOffer/we-offer.component";

function Home() {
  const { height } = useWindowDimensions();

  return (
    <div className="home">
      <div className="header-section_container full-section" style={{height:height}}>
        <Header />
        <HeaderSection />
      </div>
      <WeOffer/>
      <TotalsSection />
      <OurProjects/>
      <AboutUs />
      {/* <Testimonial/> */}
      <ContactUs />
    </div>
  );
}

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

export default Home;

/* eslint-disable no-unused-vars */