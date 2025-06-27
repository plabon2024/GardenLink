import React from "react";
import { Slide } from "react-awesome-reveal";

const Featured = () => {
  return (
    <div className="my-10">
      <h1 className="text-3xl font-bold divider divider-primary my-5">
        Featured moments
      </h1>
      <div className="flex flex-wrap container mx-auto justify-center items-center gap-5">

          
         <img src="/images/1.webp" className="w-lg" alt="" />
        <img src="/images/8.jpg"  className="w-lg" alt="" />
        <img src="/images/12.jpg" className="w-lg " alt="" />
        <img src="/images/14.jpg" className="w-lg" alt="" />
     
       
      </div>
    </div>
  );
};

export default Featured;
