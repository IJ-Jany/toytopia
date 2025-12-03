import React from 'react';
import Slider from '../components/slider';
import { useLoaderData } from 'react-router';
import PopularToys from '../components/PopularToys';
import Range from '../components/Range';
import Sellers from '../components/Sellers';
import SwiperSlider from '../components/swiperSlider';
import { NavLink } from 'react-router';
import HeroSection from './Hero';
import PromotionalOffer from '../components/PromotionalOffer';

const Home = () => {
    const data = useLoaderData();
    return (
        <div className='py-10'>
            <title>Tytopia-home</title>
            <HeroSection/>
            <PromotionalOffer/>
            <Sellers data={data}></Sellers>
             <Range></Range>
            <PopularToys data={data}/>
          <div className='flex mt-4 justify-center items-center'>
              <NavLink to='/alltoys' className='py-2 px-3 bg-purple-400 rounded-2xl text-white'>More</NavLink>
          </div>
           
        </div>
    );
};

export default Home;