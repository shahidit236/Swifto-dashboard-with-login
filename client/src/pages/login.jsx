import React from 'react'
import './login.css'
import { Link, useNavigate } from 'react-router-dom'
//import Assets
import bgpic from '../LoginAssets/bgpic.jpg'
import logo from '../LoginAssets/swifto.png'
//import Icons
import { FaUserShield } from 'react-icons/fa'
import { BsShieldLockFill } from 'react-icons/bs'
import { AiOutlineSwapRight } from 'react-icons/ai'
import Axios from 'axios'
import { useState } from 'react'


const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [alertMessage, setAlertMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await Axios.post('http://localhost:5000/login', {
                email,
                password,
            });
            alert('Login successful!');
            navigate('/layout');
            console.log(response.data); // Process the response data

            // Assuming the response contains a success message
            if (response.data.message === 'Login successful') {
                // Set the alert message and navigate to another page
                setAlertMessage('Login successful!');
                //history.push('/dashboard'); // Replace '/dashboard' with the desired path
                navigate('/layout');
            } else {
                alert('Login failed!');
            }
        } catch (error) {
            alert('login failed')
            console.error(error);
        }
    };

    return (
        <div className="loginPage flex">
            <div className="container flex">

                <div className="bgDiv">
                    <img src={bgpic} className='bgDiv' />

                    <div className="textDiv name">
                        <h2 className="title text-white">Welcome to Coffee Shop</h2>
                    </div>
                    <div className="footerDiv flex rama">
                        <span className="text-white">Don't have an Account ?</span>
                        <Link to={'/register'}>
                            <button className="btn men">Sign Up</button>
                        </Link>
                    </div>
                </div>
                <div className="formDiv">
                    <div className="headerDiv ml-4">
                        <img src={logo} alt="Logo Image" />
                        <h3 className='mt-5 m-4 text-center'>Welcome Back!</h3>
                    </div>


                    <form action="" onSubmit={handleSubmit} className="form grid">
                        <span className="showMessage">{alertMessage && <div>{alertMessage}</div>}</span>
                        <div className="inputDiv">
                            <label htmlFor="email" className='ml-4 mt-4'>Email ID</label>
                            <div className="input flex form-control m-4 ml-4">
                                <FaUserShield className="icon" />
                                <input type="text" id="email" placeholder="Enter Email ID" className='m-2' onChange={(event) => {
                                    setEmail(event.target.value)
                                }} />
                            </div>
                        </div>

                        <div className="inputDiv">
                            <label htmlFor="password" className='ml-4 mt-4'>Password</label>
                            <div className="input flex form-control m-4 ml-4">
                                <BsShieldLockFill className="icon" />
                                <input type="password" id="password" placeholder="Enter Password" className='m-2' onChange={(event) => {
                                    setPassword(event.target.value)
                                }} />
                            </div>
                        </div>

                        <button type="submit" className="btn flex new mt-5 ml-3 ">
                            <span className='sekhar'>Login</span>
                            <AiOutlineSwapRight className='icon' />
                        </button>

                        <span className="forgotPassword m-6 ml-20">
                            Forgot Your Password ? <a className='clickhere' href="">Click Here</a>
                        </span>

                    </form>
                </div>
            </div>


        </div>
    )
}

export default Login