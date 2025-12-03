import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const SwiperSlider = () => {
  const images = [
    "/toy1.jpg",
    "/toy2.jpg",
    "/toy3.jpg"
  ];

  return (
    <div className=" flex justify-center px-4">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        className="w-full max-w-[60vw] sm:max-w-[80vw] xs:max-w-[95vw]"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <div className="w-full h-[60vh] flex justify-center items-center">
              <img
                src={img}
                alt={`toy-${index}`}
                className="w-full h-full object-cover rounded-xl border-2 border-pink-500 shadow-md"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperSlider;
