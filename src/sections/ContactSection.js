import React from 'react';
import '../style/ContactSection.css'
import logo from '../assets/Contact-us.png'
import phoneLogo from '../assets/phone-icon.png'
import mailLogo from '../assets/mail-icon.png'
import addressLogo from '../assets/home-icon.png'
import webLogo from '../assets/internet-icon.png'

const AboutSection = () => {
  return (
    <div className='container d-flex justify-content-center align-items-center' style={{width: '100%', height: '100%'}}>
      <div className='container-contact-us row'>
        <div className='image-about-us col-sm d-flex justify-content-center'>
          <img src={logo} alt='about us'></img>
        </div>
        <div className='text-contact-us col-sm'>
          <div className='title-contact-us'>
            <b><u>Contact</u> Us</b>
          </div>
          <div className='body-contact-us'>
            <div className='container-contact-data'>
              <div className='contact-data'>
                <img src={phoneLogo} alt='phone'></img>
                <div>+62 8572221111</div>
              </div>
              <div className='contact-data'>
                <img src={mailLogo} alt='phone'></img>
                <div>contactsupport@box.com</div>
              </div>
              <div className='contact-data'>
                <img src={addressLogo} alt='phone'></img>
                <div>JL. Bendungan Hilir no.7</div>
              </div>
              <div className='contact-data'>
                <img src={webLogo} alt='phone'></img>
                <div>www.box-erp.com</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
