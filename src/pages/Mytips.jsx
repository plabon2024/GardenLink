import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import { Link } from "react-router";
import { FaEye, FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";

const Mytips = () => {
  const { user } = useContext(AuthContext);

  const [all, setAll] = useState([]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_baseurl}/mytips/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAll(data);
      });
  }, [user.email]);

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      console.log(result.isConfirmed);
      if (result.isConfirmed) {
        fetch(`${import.meta.env.VITE_baseurl}/delete/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then(() => {
            const remainingtip = all.filter((item) => item._id !== _id);
            setAll(remainingtip);
          });
      }
    });
  };
  return (
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
      </tr>            ) : (
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
  );
};

export default Mytips;
