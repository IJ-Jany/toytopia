import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const SwiperSlider = ({ data }) => {
  return (
    <div className="mt-10">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={3}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        loop={true}
        className="py-3"
      >
        {data?.map((item, index) => (
          <SwiperSlide key={index}>
            <img
              className="border-2 border-pink-500 p-1 w-80 h-60 object-cover rounded-xl shadow-md"
              src={item.pictureURL}
              alt="toy"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperSlider;
