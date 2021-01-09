/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import AboutUs from "../../components/AboutUs/about-us.component";
import ContactUs from "../../components/ContactUs/contact-us.component";
import Header from "../../components/Header/header.component";
import HeaderSection from "../../components/HeaderSection/header-section.component";
import OurProjects from "../../components/OurProjects/our-projects.component";
// import Testimonial from "../../components/Testimonial/testimonial.component";
import TotalsSection from "../../components/TotalsSection/totals-section.component";
import WeOffer from "../../components/WeOffer/we-offer.component";

function Home() {
  const height = useWindowHeight();

  const [containerHeight, setContainerHeight] = useState('auto');
  const container = useRef(null);

  useLayoutEffect(() => {
    console.log(containerHeight, height);

    setContainerHeight(Math.max(height, container.current.clientHeight));
  });

  return (
    <div className="home">
      <div className="header-section_container full-section" ref={container} style={{height:containerHeight}}>
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


  function getWindowHeight() {
    return window.innerHeight;
  }
  
  function useWindowHeight() {
    const [wHeight, setWindowHeight] = useState(getWindowHeight());    
  
    useEffect(() => {

      console.log(containerHeight, height);
      function handleResize() {
        setWindowHeight(getWindowHeight());
      }
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    return wHeight;
  }
}



export default Home;

/* eslint-disable no-unused-vars */