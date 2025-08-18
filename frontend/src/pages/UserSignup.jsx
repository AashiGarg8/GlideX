//import React from 'react';
import Logo from '../assets/whiteuserlogin.png';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';


const UserSignup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [userData, setuserData] = useState({})

  const submitHandler = (e)=>{
    e.preventDefault()
    setuserData({
      fullName:{
        firstname: firstname,
        lastname: lastname
      },
      email:email,
      password:password
    })

    setEmail('')
    setFirstname('')
    setLastname('')
    setPassword('')
    
  }
  return (
    <div className="p-7 h-screen flex flex-col justify-between">
          <div>
            <img className="w-16 mb-10" src={Logo} alt="Logo" />
            <form onSubmit={(e)=> {
              submitHandler(e);
            }}>


              <h3 className="text-lg font-medium mb-2">What's your name?</h3>
              <div className='flex gap-4 mb-6'>
              <input
                required
                className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base"
                type="text"
                placeholder="First name"
                value={firstname}
                onChange={(e) =>{
                  setFirstname(e.target.value)
                }}
              />
              <input
                required
                className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base"
                type="text"
                placeholder="Last name"
                value={lastname}
                onChange={(e) =>{
                  setLastname(e.target.value)
                }}
              />
              </div>




              <h3 className="text-lg font-medium mb-2">What's your email?</h3>
              <input
                required
                value={email}
                onChange={(e) =>{
                  setEmail(e.target.value)
                }}
                className="bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
                type="email"
                placeholder="email@example.com"
              />
    
              <h3 className="text-lg font-medium mb-2"> Enter Password</h3>
    
              <input
                className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-base placeholder:text-base"
                value={password}
                onChange={(e) =>{ 
                  setPassword(e.target.value)
                }}
                required
                type="password"
                placeholder="password"
              />
              <button className="bg-black text-white font-semibold mb-3 rounded px-4 py-2 border w-full text-lg placeholder:text-base">
                Sign Up
              </button>
              <p className="text-center">
                Already have an account?
                <Link to="/login" className="text-blue-600">
                  {" "}
                  Login here
                </Link>
              </p>
            </form>
          </div>
          <div>
            <p className='text-[10px] leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy Policy</span> and <span className='underline'>Terms of Service apply</span>.</p>
          </div>
        </div>
  );
};

export default UserSignup;
