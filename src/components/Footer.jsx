import React from 'react'
import "../index.css";
import nav_logo from "../assets/nav_logo.png";
import { Link } from "react-router-dom";
import Footer_image_1 from "../assets/Footer-1.png";
import Footer_image_2 from "../assets/Footer-2.png";
import Footer_image_3 from "../assets/Footer-3.png";
import Footer_image_4 from "../assets/Footer-4.png";

const Footer = () => {
    return (
        <div className="px-10 py-15 flex flex-col justify-center items-center text-color Footer-bg font-family" >
            <div className="flex gap-2 items-center">
                <img src={nav_logo} alt="Logo" className="w-13 h-auto" />
                <p className="text-4xl font-bold">Todo</p>
            </div>
            <div className='flex justify-between gap-8 items-center mt-6'>
                <Link to="/"><img src={Footer_image_1} alt="Footer-1" className='h-6 ' /></Link>
                <Link to="/"><img src={Footer_image_2} alt="Footer-2" className='h-7' /></Link>
                <Link to="/"><img src={Footer_image_3} alt="Footer-3" className='h-5' /></Link>
                <Link to="/"><img src={Footer_image_4} alt="Footer-4" className='h-6' /></Link>
            </div>
            <p className='mt-4 text-2xl'>Ⓒ 2026, TODO - Systems & Outsourcing</p>
        </div>
    )
}

export default Footer