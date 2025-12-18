import React from 'react'
import "../Login.css";
import "../Todo.css";
import "../index.css";
import { Link, useNavigate } from "react-router-dom";
import hero_image from '../assets/Mask Group.png';

const Login = ({ setIsLogin }) => {
    const navigate = useNavigate();

    const handleSignIn = (e) => {
        e.preventDefault();
        setIsLogin(true);
        navigate("/");
    };

    return (
        <div className='login-main'>
            {/* Background image from Hero section */}
            <img
                src={hero_image}
                alt=""
                className='absolute inset-0 min-h-screen pointer-events-none opacity-30 object-cover w-full'
            />

            <div className='login-container-wrapper'>
                <Link to="/" className="text-m font-bold mb-8 text-gray-300 back-home inline-flex">
                    &larr; Back To Home
                </Link>

                <div className='login-card'>
                    <h1 className='login-title'>Login</h1>
                    <form className='login-form' onSubmit={handleSignIn}>
                        <div className='input-group'>
                            <label>Email Address</label>
                            <input
                                type='email'
                                className='login-input'
                                placeholder='your@email.com'
                                required
                            />
                        </div>
                        <div className='input-group'>
                            <label>Password</label>
                            <input
                                type='password'
                                className='login-input'
                                placeholder='••••••••'
                                required
                            />
                        </div>
                        <button type="submit" className='login-button'>Sign In</button>
                    </form>

                    <div className='login-footer'>
                        <p>Don't have an account? <a href="#">Create Account</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login