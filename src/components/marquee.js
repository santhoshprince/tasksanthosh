import React from 'react';
import Marquee from 'react-fast-marquee';
import './marquee.css';

const MarqueeComponent = () => {
  const marqueeItems = [
    { text: "Get in touch", fontSize: '55px' },
    { text: "Get in touch", fontSize: '55px' },
    { text: "Get in touch", fontSize: '55px' },
    { text: "Get in touch", fontSize: '55px' },
    { text: "Get in touch", fontSize: '55px' },
  ];

  return (
    <div className="marquee-container">
   
      <Marquee gradient={true} speed={100} gradientColor='#0043F1'>
        {marqueeItems.map((item, index) => (
          <div className="marquee-item" key={index}>
            <div className="star-icon">
              {/* <FaStar /> */}
              <img src="Star.png" />
            </div>
            <div className="marquee-text">
              <h1 style={{ fontSize: item.fontSize }}>{item.text}</h1>
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default MarqueeComponent;
