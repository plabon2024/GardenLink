import React from "react";
import { useLoaderData } from "react-router";

const UpdateMytip = () => {
  const {_id, title, category, image, description, difficulty, type,Availability } =
    useLoaderData();

  const handleUpdatetip = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatedtip = Object.fromEntries(formData.entries());
    fetch(`http://localhost:3000/mytips/${_id}`, {
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
          alert("upldated");
        }
      });
  };
  return (
    <div>
      <form onSubmit={handleUpdatetip} className="text-left">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="mb-6">
            <label htmlFor="title" className="block mb-2 font-medium text-gray-900">
              Title
            </label>
            <input
              id="title"
              type="text"
              name="title"
              defaultValue={title || ""}
              placeholder="Enter Tip Title"
              className="w-full bg-white shadow-primary shadow focus:outline-primary rounded px-4 py-2"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="type" className="block mb-2 font-medium text-gray-900">
              Plant Type/Topic
            </label>
            <input
              id="type"
              type="text"
              name="type"
              defaultValue={type || ""}
              placeholder="Enter Plant Type/Topic"
              className="w-full bg-white shadow-primary shadow focus:outline-primary rounded px-4 py-2"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="difficulty" className="block mb-2 font-medium text-gray-900">
              Difficulty Level
            </label>
            <select
              id="difficulty"
              name="difficulty"
              defaultValue={difficulty || ""}
              className="w-full bg-white shadow-primary shadow focus:outline-primary rounded px-4 py-2"
            >
              <option value="">Select difficulty</option>
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
          </div>

          <div className="mb-6">
            <label htmlFor="description" className="block mb-2 font-medium text-gray-900">
              Description
            </label>
            <input
              id="description"
              type="text"
              name="description"
              defaultValue={description || ""}
              placeholder="Enter gardening experience"
              className="w-full bg-white shadow-primary shadow focus:outline-primary rounded px-4 py-2"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="image" className="block mb-2 font-medium text-gray-900">
              Image URL
            </label>
            <input
              id="image"
              type="text"
              name="image"
              defaultValue={image || ""}
              placeholder="Enter image URL"
              className="w-full bg-white shadow-primary shadow focus:outline-primary rounded px-4 py-2"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="category" className="block mb-2 font-medium text-gray-900">
              Category
            </label>
            <input
              id="category"
              type="text"
              name="category"
              defaultValue={category || ""}
              placeholder="Enter category"
              className="w-full bg-white shadow-primary shadow focus:outline-primary rounded px-4 py-2"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="Availability" className="block mb-2 font-medium text-gray-900">
              Availability
            </label>
            <select
              id="Availability"
              name="Availability"
              defaultValue={Availability || ""}
              className="w-full bg-white shadow-primary shadow focus:outline-primary rounded px-4 py-2"
            >
              <option value="">Select Availability</option>
              <option value="Public">Public</option>
              <option value="Private">Private</option>
            </select>
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
