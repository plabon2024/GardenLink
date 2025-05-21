import React from "react";

const TrendingTips = () => {
  return (
    <div>
      <div className="card card-dash bg-base-100 w-96 container mx-auto ">
        <div className="card-body">
          <h2 className="card-title">Card Title</h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingTips;
