import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import Swal from "sweetalert2";

const Tipinput = () => {
  const { user } = useContext(AuthContext);
  const handleAddGardener = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    const gardener = Object.fromEntries(formData.entries());
    fetch(`${import.meta.env.VITE_baseurl}/tip`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(gardener),
    })
      .then((res) => res.json())
      .then(() => {
            Swal.fire({
                    title: "Tip added",
                    text: "You successfully added new Tip !",
                    icon: "success",
                    showConfirmButton: false,
                    timer: 1500,
                  });
      });
      form.reset()
  };
  return (
    <div>
      <form
        onSubmit={handleAddGardener}
        className="text-left overflow-x-auto container mx-auto my-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-neutral">
          <div className="mb-6">
            <label
              htmlFor="title"
              className="block mb-2 font-medium "
            >
              Title
            </label>
            <input
              id="title"
              type="text"
              name="title"
              required
              placeholder="Enter  Plant Type/Topic"
              className="w-full   shadow-primary shadow focus:outline-primary rounded px-4 py-2"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="type"
              className="block mb-2 font-medium"
            >
              Plant Type/Topic
            </label>
            <input
              id="type"
              type="text"
              name="type"
              required
              placeholder="Enter  Plant Type/Topic"
              className="w-full  shadow-primary shadow focus:outline-primary rounded px-4 py-2"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="difficulty"
              className="block mb-2 font-medium"
            >
              Difficulty Level
            </label>
            <select
              id="difficulty"
              name="difficulty"
              required
              className="w-full  shadow-primary shadow focus:outline-primary rounded px-4 py-2"
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
              className="block mb-2 font-medium"
            >
              Description
            </label>
            <input
              id="description"
              type="text"
              name="description"
              required
              placeholder="Enter gardening experiences"
              className="w-full  shadow-primary shadow focus:outline-primary rounded px-4 py-2"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="image"
              className="block mb-2 font-medium"
            >
              Image
            </label>
            <input
              id="image"
              type="text"
              name="image"
              required
              placeholder="Enter imageUrl"
              className="w-full  shadow-primary shadow focus:outline-primary rounded px-4 py-2"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="category"
              className="block mb-2 font-medium"
            >
              Category
            </label>
            <input
              id="category"
              type="text"
              name="category"
              required
              placeholder="Enter Category "
              className="w-full  shadow-primary shadow focus:outline-primary rounded px-4 py-2"
            />
          </div>

          <div className="mb-6 col-span-2">
            <label
              htmlFor="Availability"
              className="block mb-2 font-medium"
            >
              Availability
            </label>
            <select
              id="Availability"
              name="Availability"
              required
              className="w-full  shadow-primary shadow focus:outline-primary rounded px-4 py-2"
            >
              <option  value="">Select Availability </option>
              <option  value="Public">Public</option>
              <option  value="Private">Private</option>
            </select>
          </div>

          <div className="mb-6">
            <label
              htmlFor="displayName"
              className="block mb-2 font-medium"
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
              className="w-full cursor-not-allowed  shadow-primary shadow focus:outline-primary rounded px-4 py-2"
            />
          </div>
          <div className="mb-6 ">
            <label
              htmlFor="email"
              className="block mb-2 font-medium"
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
              className="w-full cursor-not-allowed  shadow-primary shadow focus:outline-primary rounded px-4 py-2"
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
