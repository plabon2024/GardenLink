import React, { useEffect, useState } from "react";
import Tip from "../components/Tip";
import { FaEye } from "react-icons/fa";
import { Link, NavLink } from "react-router";

const BrowseTips = () => {
  const [alltips, setAlltips] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/alltip")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAlltips(data);
      });
  }, []);
  return (
    <div>
      <div className="overflow-x-auto rounded-md border border-black">
        <table className="table w-full">
          <thead>
            <tr className="border-b border-black ">
              <th>Title</th>
              <th>category</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {alltips.map((item) => (
              <tr key={item.id} className="border-t border-black ">
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
                  <Link to={`/tipdetails/${item._id}`}>
                    
                  <FaEye className="btn btn-ghost border-none size-14"/>
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
