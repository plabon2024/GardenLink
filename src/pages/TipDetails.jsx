import React, { useContext, useEffect, useState } from "react";
import { useLoaderData, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthProvider";

const TipDetails = () => {
  const {
    _id,
    title,
    category,
    image,
    description,
    difficulty,
    type,
    email: authorEmail,
    Availability: availability,
    likedBy = [],
  } = useLoaderData();

  const { user } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const [like, setLike] = useState(false);
  const [likes, setLikes] = useState(0);

  // Restrict access to private tips
  useEffect(() => {
    if (availability === "Private" && user?.email !== authorEmail) {
      navigate(location.state?.from || "/");
    }
  }, [user, authorEmail, navigate, location, availability]);

  // Determine if user already liked
  useEffect(() => {
    if (Array.isArray(likedBy) && user?.email) {
      setLike(likedBy.includes(user.email));
      setLikes(likedBy.length);
    }
  }, [likedBy, user]);

  const toggleLike = async () => {
    await fetch(`http://localhost:3000/toggle-like/${_id}`, {
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
    <div>
      <div className="mx-auto flex justify-center items-center">
        <div className="p-5 backdrop-blur-md border border-black shadow-lg rounded-xl overflow-hidden max-w-fit">
          <img src={image} alt={title} className="w-full h-64 object-contain" />

          <div className="p-6 space-y-4 text-black">
            <h1 className="text-3xl font-bold">{title}</h1>

            <div className="flex flex-wrap gap-4 text-lg">
              <span>Category: {category}</span>
              <span>Type: {type}</span>
              <span>Difficulty: {difficulty}</span>
            </div>

            <p className="text-base leading-relaxed">{description}</p>
            <div className="flex items-center">
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
      </div>
    </div>
  );
};

export default TipDetails;
