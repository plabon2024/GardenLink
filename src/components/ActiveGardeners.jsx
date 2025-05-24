import React, { useEffect, useState } from "react";
import Gardeners from "./Gardeners";

const ActiveGardeners = () => {
  const [activegardeners, setActivegardeners] = useState([]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_baseurl}/gardeners`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setActivegardeners(data);
      });
  }, []);

  return (  
    <div className="relative">
      <div className="relative ">
        <img
          src="/images/3.png"
          alt="Decorative background"
          className="hidden lg:block absolute top-0 left-0 w-auto max-w-[300px] h-auto object-contain pointer-events-none"
        />
      </div>

      <h2 className="text-2xl font-bold mb-4 md text-center">
        Active Gardeners
      </h2>
    
        <div className="container mx-auto justify-center flex flex-wrap gap-5 gap text-info">
          {activegardeners.map((gardener, index) => (
            <div key={index} className="">
              <div className="card bg-slate-200 rounded-md w-96 shadow-sm pt-5">
                <div className="avatar mx-auto">
                  <div className="w-24 rounded ">
                    <img src={gardener.image} />
                  </div>
                </div>
                <div className="card-body ">
                  <h2 className="card-title">{gardener.name}</h2>
                  <h1 className="font-bold">Experienced In :</h1>
                  <div className="flex">
                    <p>{gardener.experiences}</p>
                  </div>
                  <p> Tips shared : {gardener.tips}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
    
    </div> 
  );
};

export default ActiveGardeners;
