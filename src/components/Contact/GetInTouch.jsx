import React from 'react'
import "../../index.css";
import getintouch_image from '../../assets/Get-in-touch.png';
import { Link } from 'react-router-dom';

const GetInTouch = () => {
    return (
        <div className='bg-secondary h-screen flex justify-center items-center text-4xl font-bold text-color '>
            <div className='grid grid-cols-2 gap-10 w-full px-20 items-center'>
                <div className="left-side " style={{ fontFamily: "var(--font-family)" }} >
                    <p style={{ fontFamily: "var(--font-hero-family)" }} className='text-7xl font-bold  '>Get in Touch</p>
                    <p className='text-2xl font-medium mt-4 '>Have questions or need assistance? We’d love to hear from you! Send us a message anytime, and our team will respond promptly. Your feedback and inquiries are always important to us. </p>
                    <button className='mt-8 px-20 py-3 rounded-xl text-2xl font-semibold ' style={{ background: "var(--text-color)", color: "var(--preto)", fontFamily: "var(--font-family)" }}><Link to='/contact'>Contact</Link> </button>
                </div>
                <div className="right-side w-full flex justify-center items-center z-20">
                    <img src={getintouch_image} alt="" />
                </div>
            </div>
        </div>
    )
}

export default GetInTouch