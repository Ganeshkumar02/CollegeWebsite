import React from 'react'
import './Campus.css'
const Campus = () => {
  return (
    <div className='campus'>
        <div className='gallery'>
            <img src="./image/G1.png" alt="" />
            <img src="/image/G2.jpg" alt="" />
            <img src="/image/G3.avif" alt="" />
            <img src="/image/G4.jpg" alt="" />
            
        </div>
        <button className='btn dark-btn'>See more here<i className="ri-arrow-right-line"></i></button>

        {/* <div className='gallery'>
            <img src="./image/G1.png" alt="" />
            <img src="/image/G2.jpg" alt="" />
            <img src="/image/G3.avif" alt="" />
            <img src="/image/G4.jpg" alt="" />
            
        </div> */}
    </div>
  )
}

export default Campus;