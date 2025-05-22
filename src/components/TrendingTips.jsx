import React, { useEffect, useState } from "react";

import Tip from "./Tip";

const TrendingTips = () => {
  const [tips, setTips] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/tip")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTips(data);
      });
  }, []);

  return (
    <div>
      <h1 className=" my-5 text-2xl text-center font-bold">Trending Tips</h1>
      <div className="flex flex-wrap lg:grid lg:grid-cols-2 justify-center  gap-2 my-10 container mx-auto">
        {tips.map((tip) => (
        
   <Tip tip={tip}></Tip>
          
        ))}
      </div>
    </div>
  );
};

export default TrendingTips;
