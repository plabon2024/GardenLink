import React, { useContext, useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthProvider";
import toast from "daisyui/components/toast";
import { Tooltip } from "react-tooltip";
import Swal from "sweetalert2";

const Header = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const location = useLocation();
  let navigate = useNavigate();
  const handlesignOutUser = () => {
    signOutUser()
      .then(() => {
        navigate("/login");
        Swal.fire({
          title: "sign out successful !",
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch(() => {});
  };

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  return (
    <div className="navbar fixed top-0 left-0 w-full z-50">
      <div className="navbar backdrop-blur-2xl container mx-auto rounded-md shadow-md">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu gap-3 menu-sm dropdown-content bg-slate-300 rounded-box z-1 mt-3 w-52 p-2 shadow backdrop-blur-md"
            >
              <li>
                <NavLink
                  to="/"
                  className="btn hover:bg-neutral hover:text-primary"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/allgardeners"
                  className="btn hover:bg-neutral hover:text-primary"
                >
                  Explore Gardeners{" "}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/alltips"
                  className="btn hover:bg-neutral hover:text-primary"
                >
                  Browse Tips{" "}
                </NavLink>
              </li>

              {!user ? (
                <>
                  <li>
                    <NavLink
                      to="/signup"
                      className="btn hover:bg-neutral hover:text-primary"
                    >
                      Signup
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/login"
                      className="btn hover:bg-neutral hover:text-primary"
                    >
                      Login
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  {" "}
                  <li>
                    <NavLink
                      to="/tip"
                      className="btn hover:bg-neutral hover:text-primary"
                    >
                      {" "}
                      Share a Garden Tip
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/mytips"
                      className="btn hover:bg-neutral hover:text-primary"
                    >
                      My Tips{" "}
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
          <h1>
            <img src="/images/logo.png" alt="" className="h-15 w-auto" />
          </h1>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1 gap-2">
            <li>
              <NavLink
                to="/"
                className=" btn outline-none hover:bg-neutral hover:text-primary hover:border-none rounded-sm "
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/allgardeners"
                className=" btn outline-none hover:bg-neutral hover:text-primary hover:border-none rounded-sm"
              >
                Explore Gardeners{" "}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/alltips"
                className=" btn outline-none hover:bg-neutral hover:text-primary hover:border-none rounded-sm"
              >
                Browse Tips{" "}
              </NavLink>
            </li>
            {!user ? (
              <>
                <li>
                  <NavLink
                    to="/signup"
                    className=" btn  outline-none hover:bg-neutral hover:text-primary hover:border-none rounded-sm"
                  >
                    Signup{" "}
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/login"
                    className=" btn  outline-none hover:bg-neutral hover:text-primary hover:border-none rounded-sm"
                  >
                    Login
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink
                    to="/mytips"
                    className=" btn outline-none hover:bg-neutral hover:text-primary hover:border-none rounded-sm"
                  >
                    My Tips{" "}
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/tip"
                    className=" btn outline-none  hover:bg-neutral hover:text-primary hover:border-none rounded-sm"
                  >
                    {" "}
                    Share a Garden Tip
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
        <div className="navbar-end">
          {!user ? (
            <NavLink to="/login" className="btn btn-ghost">
              Login
            </NavLink>
          ) : (
            <div
              className="dropdown dropdown-left "
              data-tooltip-id="my-tooltip"
            >
              <div
                tabIndex={0}
                role="button"
             
              >
                <div className="avatar">
                  <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img
                      referrerPolicy="no-referrer"
                      alt="Profile Photo"
                      src={
                        user?.photoURL
                          ? user.photoURL
                          : "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                      }
                    />
                  </div>

                  <Tooltip
                    id="my-tooltip"
                    className="z-50 bg-slate-400 "
                    content={user.displayName}
                    place="bottom-start"
                  />
                </div>
              </div>

              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content  shadow w-fit"
              >
                <li className="btn outline-none border-none    rounded-sm">
                  <button onClick={handlesignOutUser}>Logout</button>
                </li>
              </ul>
            </div>
          )}

          <label className="swap swap-rotate mx-5">
            {/* this hidden checkbox controls the state */}
            <input
              type="checkbox"
              onChange={handleToggle}
              checked={theme === "light" ? false : true}
            />

            {/* sun icon */}
            <svg
              className="swap-on h-10 w-10 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            {/* moon icon */}
            <svg
              className="swap-off h-10 w-10 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Header;
