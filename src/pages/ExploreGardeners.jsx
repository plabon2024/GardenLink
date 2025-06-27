import React, { useEffect, useState } from "react";

const ExploreGardeners = () => {
 const [allgardeners, setAllgardeners] = useState([]);
  const [loading, setLoading] = useState(true); // New loading state

  useEffect(() => {
    setLoading(true);
    fetch(`${import.meta.env.VITE_baseurl}/allgardeners`)
      .then((res) => res.json())
      .then((data) => {
        setAllgardeners(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
       <div className="min-h-screen flex justify-center items-center">
          <span className="loading loading-spinner loading-xl"></span>
        </div>
    );
  }
  return (
    <div className="container mx-auto mt-28 px-4 flex flex-wrap gap-8 justify-center">
      {allgardeners.map((gardener, index) => (
        <div key={index} className="w-full sm:w-[300px] md:w-[350px]">
          <div className="card bg-white text-gray-800 shadow-lg hover:shadow-xl transition duration-300 rounded-xl overflow-hidden">
            <div className="avatar mx-auto pt-6">
              <div className="w-24 h-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={gardener.image} alt={gardener.name} />
              </div>
            </div>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-lg font-semibold text-primary">
                {gardener.name}
              </h2>
              <p className="font-bold text-sm mt-2 text-gray-600">
                Experienced In:
              </p>
              <p className="text-sm text-gray-700">{gardener.experiences}</p>
              <div className="divider my-2"></div>
              <div className="text-sm space-y-1 text-gray-700">
                <p>
                  <span className="font-semibold">Age:</span> {gardener.age}
                </p>
                <p>
                  <span className="font-semibold">Gender:</span>{" "}
                  {gardener.gender}
                </p>
                <p>
                  <span className="font-semibold">Status:</span>{" "}
                  {gardener.status}
                </p>
                <p>
                  <span className="font-semibold">Tips shared:</span>{" "}
                  {gardener.tips}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExploreGardeners;
