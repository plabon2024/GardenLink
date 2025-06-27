// import React from "react";

// const Gardeners = () => {
//   const handleAddGardener = (e) => {
//     e.preventDefault();
//     const form = e.target;
//     const formData = new FormData(form);
//     const gardener = Object.fromEntries(formData.entries());
//     fetch(`${import.meta.env.VITE_baseurl}/gardeners`, {
//       method: "POST",
//       headers: {
//         "content-type": "application/json",
//       },
//       body: JSON.stringify(gardener),
//     })
//       .then((res) => res.json())
//       .then(() => {});

//   };

//   return (
//     <div className="my-28">
//       <form onSubmit={handleAddGardener} className="text-left">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//           {/* Gardener's Name */}
//           <div className="mb-6">
//             <label
//               htmlFor="name"
//               className="block mb-2 font-medium text-gray-900"
//             >
//               Gardener's Name
//             </label>
//             <input
//               id="name"
//               type="text"
//               name="name"
//               placeholder="Enter gardener's name"
//               className="w-full bg-white shadow-primary shadow focus:outline-primary rounded px-4 py-2"
//             />
//           </div>

//           {/* Age */}
//           <div className="mb-6">
//             <label
//               htmlFor="age"
//               className="block mb-2 font-medium text-gray-900"
//             >
//               Age
//             </label>
//             <input
//               id="age"
//               type="number"
//               name="age"
//               placeholder="Enter age"
//               className="w-full bg-white shadow-primary shadow focus:outline-primary rounded px-4 py-2"
//             />
//           </div>

//           {/* Gender */}
//           <div className="mb-6">
//             <label
//               htmlFor="gender"
//               className="block mb-2 font-medium text-gray-900"
//             >
//               Gender
//             </label>
//             <select
//               id="gender"
//               name="gender"
//               className="w-full bg-white shadow-primary shadow focus:outline-primary rounded px-4 py-2"
//             >
//               <option value="">Select gender</option>
//               <option value="Male">Male</option>
//               <option value="Female">Female</option>
//               <option value="Other">Other</option>
//             </select>
//           </div>

//           {/* Status */}
//           <div className="mb-6">
//             <label
//               htmlFor="status"
//               className="block mb-2 font-medium text-gray-900"
//             >
//               Status
//             </label>
//             <select
//               id="status"
//               name="status"
//               className="w-full bg-white shadow-primary shadow focus:outline-primary rounded px-4 py-2"
//             >
//               <option value="">Select status</option>
//               <option value="Active">Active</option>
//               <option value="Retired">Retired</option>
//             </select>
//           </div>

//           {/* Experiences */}
//           <div className="mb-6">
//             <label
//               htmlFor="experiences"
//               className="block mb-2 font-medium text-gray-900"
//             >
//               Experiences
//             </label>
//             <input
//               id="experiences"
//               type="text"
//               name="experiences"
//               placeholder="Enter gardening experiences"
//               className="w-full bg-white shadow-primary shadow focus:outline-primary rounded px-4 py-2"
//             />
//           </div>

//           {/* Total Shared Tips */}
//           <div className="mb-6">
//             <label
//               htmlFor="tips"
//               className="block mb-2 font-medium text-gray-900"
//             >
//               Total Shared Tips
//             </label>
//             <input
//               id="tips"
//               type="number"
//               name="tips"
//               placeholder="Enter number of tips shared"
//               className="w-full bg-white shadow-primary shadow focus:outline-primary rounded px-4 py-2"
//             />
//           </div>

//           {/* Image URL */}
//           <div className="mb-6 md:col-span-2">
//             <label
//               htmlFor="image"
//               className="block mb-2 font-medium text-gray-900"
//             >
//               Image
//             </label>
//             <input
//               id="image"
//               type="text"
//               name="image"
//               placeholder="Enter image URL"
//               className="w-full bg-white shadow-primary shadow focus:outline-primary rounded px-4 py-2"
//             />
//           </div>

//           <button
//             type="submit"
//             className="text-xl btn btn-primary md:col-span-2 text-black border rounded p-5"
//           >
//             Submit
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Gardeners;
