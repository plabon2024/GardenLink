import React, { useContext, useEffect, useState } from "react";
import Profile from "../../components/Profile";
import { AuthContext } from "../../context/AuthProvider";

const Dashbordcards = () => {
  const { user } = useContext(AuthContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`${import.meta.env.VITE_baseurl}/mytips/${user.email}`)
        .then((res) => res.json())
        .then((data) => setData(data));
    }
  }, [user?.email]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-8">
      <Profile />

      <div>
        <h2 className="text-2xl font-bold mb-4 text-primary ">
          Your Shared Tips ({data.length})
        </h2>

        {data.length === 0 ? (
          <p className="text-gray-500">You haven’t shared any tips yet.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
            {data.map((tip) => (
              <div
                key={tip._id}
                className="card bg-base-100 shadow-md hover:shadow-lg transition rounded-xl overflow-hidden"
              >
                <div className="card-body space-y-2 ">
                  <h3 className="text-xl font-semibold">{tip.title}</h3>
                  <p className="text-sm text-gray-500">
                    {tip.description.slice(0, 40)}...
                  </p>
                  <div className="flex flex-wrap justify-between text-sm text-neutral">
                    <span>
                      Difficulty: <strong>{tip.difficulty}</strong>
                    </span>
                    <span>
                      Category: <strong>{tip.category}</strong>
                    </span>
                    <span>
                      Type: <strong>{tip.type}</strong>
                    </span>
                    <span
                      className={`badge ${
                        tip.Availability === "Public"
                          ? "badge-success"
                          : "badge-warning"
                      }`}
                    >
                      {tip.Availability}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashbordcards;
