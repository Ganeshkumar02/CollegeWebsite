import React, { useRef } from 'react'
import './Testimonial.css'

const Testimonial = () => {
    const slider = useRef();
    let tx =0;
    const slideForward = () =>{
        if(tx>-50){
            tx-=25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }
    const slideBackward = () =>{
        if(tx < 0){
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }

  return (
    <div className='testimonials'>
        <div className='next-btn' onClick={slideForward}>
        <i className="ri-arrow-right-line"></i>
        </div>
        <div className='back-btn' onClick={slideBackward}>
        <i className="ri-arrow-left-fill"></i>
        </div>
        <div className='slider'>
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src="./image/single1.jpg" alt="" />
                            <div>
                                <h3>William jackson 1</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                             Vitae numquam quasi officia assumenda odio odit, 
                             fuga distinctio sint deserunt architecto eligendi accusamus libero ad,
                              impedit nihil error reprehenderit consequuntur asperiores.</p>
                    </div>
                </li>


                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src="./image/single2.jpg" alt="" />
                            <div>
                                <h3>William jackson 2</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                             Vitae numquam quasi officia assumenda odio odit, 
                             fuga distinctio sint deserunt architecto eligendi accusamus libero ad,
                              impedit nihil error reprehenderit consequuntur asperiores.</p>
                    </div>
                </li>

                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src="./image/single3.webp" alt="" />
                            <div>
                                <h3>William jackson 3</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                             Vitae numquam quasi officia assumenda odio odit, 
                             fuga distinctio sint deserunt architecto eligendi accusamus libero ad,
                              impedit nihil error reprehenderit consequuntur asperiores.</p>
                    </div>
                </li>

                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src="./image/single4.jpg" alt="" />
                            <div>
                                <h3>William jackson 4</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                             Vitae numquam quasi officia assumenda odio odit, 
                             fuga distinctio sint deserunt architecto eligendi accusamus libero ad,
                              impedit nihil error reprehenderit consequuntur asperiores.</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Testimonial;