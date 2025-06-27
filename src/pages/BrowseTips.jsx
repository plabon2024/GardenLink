import React, { useEffect, useState } from "react";
import { FaEye, FaThLarge, FaList } from "react-icons/fa";
import { Link } from "react-router";

const BrowseTips = () => {
  const [alltips, setAlltips] = useState([]);
  const [difficultyFilter, setDifficultyFilter] = useState("All");
  const [viewMode, setViewMode] = useState("card");
  const [loading,setLoading]=useState(true)
  useEffect(() => {
    fetch(`${import.meta.env.VITE_baseurl}/alltip`)
      .then((res) => res.json())
      .then((data) => {
        setAlltips(data);
        setLoading(false)
      });
  }, []);

  const filteredTips = [...alltips].filter((tip) =>
    difficultyFilter === "All" ? true : tip.difficulty === difficultyFilter
  );

  if (loading) {
    return (
       <div className="min-h-screen flex justify-center items-center">
          <span className="loading loading-spinner loading-xl"></span>
        </div>
    );
  }
  return (
    <div className="container mx-auto px-4 py-8 mt-28">
      {/* Controls */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <select
          className="select select-bordered w-48"
          value={difficultyFilter}
          onChange={(e) => setDifficultyFilter(e.target.value)}
        >
          <option value="All">All Difficulties</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>

        <div className="flex gap-2">
          <button
            className={`btn btn-sm ${
              viewMode === "table" ? "btn-primary" : "btn-outline"
            }`}
            onClick={() => setViewMode("table")}
          >
            <FaList />
          </button>
          <button
            className={`btn btn-sm ${
              viewMode === "card" ? "btn-primary" : "btn-outline"
            }`}
            onClick={() => setViewMode("card")}
          >
            <FaThLarge />
          </button>
        </div>
      </div>

      {/* View Switch */}
      {viewMode === "table" ? (
        <div className="overflow-x-auto rounded-md border border-secondary">
          <table className="table w-full">
            <thead>
              <tr className="border-b border-secondary">
                <th>Title</th>
                <th>Category</th>
                <th>Difficulty</th>
                <th>See More</th>
              </tr>
            </thead>
            <tbody>
              {filteredTips.map((item) => (
                <tr key={item._id} className="border-t border-secondary">
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img src={item.image} alt="item" />
                        </div>
                      </div>
                      <div className="font-bold">{item.title}</div>
                    </div>
                  </td>
                  <td>{item.category}</td>
                  <td className="font-semibold">{item.difficulty}</td>
                  <td>
                    <Link to={`/tipdetails/${item._id}`}>
                      <FaEye className="btn btn-ghost border-none size-14" />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 wrap-anywhere gap-6">
          {filteredTips.map((item) => (
            <div
              key={item._id}
              className="card bg-base-200 shadow-sm p-4 rounded-md border border-base-300"
            >
              <figure className="mb-3">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-40 w-full object-cover rounded-md"
                />
              </figure>
              <div className="space-y-2">
                <h2 className="text-xl font-bold">{item.title}</h2>
                <p className="text-sm">Category: {item.category}</p>
                <p className="text-sm font-semibold">
                  Difficulty: {item.difficulty}
                </p>
                <Link
                  to={`/tipdetails/${item._id}`}
                  className="btn btn-sm btn-outline w-fit"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BrowseTips;
