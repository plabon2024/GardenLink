import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const Tipinput = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const handleAddGardener = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    const gardener = Object.fromEntries(formData.entries());
    fetch("http://localhost:3000/tip", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(gardener),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div>
      <form
        onSubmit={handleAddGardener}
        className="text-left overflow-x-auto container mx-auto my-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="mb-6">
            <label
              htmlFor="title"
              className="block mb-2 font-medium text-gray-900"
            >
              Title
            </label>
            <input
              id="title"
              type="text"
              name="title"
              placeholder="Enter  Plant Type/Topic"
              className="w-full bg-white shadow-primary shadow focus:outline-primary rounded px-4 py-2"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="type"
              className="block mb-2 font-medium text-gray-900"
            >
              Plant Type/Topic
            </label>
            <input
              id="type"
              type="text"
              name="type"
              placeholder="Enter  Plant Type/Topic"
              className="w-full bg-white shadow-primary shadow focus:outline-primary rounded px-4 py-2"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="difficulty"
              className="block mb-2 font-medium text-gray-900"
            >
              Difficulty Level
            </label>
            <select
              id="difficulty"
              name="difficulty"
              className="w-full bg-white shadow-primary shadow focus:outline-primary rounded px-4 py-2"
            >
              <option value="">Select difficulty</option>
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
          </div>

          <div className="mb-6">
            <label
              htmlFor="description"
              className="block mb-2 font-medium text-gray-900"
            >
              Description
            </label>
            <input
              id="description"
              type="text"
              name="description"
              placeholder="Enter gardening experiences"
              className="w-full bg-white shadow-primary shadow focus:outline-primary rounded px-4 py-2"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="image"
              className="block mb-2 font-medium text-gray-900"
            >
              Image
            </label>
            <input
              id="image"
              type="text"
              name="image"
              placeholder="Enter imageUrl"
              className="w-full bg-white shadow-primary shadow focus:outline-primary rounded px-4 py-2"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="category"
              className="block mb-2 font-medium text-gray-900"
            >
              Category
            </label>
            <input
              id="category"
              type="text"
              name="category"
              placeholder="Enter Category "
              className="w-full bg-white shadow-primary shadow focus:outline-primary rounded px-4 py-2"
            />
          </div>

          <div className="mb-6 col-span-2">
            <label
              htmlFor="Availability"
              className="block mb-2 font-medium text-gray-900"
            >
              Availability
            </label>
            <select
              id="Availability"
              name="Availability"
              className="w-full bg-white shadow-primary shadow focus:outline-primary rounded px-4 py-2"
            >
              <option value="">Select Availability </option>
              <option value="Public">Public</option>
              <option value="Private">Private</option>
            </select>
          </div>

          <div className="mb-6">
            <label
              htmlFor="displayName"
              className="block mb-2 font-medium text-gray-900"
            >
              Name
            </label>
            <input
              id="displayName"
              type="text"
              name="displayName"
              placeholder="Enter displayName"
              value={user.displayName}
              readOnly
              className="w-full cursor-not-allowed bg-slate-200 shadow-primary shadow focus:outline-primary rounded px-4 py-2"
            />
          </div>
          <div className="mb-6 ">
            <label
              htmlFor="email"
              className="block mb-2 font-medium text-gray-900"
            >
              Email
            </label>
            <input
              id="email"
              type="text"
              name="email"
              placeholder="Enter email"
              value={user.email}
              readOnly 
              className="w-full cursor-not-allowed bg-slate-200 shadow-primary shadow focus:outline-primary rounded px-4 py-2"
            />
          </div>
          <button
            type="submit"
            className="text-xl btn btn-primary md:col-span-2 text-black border rounded p-5"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Tipinput;
