import React from 'react';

const SeasonalTip = () => {
    return (
<section>
          <h2 className="text-center text-3xl font-bold text-green-700 mb-6">
            🌸 Seasonal Gardening Tips
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                title: "Spring",
                tip: "Plant herbs like basil and mint. Start your tomatoes indoors.",
                emoji: "🌱",
              },
              {
                title: "Summer",
                tip: "Keep plants hydrated and add mulch to retain moisture.",
                emoji: "🌞",
              },
              {
                title: "Autumn",
                tip: "Harvest veggies and prepare soil with compost.",
                emoji: "🍂",
              },
              {
                title: "Winter",
                tip: "Prune trees and plan your garden layout for next year.",
                emoji: "❄️",
              },
            ].map((season, i) => (
              <div
                key={i}
                className="bg-green-50 border-l-4 border-green-500 p-4 rounded shadow"
              >
                <h3 className="text-xl font-semibold mb-2">
                  {season.emoji} {season.title}
                </h3>
                <p className="text-gray-700">{season.tip}</p>
              </div>
            ))}
          </div>
        </section>
    );
};

export default SeasonalTip;