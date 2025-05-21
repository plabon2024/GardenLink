import React, { useEffect, useState } from "react";

const ExploreGardeners = () => {
  const [allgardeners, setAllgardeners] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/allgardeners")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAllgardeners(data);
      });
  }, []);
  return (
    <div className="container mx-auto flex flex-wrap gap-5 items-center justify-center my-10">
      {allgardeners.map((gardener, index) => (
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
              <p> Age : {gardener.age}</p>
              <p> Gender : {gardener.gender}</p>
              <p> Status : {gardener.status}</p>
              <p> Tips shared : {gardener.tips}</p>
            
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExploreGardeners;
