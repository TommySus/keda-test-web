import React from 'react';
import AboutSection from './sections/AboutSection';
import ContactSection from './sections/ContactSection';
import PricingSection from './sections/PricingSection';
import HomeSection from './sections/HomeSection';
import {Element } from 'react-scroll'

const Sections = () => {
  return (
    <div className='container-section'>
      <Element  id="element" name="home-section" className="element home-section">
        <div className='overlay-home-section'>
          <HomeSection></HomeSection>
        </div>
      </Element>
      <Element id="element" name="about-section" className="element">
        <AboutSection></AboutSection>
      </Element>
      <Element id="element" name="pricing-section" className="pricing-element">
        <PricingSection></PricingSection>
      </Element>
      <Element id="element" name="contact-section" className="element">
        <ContactSection></ContactSection>
      </Element>
    </div>
  );
};

export default Sections;
