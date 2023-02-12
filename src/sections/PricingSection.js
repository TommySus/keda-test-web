import React from 'react';
import '../style/PricingSection.css'

const PricingSection = () => {
  return (
    <div className="container">
      <div className='title-pricing'>
        Pricing
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="card mb-4">
            <div className="card-header">
              <div>
                <u>Basic</u>
              </div>
              <div className='price-header d-flex'>
                <span className='price-symbol'>
                  Rp
                </span>
                <span className='price-number'>
                  200k
                </span>
              </div>
            </div>
            <div className="card-body">
              <ul>
                <li>Mencatat barang masuk</li>
                <li>Mencatat barang keluar</li>
                <li>Mencatat hasil keuntungan</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4">
            <div className="card-header">
              <div>
                <u>Business</u>
              </div>
              <div className='price-header d-flex'>
                <span className='price-symbol'>
                  Rp
                </span>
                <span className='price-number'>
                  200k
                </span>
              </div>
            </div>
            <div className="card-body">
              <ul>
                <li>Mencatat barang masuk dan keluar</li>
                <li>Mencatat Keuntungan</li>
                <li>Dapat menganalisa hasil penjualan dengan CHART</li>
                <li>Support 7x24 Jam</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4">
            <div className="card-header">
              <div>
                <u>Entrepreneur</u>
              </div>
              <div className='price-header d-flex'>
                <span className='price-symbol'>
                  Rp
                </span>
                <span className='price-number'>
                  200k
                </span>
              </div>
            </div>
            <div className="card-body">
              <ul>
                <li>Mencatat barang masuk dan keluar</li>
                <li>Mencatat Keuntungan</li>
                <li>Dapat menganalisa hasil penjualan dengan CHART</li>
                <li>Support 7x24 Jam</li>
                <li>Export data ke Excel</li>
                <li>AI Prediksi penghasilan</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default PricingSection;
