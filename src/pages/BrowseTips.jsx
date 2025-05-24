import React, { useEffect, useState } from "react";
import Tip from "../components/Tip";
import { FaEye } from "react-icons/fa";
import { Link, NavLink } from "react-router";

const BrowseTips = () => {
  const [alltips, setAlltips] = useState([]);
  const [difficultyFilter, setDifficultyFilter] = useState("All");

  useEffect(() => {
    fetch(`${import.meta.env.VITE_baseurl}/alltip`)
      .then((res) => res.json())
      .then((data) => {
        setAlltips(data);
      });
  }, []);
  return (
    <div className="flex-col flex justify-center container mx-auto ">
      <div className="flex p-4">
        <select
          className="border border-secondary rounded px-4 py-2"
          value={difficultyFilter}
          onChange={(e) => setDifficultyFilter(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>
      </div>
      <div className="overflow-x-auto rounded-md border border-secondary    my-5 flex-col flex">
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
            {[...alltips]
              .sort((a, b) => {
                if (difficultyFilter === "All") return 0;
                if (
                  a.difficulty === difficultyFilter &&
                  b.difficulty !== difficultyFilter
                )
                  return -1;
                if (
                  a.difficulty !== difficultyFilter &&
                  b.difficulty === difficultyFilter
                )
                  return 1;
                return 0;
              })
              .map((item) => (
                <tr key={item.id} className="border-t border-secondary">
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img src={item.image} alt="item" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{item.title}</div>
                      </div>
                    </div>
                  </td>
                  <td>{item.category}</td>
                  <td>
                    <div className="font-bold">{item.difficulty}</div>
                  </td>
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
    </div>
  );
};

export default BrowseTips;
