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
    await fetch(`${import.meta.env.VITE_baseurl}/toggle-like/${_id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: user.email }),
    })
      .then((res) => res.json())
      .then(() => {
        setLike(!like);
        setLikes(!like ? likes + 1 : likes - 1);
      });
  };

  return (
    <div className=" py-10 px-4 bg-base-100 mt-24">
  <div className="max-w-3xl mx-auto bg-green-50/90 backdrop-blur-md border border-gray-200 shadow-xl rounded-2xl overflow-hidden">
    {/* Image */}
    <img
      src={image}
      alt={title}
      className="w-full h-64 object-cover object-center rounded-t-2xl"
    />

    {/* Content */}
    <div className="p-6 text-gray-800 space-y-5">
      <h1 className="text-3xl font-bold text-primary text-center">{title}</h1>

      {/* Meta info */}
      <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-gray-600">
        <span className="bg-primary/10 px-3 py-1 rounded-full">
          Category: {category}
        </span>
        <span className="bg-primary/10 px-3 py-1 rounded-full">
          Type: {type}
        </span>
        <span className="bg-primary/10 px-3 py-1 rounded-full">
          Difficulty: {difficulty}
        </span>
      </div>

      {/* Description */}
      <p className="text-base leading-relaxed text-justify">
        {description}
      </p>

      {/* Likes */}
      <div className="flex items-center justify-center gap-4 pt-2">
        <button
          onClick={toggleLike}
          className="text-3xl transition-transform hover:scale-110"
        >
          {like ? "❤️" : "🤍"}
        </button>
        <p className="text-sm text-gray-700 font-medium">Total Likes: {likes}</p>
      </div>
    </div>
  </div>
</div>

  );
};

export default TipDetails;
