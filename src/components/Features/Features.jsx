import React from 'react'
import "../../index.css";
import Features_image from "../../assets/Features-image.png";

const Features = () => {
    return (
        <div className='bg-secondary h-screen flex justify-center items-center text-4xl font-bold text-color '>
            <div className='grid grid-cols-2 gap-10 w-full px-20 items-center'>
                <div className="left-side w-full flex justify-center items-center ">
                    <div className='Gradiente-azul h-90 w-100 flex justify-center items-center rounded-4xl'>
                        <img src={Features_image} alt="" className='h-92' />
                    </div>

                </div>
                <div className="right-side " style={{ fontFamily: "var(--font-family)" }} >
                    <p style={{ fontFamily: "var(--font-hero-family)" }} className='text-7xl font-bold  '>Powerful Features</p>
                    <p className='text-2xl font-medium mt-4 '>Our todo application offers essential features to organize tasks, manage deadlines, track progress, and boost daily productivity with a simple, user-friendly interface. </p>
                </div>
            </div>
        </div>
    )
}

export default Features