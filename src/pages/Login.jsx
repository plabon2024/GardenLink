import React, { useContext, useEffect, useState } from "react";

import {
  data,
  Navigate,
  NavLink,
  useLocation,
  useNavigate,
} from "react-router";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase/firebase.init";
import { toast } from "react-toastify";
import { AuthContext } from "../context/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const { user, emailSignIn, googleSignIn } = useContext(AuthContext);
  const location = useLocation();
  let navigate = useNavigate();
  const [error, setError] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordShown((prev) => !prev);
  };
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(() => {
        Swal.fire({
          title: "Login successful !",
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(`${location.state ? location.state : "/"}`);
     
      })
      .catch(() => {});
  };
  const handlesignin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    emailSignIn(email, password)
      .then(() => {
         Swal.fire({
          title: "Login successful !",
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(`${location.state ? location.state : "/"}`);
     
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleForgotPassword = () => {
    const { value: email } = Swal.fire({
      title: "Enter your registered email",
      input: "email",
      inputLabel: "Email",
      inputPlaceholder: "example@email.com",
      showCancelButton: true,
    });

    if (!email) {
      Swal.fire({
        title: "Email is required.",
        icon: "warning",
        timer: 1500,
        showConfirmButton: false,
      });
      return;
    }

    sendPasswordResetEmail(auth, email)
      .then(() => {
        Swal.fire({
          title: "Password reset sent",
          text: "Check your inbox for a reset link.",
          icon: "success",
          timer: 2000,
          showConfirmButton: false,
        });
      })
      .catch((error) => {
        Swal.fire({
          title: "Error",
          text: error.message,
          icon: "error",
          timer: 2000,
          showConfirmButton: false,
        });
      });
  };

  useEffect(() => {
    if (user && user.email) {
      navigate(location.state ? location.state : "/");
    }
  }, [user, navigate, location.state]);

  return (
    <section className="grid text-center text-info items-center p-8 bg-warning w-fit mx-auto my-10 rounded-sm ">
      <div className="w-full max-w-md mx-auto text-left">
        <h2 className="text-3xl font-bold mb-2 text-blue-800">Sign In</h2>
        <p className="mb-10 text-gray-600 text-[18px]">
          Enter your email and password to sign in
        </p>

        <form onSubmit={handlesignin}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 font-medium text-gray-900"
            >
              Your Email
            </label>
            <input
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
              className="block mb-2 font-medium text-gray-900"
            >
              Password
            </label>
            <div className="relative">
              <input
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
            className="w-full bg-gray-800 cursor-pointer text-white py-2 rounded mt-4"
          >
            Sign In
          </button>

          <div className="text-right mt-2" onClick={handleForgotPassword}>
            <a href="#" className="text-sm text-blue-700 font-medium">
              Forgot password?
            </a>
          </div>

          <button
            onClick={handleGoogleSignIn}
            type="button"
            className="w-full border cursor-pointer border-gray-400 py-2 rounded mt-6 flex items-center justify-center gap-2"
          >
            <img
              src="https://www.material-tailwind.com/logos/logo-google.png"
              alt="Google"
              className="h-6 w-6"
            />
            Sign in with Google
          </button>

          <p className="text-center text-gray-600 mt-4 text-sm">
            Not registered?{" "}
            <NavLink to="/signup" className="text-gray-900 font-medium">
              Create account
            </NavLink>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;
