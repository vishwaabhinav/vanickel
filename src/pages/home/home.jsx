import React from "react";
import AboutUs from "../../components/AboutUs/about-us.component";
import ContactUs from "../../components/ContactUs/contact-us.component";
import Header from "../../components/Header/header.component";
import HeaderSection from "../../components/HeaderSection/header-section.component";
import OurProjects from "../../components/OurProjects/our-projects.component";
import Testimonial from "../../components/Testimonial/testimonial.component";
import TotalsSection from "../../components/TotalsSection/totals-section.component";
import WeOffer from "../../components/WeOffer/we-offer.component";

function Home() {
  return (
    <div className="home">
      <div className="header-section_container full-section">
        <Header />
        <HeaderSection />
      </div>
      <WeOffer/>
      <TotalsSection />
      <OurProjects/>
      <AboutUs />
      <Testimonial/>
      <ContactUs />
    </div>
  );
}

export default Home;
