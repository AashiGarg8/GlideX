import React from 'react';
import Logo from '../assets/image.png';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div
      className="bg-cover bg-bottom h-screen flex flex-col justify-between w-full"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1580832945252-8df29e632e9d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        backgroundSize: 'cover',
        backgroundPosition: 'center -50px',
      }}
    >
      <div className="pt-8 pl-8">
        <img className="w-16" src={Logo} alt="Uber Logo" />
      </div>

      <div className="bg-white px-6 py-6 shadow-md rounded-t-lg">
        <h2 className="text-[40 px] font-bold">Get Started with Glidex</h2>
        <Link
          to="/login"
          className="flex items-center justify-center w-full bg-black text-white py-3 rounded-lg mt-5 hover:bg-gray-800 transition"
        >
          Continue
        </Link>
      </div>
    </div>
  );
};

export default Home;
