import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className='hero container'>
      <div className='hero-text'>
        <h1>We Ensure better education for a better world</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
           Culpa reiciendis nam hic eos consequatur praesentium
            provident odio aperiam neque, sint dolorem perspiciatis
             nulla, fugiat laudantium eius id corrupti ab vero.</p>
        <button className='btn'>
          Explore more <i className="ri-arrow-right-line"></i>
        </button>
      </div>
    </div>
  );
};

export default Hero;
