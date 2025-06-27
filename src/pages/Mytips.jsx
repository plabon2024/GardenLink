import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import { Link } from "react-router";
import { FaEye, FaList, FaPen, FaThLarge } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";

const Mytips = () => {
  const { user } = useContext(AuthContext);
  const [all, setAll] = useState([]);
  const [viewMode, setViewMode] = useState("card"); // table or card
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_baseurl}/mytips/${user.email}`)
      .then((res) => res.json())
      .then((data) => (setAll(data), setLoading(false)));
  }, [user.email]);

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This tip will be permanently deleted.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#22c55e",
      cancelButtonColor: "#ef4444",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`${import.meta.env.VITE_baseurl}/delete/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then(() => {
            const remaining = all.filter((item) => item._id !== _id);
            setAll(remaining);
          });
      }
    });
  };


  if (loading) {
    return (
       <div className="min-h-screen flex justify-center items-center">
          <span className="loading loading-spinner loading-xl"></span>
        </div>
    );
  }
  return (
    <div className="container mx-auto px-4 mt-28">
      <div className="flex justify-between mb-6">
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

      {all.length === 0 ? (
        <div className="text-center text-gray-600 py-10">
          You haven’t shared any tips yet.
        </div>
      ) : viewMode === "table" ? (
        <div>
          <div className="overflow-x-auto rounded-md border border-secondary container mx-auto lg:min-h-[calc(100vh-500px)] my-10">
            <table className="table w-full">
              <thead>
                <tr className="border-b border-secondary ">
                  <th>Title</th>
                  <th>category</th>
                  <th className="hidden md:block">See More</th>
                  <th>Update</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {all.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="text-center py-4">
                      No Post Found
                    </td>
                  </tr>
                ) : (
                  all.map((item) => (
                    <tr key={item.id} className="border-t border-secondary ">
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
                      <td className="hidden md:block">
                        <Link to={`/tipdetails/${item._id}`}>
                          <FaEye className="btn btn-ghost border-none size-14" />
                        </Link>
                      </td>
                      <td>
                        {" "}
                        <Link to={`/updatemytip/${item._id}`}>
                          <FaPen className="btn btn-ghost border-none size-14" />
                        </Link>
                      </td>
                      <td>
                        <div>
                          <MdDelete
                            onClick={() => handleDelete(item._id)}
                            className="btn btn-ghost border-none size-14"
                          />
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  gap-6">
          {all.map((item) => (
            <div
              key={item._id}
              className="card bg-base-200 shadow p-4 border border-base-300"
            >
              <figure className="mb-3">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-40 w-full object-cover rounded-md"
                />
              </figure>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-sm">Category: {item.category}</p>
                <div className="flex justify-between mt-3">
                  <Link
                    to={`/tipdetails/${item._id}`}
                    className="btn btn-sm btn-primary"
                  >
                    <FaEye size={15} />
                  </Link>
                  <Link
                    to={`/updatemytip/${item._id}`}
                    className="btn btn-sm btn-primary"
                  >
                    <FaPen size={15} />
                  </Link>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="btn btn-sm btn-error"
                  >
                    <MdDelete size={15} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Mytips;
