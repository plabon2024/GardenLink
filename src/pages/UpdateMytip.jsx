import React, { useContext, useEffect } from "react";
import { useLoaderData, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthProvider";
import Swal from "sweetalert2";

const UpdateMytip = () => {
  const {
    _id,
    title,
    category,
    image,
    description,
    difficulty,
    type,
    email: email,
    Availability: availability,
  } = useLoaderData();

  const { user } = useContext(AuthContext);
  const location = useLocation();
  let navigate = useNavigate();

  useEffect(() => {
    if (availability === "Private" && user.email !== email) {
      navigate(location.state?.from || "/");
    }
  }, [user, email, navigate, location]);

  const handleUpdatetip = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatedtip = Object.fromEntries(formData.entries());
    fetch(`${import.meta.env.VITE_baseurl}/mytips/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedtip),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          Swal.fire({
            title: "Tip updated",
            text: "You successfully updated Tip !",
            icon: "success",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
    form.reset();
  };
  return (
    <div className="">
      <form
        onSubmit={handleUpdatetip}
        className="text-left container mx-auto py-20 overflow-x-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="mb-6">
            <label htmlFor="title" className="block mb-2 font-medium ">
              Title
            </label>
            <input
              id="title"
              type="text"
              name="title"
              defaultValue={title || ""}
              placeholder="Enter Tip Title"
              className="w-full  shadow-primary shadow focus:outline-primary rounded px-4 py-2"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="type" className="block mb-2 font-medium ">
              Plant Type/Topic
            </label>
            <input
              id="type"
              type="text"
              name="type"
              defaultValue={type || ""}
              placeholder="Enter Plant Type/Topic"
              className="w-full  shadow-primary shadow focus:outline-primary rounded px-4 py-2"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="difficulty" className="block mb-2 font-medium ">
              Difficulty Level
            </label>
            <select
              id="difficulty"
              name="difficulty"
              defaultValue={difficulty || ""}
              className="w-full  shadow-primary shadow focus:outline-primary rounded px-4 py-2"
            >
              <option value="">Select difficulty</option>
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
          </div>

          <div className="mb-6">
            <label htmlFor="description" className="block mb-2 font-medium ">
              Description
            </label>
            <input
              id="description"
              type="text"
              name="description"
              defaultValue={description || ""}
              placeholder="Enter gardening experience"
              className="w-full  shadow-primary shadow focus:outline-primary rounded px-4 py-2"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="image" className="block mb-2 font-medium ">
              Image URL
            </label>
            <input
              id="image"
              type="text"
              name="image"
              defaultValue={image || ""}
              placeholder="Enter image URL"
              className="w-full  shadow-primary shadow focus:outline-primary rounded px-4 py-2"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="category" className="block mb-2 font-medium ">
              Category
            </label>
            <input
              id="category"
              type="text"
              name="category"
              defaultValue={category || ""}
              placeholder="Enter category"
              className="w-full  shadow-primary shadow focus:outline-primary rounded px-4 py-2"
            />
          </div>

          <div className="mb-6 col-span-2">
            <label htmlFor="Availability" className="block mb-2 font-medium ">
              Availability
            </label>
            <select
              id="Availability"
              name="Availability"
              defaultValue={availability || ""}
              className="w-full  shadow-primary shadow focus:outline-primary rounded px-4 py-2"
            >
              <option value="">Select Availability</option>
              <option value="Public">Public</option>
              <option value="Private">Private</option>
            </select>
          </div>
          <div className="mb-6">
            <label htmlFor="displayName" className="block mb-2 font-medium ">
              Name
            </label>
            <input
              id="displayName"
              type="text"
              name="displayName"
              placeholder="Enter displayName"
              value={user.displayName}
              readOnly
              className="w-full cursor-not-allowed shadow-primary shadow focus:outline-primary rounded px-4 py-2"
            />
          </div>
          <div className="mb-6 ">
            <label htmlFor="email" className="block mb-2 font-medium ">
              Email
            </label>
            <input
              id="email"
              type="text"
              name="email"
              placeholder="Enter email"
              value={user.email}
              readOnly
              className="w-full cursor-not-allowed  shadow-primary shadow focus:outline-primary rounded px-4 py-2"
            />
          </div>
          <button
            type="submit"
            className="text-xl btn btn-primary md:col-span-2 text-black border rounded p-5"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateMytip;
