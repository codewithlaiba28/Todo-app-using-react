import React from 'react'
import Components from './Components'
import "../../index.css";
import Feature_image_1 from "../../assets/Features-1.png";
import Feature_image_2 from "../../assets/Features-2.png";
import Feature_image_3 from "../../assets/Features-3.png";
import Feature_image_4 from "../../assets/Features-4.png";
import Feature_image_5 from "../../assets/Features-5.png";
import Feature_image_6 from "../../assets/Features-6.png";

const SecondFeatures = () => {
    return (
        <div className='bg-secondary min-h-screen py-25 flex justify-center items-center text-color '>
            <div className='grid grid-cols-3 gap-10 w-full px-30 items-center '>
                <Components Feature_tittle="Add Tasks" Feature_text="Easily create new tasks with titles, descriptions, and due dates." Feature_img={Feature_image_1} imgClass="w-20" />
                <Components Feature_tittle="Update Tasks" Feature_text="Modify existing tasks with real-time updates and changes." Feature_img={Feature_image_2} imgClass="w-17" />
                <Components Feature_tittle="Delete Tasks" Feature_text="Remove completed or unwanted tasks with a single click." Feature_img={Feature_image_5} imgClass="w-13 -mt-6" />
                <Components Feature_tittle="View All Tasks" Feature_text="See all your tasks in a clean, organized interface." Feature_img={Feature_image_4} imgClass="w-15" />
                <Components Feature_tittle="Secure Tasks" Feature_text="All tasks are securely stored and accessible only to you." Feature_img={Feature_image_3} imgClass="w-13" />
                <Components Feature_tittle="Mark Complete" Feature_text="Track your progress by marking tasks as complete." Feature_img={Feature_image_6} imgClass="w-15 -mt-4" />
            </div>
        </div>
    )
}

export default SecondFeatures