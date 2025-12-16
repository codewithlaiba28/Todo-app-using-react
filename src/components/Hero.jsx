import React from 'react'
import "../index.css";
import hero_image from '../assets/Mask Group.png';
import hro_right_image from '../assets/Hero-right-side.png';
import { Link } from "react-router-dom";

const Hero = (props) => {
    return (
        <div
            style={{ background: "var(--gradiente-vermelho)" }}
            className='relative w-full min-h-screen flex items-center overflow-hidden' >
            {/* background image – click block na kare */}
            <img
                src={hero_image}
                alt=""
                className='absolute inset-0 min-h-screen pointer-events-none'
            />

            <div
                className='grid grid-cols-2 gap-10 w-full px-20 items-center relative z-10'
                style={{ fontFamily: "var(--font-family)" }}>
                <div className="left-side text-color">
                    <p
                        style={{ fontFamily: "var(--font-hero-family)" }}
                        className='text-7xl font-bold' >
                        {props.tittle} <br /> {props.subtittle}
                    </p>
                    <p className='text-2xl font-medium mt-4'>
                        {props.text}
                    </p>
                    <Link
                        to="/Todo"
                        className="mt-8 px-20 py-3 rounded-xl text-2xl font-semibold inline-block text-center relative z-20"
                        style={{
                            background: "var(--text-color)",
                            color: "var(--preto)",
                            fontFamily: "var(--font-hero-family)"
                        }} >  Get Started
                    </Link>
                </div>

                <div className="right-side w-full flex justify-center items-center">
                    <img src={hro_right_image} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Hero
