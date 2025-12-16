import React from 'react'
import "../../index.css";
import contact_image from '../../assets/contact.png';

const Contact = () => {
    return (
        <div className='bg-secondary h-screen flex justify-center items-center text-4xl font-bold text-color '>
            <div className='grid grid-cols-2 gap-10 w-full px-20 items-center'>
                <div className="left-side " >
                    <div className="loginsingup-fields">
                        <input type="text" placeholder='your Name' className='w-full preto h-12 rounded-xl px-5 items-center text-xl outline-none mb-3' />
                        <input type="email" placeholder='Email Address' className='w-full preto h-12 rounded-xl px-5 items-center text-xl outline-none mb-3' />
                        <textarea type="password" placeholder='Password' className='w-full preto rounded-xl px-5 items-center text-xl outline-none mb-3 p-4' />
                    </div>
                    <button className='mt-8 px-20 py-3 rounded-xl text-2xl font-semibold ' style={{ background: "var(--text-color)", color: "var(--preto)", fontFamily: "var(--font-family)" }}>Get Started</button>
                </div>
                <div className="right-side w-full flex justify-center items-center z-20">
                    <img src={contact_image} alt="" className='h-90' />               </div>
            </div>
        </div>
    )
}

export default Contact