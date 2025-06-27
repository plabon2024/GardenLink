import React from "react";

const FeaturedGardeners = () => {
  return (
    <div>
      <section>
        <h2 className="text-center text-3xl font-bold text-green-700 mb-6">
          🌟 Featured Gardeners
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            {
              name: "Fatema R.",
              tip: "Grow happiness from the soil up 🌿",
              image: "https://i.pravatar.cc/150?img=32",
            },
            {
              name: "Nashit A.",
              tip: "Compost is the key to a thriving garden!",
              image: "https://i.pravatar.cc/150?img=12",
            },
            {
              name: "Tanjim K.",
              tip: "Vertical gardening works wonders in small spaces.",
              image: "https://i.pravatar.cc/150?img=56",
            },
          ].map((gardener, i) => (
            <div
              key={i}
              className="bg-white p-4 rounded-xl shadow hover:shadow-md transition"
            >
              <img
                src={gardener.image}
                alt={gardener.name}
                className="w-20 h-20 rounded-full mx-auto border-2 border-green-500"
              />
              <h4 className="text-lg font-semibold text-center mt-3">
                {gardener.name}
              </h4>
              <p className="text-sm text-center mt-1 text-gray-600 italic">
                “{gardener.tip}”
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FeaturedGardeners;
