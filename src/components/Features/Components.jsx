import React from 'react'
import "../../index.css";
const Components = (props) => {
    return (
        <div className="left-side flex flex-col justify-center items-center pb-20 pt-9 px-8 rounded-3xl h-100 black-shade">
            <img src={props.Feature_img} alt="" className={` ${props.imgClass} mb-5`} />
            <p className='text-center text-5xl font-hero-family mb-5'>{props.Feature_tittle}</p>
            <p className='text-xl font-medium'>{props.Feature_text}</p>
        </div>
    )
}

export default Components