import React, { useEffect, useState } from "react";

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
          <div className="col-auto flex grow bg-slate-200 p-4  container mx-auto w-full">
            <div className="avatar">
              <div className="w-24 rounded">
                <img src={tip.image} />
              </div>
            </div>
            <div className="card-body">
              <h2 className="card-title">{tip.title}</h2>
              <p>{tip.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingTips;
