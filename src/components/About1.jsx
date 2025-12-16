import React from 'react'
import "../index.css";
import about_right_image from '../assets/about.webp';

const About = () => {
    return (
        <div className='bg-secondary h-screen flex justify-center items-center text-4xl font-bold text-color '>
            <div className='grid grid-cols-2 gap-10 w-full px-20 items-center'>
                <div className="left-side " style={{ fontFamily: "var(--font-family)" }} >
                    <p style={{ fontFamily: "var(--font-hero-family)" }} className='text-7xl font-bold  '>Why Choose Our Todo App ?</p>
                    <p className='text-2xl font-medium mt-4 '>Our todo application is designed to help you organize your daily activities with ease. With a focus on simplicity, security, and performance, we provide the perfect solution for managing your tasks efficiently. </p>
                </div>
                <div className="right-side w-full flex justify-center items-center z-20">
                    <img src={about_right_image} alt="" className='h-110 rounded-4xl' />
                </div>
            </div>
        </div>
    )
}

export default About