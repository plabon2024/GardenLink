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
      {tips.map((tip) => (
        <div className="flex bg-slate-200 p-3 w-fit container mx-auto ">
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
  );
};

export default TrendingTips;
