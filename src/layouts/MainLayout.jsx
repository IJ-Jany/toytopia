import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='mx-auto w-11/12'>
 <Outlet/>
            </div>
           
            <Footer/>
        </div>
    );
};

export default MainLayout;