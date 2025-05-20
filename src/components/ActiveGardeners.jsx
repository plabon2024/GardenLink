import React, { useEffect, useState } from "react";
import Gardeners from "./Gardeners";

const ActiveGardeners = () => {
  const [activegardeners, setActivegardeners] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/gardeners")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setActivegardeners(data);
      });
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Active Gardeners</h2>
      <ul className="list-disc pl-5">
        {activegardeners.map((gardener, index) => (
          <li key={index}>{gardener.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ActiveGardeners;
