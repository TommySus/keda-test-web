import React from 'react';
import '../style/HomeSection.css'
import { Link } from 'react-scroll'


const AboutSection = () => {
  return (
    <div className='container' style={{width: '100%'}}>
      <div className='container-home'>
        <div className='text-home d-flex justify-content-center align-items-center flex-column'>
          <div className='title-home'>
            <b>ERP terbaik di INDONESIA</b>
          </div>
          <div className='subtitle-home'>
            <span>BOX-ERP adalah ERP terbaik dengan harga yang kompetitif</span>
          </div>
          <div className='button-home-menu'>
            <Link activeClass="active"
              to="pricing-section"
              spy={true}
              smooth={'easeOutExpo'}
              hashSpy={true}
              duration={0}
              delay={0}
              isDynamic={true}
              ignoreCancelEvents={false}
              spyThrottle={500}
            >
              <button className='pricing-btn'>Pricing</button>
            </Link>
            <Link activeClass="active"
              to="contact-section"
              spy={true}
              smooth={'easeOutExpo'}
              hashSpy={true}
              duration={0}
              delay={0}
              isDynamic={true}
              ignoreCancelEvents={false}
              spyThrottle={500}
            >
              <button className='contact-btn'>Contact Us</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
