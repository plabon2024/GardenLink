import React from "react";

const Tip = ({tip}) => {
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img
            src={tip.image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{tip.title}</h2>
          <p>
           {tip.difficulty}
          </p>
          <p>
           {tip.category}
          </p>
          <p>
           {tip.description}
          </p>
        
          
        </div>
      </div>
    </div>
  );
};

export default Tip;
