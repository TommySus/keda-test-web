import React from 'react';
import '../style/AboutUsSection.css'
import logo from '../assets/about-us.png'

const AboutSection = () => {
  return (
    <div className='container' style={{width: '100%'}}>
      <div className='container-about-us row'>
        <div className='text-about-us col-sm d-flex justify-content-center flex-column'>
          <div className='title-about-us'>
            <b>ABOUT US</b>
          </div>
          <div className='body-about-us'>
            <span>
            " Kita adalah perusahaan yang bergerak di bidang ERP yang membantu mempermudah setiap
            perusahaan untuk melakukan manajemen, seperti mengatur stock barang, penjualan, keuntungan. 
            dengan visualisasi yang baik dan rapi dalam bentuk chart maupun tabel "
            </span>
          </div>
        </div>
        <div className='image-about-us col-sm d-flex justify-content-center'>
          <img src={logo} alt='about us'></img>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
