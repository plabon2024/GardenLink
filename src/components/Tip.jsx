import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import { Link } from "react-router";

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

  const toggleLike = async () => {
    fetch(`http://localhost:3000/toggle-like/${_id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: user.email }),
    })
      .then((res) => res.json())
      .then((data) => {
        setLike(!like);
        setLikes(!like ? likes + 1 : likes - 1);
        console.log(data, "hi");
      });
  };
  return (
    <>
      <div className="col-auto flex grow bg-slate-200 p-4  container mx-auto w-full">
        <div className="avatar">
          <div className="w-32 rounded">
            <img src={tip.image} />
          </div>
        </div>
        <div className="card-body">
          <h2 className="card-title">{tip.title}</h2>

          <p>Category: {tip.category}</p>
          <Link
            className="btn btn-ghost border-none w-fit"
            to={`/tipdetails/${_id}`}
          >
            see more
          </Link>
          <div className="flex gap-10 items-end">
            <button
              onClick={toggleLike}
              className="btn border-none btn-ghost btn-xl"
            >
              {like ? "❤️" : "🤍"}
            </button>
            <p>Total like: {likes}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tip;
