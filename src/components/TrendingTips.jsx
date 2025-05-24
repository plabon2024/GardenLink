import React, { useEffect, useState } from "react";

import Tip from "./Tip";

const TrendingTips = () => {
  const [tips, setTips] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_baseurl}/tip`)
      .then((res) => res.json())
      .then((data) => {
        setTips(data);
      });
  }, []);

  return (
    <div>
      <h1 className="my-5 text-2xl text-center font-bold">Trending Tips</h1>
      <div className="text-info flex flex-wrap lg:grid lg:grid-cols-2 justify-center  gap-2 my-10 container mx-auto">
        {tips.map((tip) => (
          <Tip key={tip._id} tip={tip}></Tip>
        ))}
      </div>

      
    </div>
  );
};

export default TrendingTips;
