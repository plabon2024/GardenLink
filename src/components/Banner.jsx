import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
const Banner = () => {
  return (
    <>
      <Swiper
        rewind={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {" "}
        <SwiperSlide>
          <div className="relative bg-[url('/images/1.webp')] bg-cover bg-center bg-no-repeat  min-h-[calc(100vh-200px)]">
            <div className=" lg:absolute top-0 left-0 lg:top-1/3 lg:left-2/12 
              bg-opacity-50  rounded-xl 
             space-y-4 w-full md:w-1/4 lg:w-1/3 text-white ">
              <h2 className="text-3xl md:text-5xl font-bold">
                Your Green Journey Starts Here
              </h2>
              <p>
                Begin your sustainable living journey today with simple
                gardening tools, guides, and support—turning your space into a
                green haven.
              </p>
              <button className="btn ">Learn More</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative bg-[url('/images/3.jpg')] bg-cover bg-center bg-no-repeat  min-h-[calc(100vh-200px)]">
            {" "}
            <div className=" lg:absolute top-0 left-0 lg:top-1/3 lg:left-2/12 
              bg-opacity-50  rounded-xl 
             space-y-4 w-full md:w-1/4 lg:w-1/3 text-white ">
              <h2 className="text-3xl md:text-5xl font-bold  ">
                Urban Gardening Made Simple
              </h2>
              <p>
                Discover how easy it is to grow fresh food and plants right from
                your balcony, rooftop, or backyard—no experience required.
              </p>
              <button className="btn ">Learn More</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative bg-[url('/images/2.jpg')] bg-cover bg-center bg-no-repeat  min-h-[calc(100vh-200px)]">
            {" "}
            <div
              className=" lg:absolute top-0 left-0 lg:top-1/3 lg:left-2/12 
              bg-opacity-50  rounded-xl 
             space-y-4 w-full md:w-1/4 lg:w-1/3 text-white ">
              <h2 className="text-3xl lg:text-5xl font-bold">Grow Together</h2>
              <p>
                Join a thriving community of urban gardeners sharing tips,
                resources, and inspiration to make cities greener—one plant at a
                time.
              </p>
              <button className="btn">Learn More</button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
