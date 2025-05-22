import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import { Link } from "react-router";
import { FaEye, FaPen  } from "react-icons/fa";
import { MdDelete } from "react-icons/md";



const Mytips = () => {
  const { user } = useContext(AuthContext);

  const [all, setAll] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3000/mytips/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAll(data);
      });
  }, [user.email]);

    const handleDelete=(_id)=>{
    fetch(`http://localhost:3000/delete/${_id}`,{
      method:"DELETE"
    }).then(res=>res.json())
    .then(data=>{console.log(data)})
  }
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
            {all.map((item) => (
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
                    <FaEye className="btn btn-ghost border-none size-14" />
                  </Link>
                  <Link to={`/updatemytip/${item._id}`}>
                    <FaPen className="btn btn-ghost border-none size-14" />
                  </Link>
                  <div>
                    <MdDelete  onClick={()=>handleDelete(item._id)} className="btn btn-ghost border-none size-14" />
                  </div>
                
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Mytips;
