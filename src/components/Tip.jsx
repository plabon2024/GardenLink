import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import { Link } from "react-router";
import Swal from "sweetalert2";

const Tip = ({ tip }) => {
  const { user } = useContext(AuthContext);
  const [like, setLike] = useState(false);
  const [likes, setLikes] = useState(0);
  const { _id, likedBy = [] } = tip;

  useEffect(() => {
    if (Array.isArray(likedBy) && user?.email) {
      setLike(likedBy.includes(user.email));
      setLikes(likedBy.length);
    }
  }, [likedBy, user]);

  useEffect(() => {
    setLikes(likedBy.length);
  }, []);

  const toggleLike = async () => {
    user
      ? await fetch(`${import.meta.env.VITE_baseurl}/toggle-like/${_id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: user.email }),
        })
          .then((res) => res.json())
          .then(() => {
            setLike(!like);
            setLikes(!like ? likes + 1 : likes - 1);
          })
      : Swal.fire({
          title: "Login first to like Tip",
          icon: "error",
          timer: 2000,
          showConfirmButton: false,
        });
  };
  return (
    <>
<div className="container mx-auto w-full bg-slate-100 rounded-lg p-4 flex flex-col sm:flex-row items-center gap-6 shadow-md">
  {/* Avatar Image */}
  <div className="avatar">
    <div className="w-32 h-32 rounded-lg ring ring-primary ring-offset-base-100 ring-offset-2">
      <img src={tip.image} alt={tip.title} className="object-cover w-full h-full" />
    </div>
  </div>

  {/* Content Section */}
  <div className="flex-grow">
    <h2 className="text-xl font-bold text-primary mb-2">{tip.title}</h2>
    <p className="text-sm text-gray-600 mb-2">Category: {tip.category}</p>

    <Link
      to={`/tipdetails/${_id}`}
      className="btn btn-outline btn-sm rounded-full mb-3"
    >
      See More
    </Link>

    {/* Like Section */}
    <div className="flex items-center gap-4 mt-2">
      <button
        onClick={toggleLike}
        className="text-2xl hover:scale-110 transition-transform"
      >
        {like ? "❤️" : "🤍"}
      </button>
      <p className="text-sm text-gray-700">Total Likes: {likes}</p>
    </div>
  </div>
</div>

    </>
  );
};

export default Tip;
