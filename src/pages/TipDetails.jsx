import React, { useContext, useEffect } from "react";
import { useLoaderData, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthProvider";

const TipDetails = () => {
  const {
    title,
    category,
    image,
    description,
    difficulty,
    type,
    email: email,
  } = useLoaderData();
  const { user } = useContext(AuthContext);
  const location = useLocation();
  let navigate = useNavigate();

  useEffect(() => {
    if (user.email !== email) {
      navigate(location.state?.from || "/");
    }
  }, [user, email, navigate, location]);
  return (
    <div>
      <div className="mx-auto flex justify-center items-center h-[calc(100vh-300px)]">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default TipDetails;
