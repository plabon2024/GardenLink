import React, { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors

    if (!email) return;
    if (!email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }

    fetch(`${import.meta.env.VITE_baseurl}/email`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          setSubmitted(true);
          setEmail("");
        } else {
          setError(data.message || "Subscription failed.");
        }
      })
      .catch((err) => {
        console.error(err);
        setError("Something went wrong. Please try again.");
      });
  };

  return (
    <div className="bg-green-100 flex flex-col lg:flex-row justify-center items-center py-12 px-4 md:px-16 rounded-xl shadow-md mt-20 mx-4 md:mx-auto container">
      <div className="max-w-xl">
        <h2 className="text-3xl md:text-4xl font-bold text-green-800 text-center lg:text-left">
          🌿 Join Our Garden Community!
        </h2>
        <p className="text-gray-700 text-center lg:text-left mt-3">
          Subscribe to our newsletter to get seasonal gardening tips, plant care
          guides, and community updates delivered straight to your inbox.
        </p>
        <form
          onSubmit={handleSubscribe}
          className="mt-6 flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4"
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="input input-bordered w-full sm:w-[300px] focus:outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="btn btn-primary px-6">
            Subscribe
          </button>
        </form>

        {submitted && (
          <div className="text-green-700 mt-4 font-medium text-center lg:text-left">
            ✅ Thank you for subscribing!
          </div>
        )}
        {error && (
          <div className="text-red-500 mt-4 font-medium text-center lg:text-left">
            ❌ {error}
          </div>
        )}
      </div>

      <div className="mt-10 lg:mt-0 lg:ml-10">
        <img
          src="/People taking care of plants-bro.png"
          alt="People gardening"
          className="max-w-sm w-full"
        />
      </div>
    </div>
  );
};

export default Newsletter;
