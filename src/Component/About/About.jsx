import React from 'react'
import './About.css'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className="abou-left">
            <img src="./image/v1.jpg" alt="" className='about-image'/>
            <i className="ri-play-fill" style={{fontSize:'50px',cursor:"pointer",background:"red", borderRadius:"50%"}} onClick={()=>{setPlayState(true)}}></i>
        </div>
        <div className="abou-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tomorrow's Leaders Today</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, aspernatur,
                 architecto sint cumque suscipit distinctio quos, optio ea vitae dolorem culpa
                  repudiandae blanditiis possimus. Libero quod reprehenderit consequuntur consectetur facilis.</p>
        </div>
    </div>
  )
}

export default About;