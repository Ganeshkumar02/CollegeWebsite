import React from 'react'
import './Program.css'
import { FaGraduationCap } from "react-icons/fa";
const Program = () => {
  return (
    <div className='programs'>
        <div className='program'>
        <img src="image/student1.jpg" alt="" />
        <div className='caption'>
            <FaGraduationCap  />
            <p>Graduation</p>
        </div>
        </div>

        <div className='program'>
        <img src="image/student2.webp" alt="" />
        <div className='caption'>
            <FaGraduationCap />
            <p> Master Dgree</p>
        </div>
        </div>

        <div className='program'>
        <img src="image/student1.jpg" alt="" />
        <div className='caption'>
            <FaGraduationCap  />
            <p> Post Graduation</p>
        </div>
        </div>

    </div>
  )
}

export default Program;