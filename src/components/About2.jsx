import React from 'react'
import "../index.css";
import about2_image1 from '../assets/about-Lightning-fast.png';
import about2_image2 from '../assets/about-secure-private.png';
import about2_image3 from '../assets/about-responsive-design.png';

const About2 = () => {
    return (
        <div className='bg-secondary h-screen flex justify-center items-center text-color '>
            <div className='grid grid-cols-3 gap-10 w-full px-30 items-center'>
                <div className="left-side flex flex-col justify-center items-center black-shade pb-20 pt-9 px-8 rounded-3xl">
                    <img src={about2_image1} alt="" className='w-15 mb-5' />
                    <p className='text-center text-5xl font-hero-family mb-5'>Lightning Fast</p>
                    <p className='text-xl font-medium'>Built with modern technology for optimal performance and speed.</p>
                </div>
                <div className="left-side flex flex-col justify-center items-center black-shade pb-20 pt-9 px-8 rounded-3xl">
                    <img src={about2_image2} alt="" className='w-23 mb-5' />
                    <p className='text-center text-5xl font-hero-family mb-5'>Secure & Private</p>
                    <p className='text-xl font-medium'>Built with modern technology for optimal performance and speed.</p>
                </div>
                <div className="left-side flex flex-col justify-center items-center black-shade pb-20 pt-9 px-8 rounded-3xl">
                    <img src={about2_image3} alt="" className='w-33 mb-5' />
                    <p className='text-center text-5xl font-hero-family mb-5'>Responsive</p>
                    <p className='text-xl font-medium'>Built with modern technology for optimal performance and speed.</p>
                </div>
            </div>
        </div>
    )
}

export default About2