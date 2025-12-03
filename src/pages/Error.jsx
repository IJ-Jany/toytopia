import React from 'react';
import errorImg from '../assets/error.png'
import { Link } from 'react-router';

const Error = () => {
    return (
        <div className='flex-col items-center justify-center flex '>
             <title>Tytopia-error404</title>
            <h1 className='py-10 text-teal-500 font-bold text-3xl'>Sorry, the page you are looking for doesn't exist</h1>
            <img src={errorImg} alt="" />
            <Link className='mr-3 bg-purple-400 rounded-2xl py-2 px-3 font-bold text-white' to='/'>Go To Home</Link>
        </div>
    );
};

export default Error;