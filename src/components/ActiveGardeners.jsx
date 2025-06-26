import React, { useEffect, useState } from "react";

const ActiveGardeners = () => {
  const [activegardeners, setActivegardeners] = useState([]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_baseurl}/gardeners`)
      .then((res) => res.json())
      .then((data) => {
        setActivegardeners(data);
      });
  }, []);

  return (
   <div className="relative py-8 bg-base-100">
  {/* Optional decorative background image for large screens */}
  {/* <div className="absolute top-0 left-0 z-0 hidden lg:block">
    <img
      src="/images/3.png"
      alt="Decorative background"
      className="w-60 opacity-20"
    />
  </div> */}

  <h2 className="text-3xl font-bold text-center text-primary mb-8 z-10 relative">
    Active Gardeners
  </h2>

  <div className="container mx-auto px-4 flex flex-wrap justify-center gap-8 z-10 relative">
    {activegardeners.map((gardener, index) => (
      <div key={index} className="w-full sm:w-[300px] md:w-[350px]">
        <div className="card bg-slate-100 rounded-xl shadow-md hover:shadow-lg transition duration-300">
          <div className="avatar mx-auto pt-6">
            <div className="w-24 h-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={gardener.image} alt={gardener.name} />
            </div>
          </div>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-xl font-semibold text-primary">
              {gardener.name}
            </h2>
            <p className="text-sm font-semibold text-gray-600 mt-2">
              Experienced In:
            </p>
            <p className="text-sm text-gray-700 mb-3">{gardener.experiences}</p>
            <p className="text-sm">
              <span className="font-medium text-gray-600 ">Tips shared: {gardener.tips}</span>
              
            </p>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

  );
};

export default ActiveGardeners;
