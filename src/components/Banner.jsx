import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
const Banner = () => {
  return (
    <>
    <Swiper
  rewind={true}
  navigation={true}
  modules={[Navigation]}
  className="mySwiper container rounded-md mt-24"
>
 
  <SwiperSlide>
    <div className="relative bg-[url('/images/1.webp')] bg-cover bg-center bg-no-repeat min-h-[calc(100vh-200px)] flex items-center"><div className="absolute bg-black/25 inset-0"></div>
      <div className="z-50 p-6 md:p-10 rounded-xl text-white max-w-xl mx-auto lg:ml-[10%] space-y-4">
        <h2 className="text-3xl md:text-5xl font-bold">
          Your Green Journey Starts Here
        </h2>
        <p className="font-medium leading-relaxed">
          Join us at the Green Living Expo 2025 to explore sustainable tools,
          attend expert-led workshops, and connect with eco-conscious
          communities—all designed to help you grow a greener future.
        </p>
        <button className="btn btn-primary">Learn More</button>
      </div>
    </div>
  </SwiperSlide>

  <SwiperSlide>
    <div className="relative bg-[url('/images/3.jpg')] bg-cover bg-center bg-no-repeat min-h-[calc(100vh-200px)] flex items-center"><div className="absolute bg-black/25 inset-0"></div>
      <div className="z-50 p-6 md:p-10 rounded-xl text-white max-w-xl mx-auto lg:ml-[10%] space-y-4">
        <h2 className="text-3xl md:text-5xl font-bold">
          Urban Gardening Made Simple
        </h2>
        <p className="font-medium">
          Join our upcoming Urban Gardening Workshop and learn how to grow
          fresh food from your balcony, rooftop, or backyard—perfect for
          beginners and city dwellers alike.
        </p>
        <button className="btn btn-primary">Learn More</button>
      </div>
    </div>
  </SwiperSlide>

  <SwiperSlide>
    <div className="relative bg-[url('/images/2.jpg')] bg-cover bg-center bg-no-repeat min-h-[calc(100vh-200px)] flex items-center"><div className="absolute bg-black/25 i inset-0"></div>
      <div className="z-50 p-6 md:p-10 rounded-xl text-white max-w-xl mx-auto lg:ml-[10%] space-y-4">
        <h2 className="text-3xl md:text-5xl font-bold">Grow Together</h2>
        <p className="font-medium">
          Be part of our Green City Meetup 2025—connect with fellow urban
          gardeners, exchange ideas, and get inspired to make your city
          greener, one plant at a time.
        </p>
        <button className="btn btn-primary">Learn More</button>
      </div>
    </div>
  </SwiperSlide>
</Swiper>

    </>
  );
};

export default Banner;
