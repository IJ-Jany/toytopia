import React from 'react';


const Slider = ({data}) => {

    return (
       <div className="carousel carousel-center p-4 space-x-3  rounded-box">
 {
  data.map((item)=>(
    <div className='carousel-item '>
<img className='border-2 border-pink-500 p-1 w-80 h-60 object-cover rounded-box' src={item.pictureURL} alt="" />
    </div>
  ))
 }
</div>
    );
};

export default Slider;