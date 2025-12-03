import React, { Suspense } from 'react';
import ToysCard from './ToysCard';
import Loading from './Loading';

const PopularToys = ({data}) => {
    const popularToys = data.slice(0,8)
 
   
    return (
        <div>
   <h1 className='text-center font-extrabold text-3xl md:text-4xl text-center text-purple-700 mb-10 drop-shadow-md'> Our Most Popular Toys</h1>
         <div  className='gap-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-auto w-11/12'>
             
           {
            popularToys.map((item)=>(
               <ToysCard key={item.toyId} item={item}></ToysCard> 
            ))
           }
        </div>
        </div>

      
    );
};

export default PopularToys;