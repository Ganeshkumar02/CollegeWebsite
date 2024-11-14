import React, { useState } from 'react'

import Navbar from './Component/Navbar/Navbar';
import Hero from './Component/Hero/Hero';
import Program from './Component/Progrmas/Program';
import Title from './Component/Title/Title';
import About from './Component/About/About';
import Campus from './Component/Campus/Campus';
import Testimonial from './Component/Testmonial/Testimonial';
import Contact from './Component/Contact/Contact';
import Footer from './Component/Footer/Footer';
import VideoPlyer from './Component/VideoPlayer/VideoPlyer';

const App = () => {
const[playState, setPlayState] = useState(false);

  return (
    <div>
      <Navbar />
      <Hero />
      <div className='container'>
        <Title subTitle='Our PROGRAM' title='What We Offer' />
        <Program />
        <About setPlayState={setPlayState} />
        <Title subTitle='Gallery' title='Campus Photo' />
        <Campus />
        <Title subTitle='TESTIMONIALS' title='What Student' />
        < Testimonial />
        <Title subTitle='Contact Us' title='Get in Touch' />
        <Contact />
        <Footer />
      </div>
      <VideoPlyer playState={playState} setPlayState={setPlayState}/>
    </div>
  )
}

export default App;