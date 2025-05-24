import React, { useContext, useState } from "react";

import { FiEye, FiEyeOff } from "react-icons/fi";
import { Navigate, NavLink, useNavigate } from "react-router";
import { updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase.init";
import { AuthContext } from "../context/AuthProvider";
import Swal from "sweetalert2";


const Singnup = () => {
  const navigate = useNavigate();

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordShown((prev) => !prev);
  };

  const [error, setError] = useState("");
  const { user, createAccount, googleSignIn, setUser } =
    useContext(AuthContext);

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(() => {
        navigate(location.state ? location.state : "/");
      })
      .catch(() => {
        
      });
  };

  const handlecreateaccount = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    if (name.length < 5) {
      setError("Name should be more then 5 character");
      return;
    } else {
      setError("");
    }
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    const passwordRegExp = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
    if (passwordRegExp.test(password) === false) {
      setError(
        "Password must have one lowercase, one uppercase, one digit and 8 characters or longer."
      );
      return;
    }

    createAccount(email, password)
      .then((result) => {
        const user = result.user;
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
             Swal.fire({
                      title: "Sign Up successful !",
                      icon: "success",
                      showConfirmButton: false,
                      timer: 1500,
                    });
            navigate(`${location.state ? location.state : "/"}`);
          })
          .catch(() => {
            setUser(user);
          });
      })
      .catch((error) => {
        setError(error.message);
        // ..
      });
  };
  if (user && user.email) {
    return <Navigate state={location.pathname} to="/" />;
  }
  return (
    <div>
      <section className="grid text-center text-info  items-center p-8 bg-warning w-fit mx-auto my-10 rounded-sm">
        <div className="w-full max-w-md mx-auto text-left">
          <h2 className="text-3xl font-bold mb-2 text-blue-800">Sign up</h2>
          <p className="mb-10 text-gray-600 text-[18px]">
            Enter your email and password to sign up
          </p>

          <form onSubmit={handlecreateaccount}>
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block mb-2 font-medium "
              >
                Your Name
              </label>
              <input
                required
                id="name"
                type="text"
                name="name"
                placeholder="name"
                className="w-full border border-gray-300 rounded px-4 py-2"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="photo"
                className="block mb-2 font-medium "
              >
                Photo URl <span className=" text-slate-400">(optional)</span>
              </label>
              <input
                id="photo"
                name="photo"
                type="text"
                className="w-full border border-gray-300 rounded px-4 py-2"
                placeholder="Photo URl"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block mb-2 font-medium "
              >
                Your Email
              </label>
              <input
                required
                id="email"
                type="email"
                name="email"
                placeholder="name@mail.com"
                className="w-full border border-gray-300 rounded px-4 py-2"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="password"
                className="block mb-2 font-medium "
              >
                Password
              </label>
              <div className="relative">
                <input
                  required
                  id="password"
                  name="password"
                  type={passwordShown ? "text" : "password"}
                  placeholder="********"
                  className="w-full border border-gray-300 rounded px-4 py-2 pr-10"
                />
                <div
                  onClick={togglePasswordVisibility}
                  className="absolute right-3 top-2.5 cursor-pointer text-xl text-gray-600"
                >
                  {passwordShown ? <FiEyeOff /> : <FiEye />}
                </div>
              </div>
            </div>
            <p className="text-sm text-red-500">{error}</p>
            <button
              type="submit"
              className="w-full bg-gray-800 text-white py-2 rounded mt-4"
            >
              Sign Up
            </button>

            <button
              onClick={handleGoogleSignIn}
              type="button"
              className="w-full border  cursor-pointer  py-2 rounded mt-6 flex items-center justify-center gap-2"
            >
              <img
                src="https://www.material-tailwind.com/logos/logo-google.png"
                alt="Google"
                className="h-6 w-6"
              />
              Get start with Google
            </button>

            <p className="text-center text-gray-600 mt-4 text-sm">
              Already registered?{" "}
              <NavLink to="/login" className=" font-medium">
                Log in
              </NavLink>
            </p>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Singnup;
