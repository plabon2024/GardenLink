import React, { useContext } from "react";
import { NavLink, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthProvider";
import toast from "daisyui/components/toast";

const Header = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const location = useLocation();
  let navigate = useNavigate();
  const handlesignOutUser = () => {
    signOutUser()
      .then(() => {
        navigate("/login");
        toast.success("user signout successfully");
      })
      .catch(() => {});
  };
  return (
    <div>
      <div className="navbar bg-primary shadow-sm ">
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
              className="menu gap-3 menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-white  backdrop-blur-md"
            >
              <li className="btn">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="btn">
                <NavLink to="/profile">Explore Gardeners </NavLink>
              </li>
              <li className="btn">
                <NavLink to="/tip"> Share a Garden Tip</NavLink>
              </li>
              <li className="btn">
                <NavLink to="/profile">My Tips </NavLink>
              </li>
              <li className="btn">
                <NavLink to="/login">Login/Signup </NavLink>
              </li>
          
            </ul>
          </div>
          <h1>
            <img src="/images/logo.png" alt="" className="h-15 w-auto" />
          </h1>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1 gap-2">
            <li className=" btn outline-none hover:bg-black hover:text-white hover:border-none active:bg-black active:text-white rounded-sm ">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className=" btn outline-none hover:bg-black hover:text-white hover:border-none active:bg-black active:text-white rounded-sm">
              <NavLink to="/profile">Explore Gardeners </NavLink>
            </li>
            <li className=" btn outline-none hover:bg-black hover:text-white hover:border-none active:bg-black active:text-white rounded-sm">
              <NavLink to="/profile">My Tips </NavLink>
            </li>
            <li className=" btn outline-none  hover:bg-black hover:text-white hover:border-none active:bg-black active:text-white rounded-sm">
              <NavLink to="/tip"> Share a Garden Tip</NavLink>
            </li>
            <li className=" btn  outline-none hover:bg-black hover:text-white hover:border-none active:bg-black active:text-white rounded-sm">
              <NavLink to="/login">Login/Signup </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {!user ? (
            <NavLink to="/login" className="btn btn-ghost">
              Login
            </NavLink>
          ) : (
            <div
              className="dropdown dropdown-left tooltip tooltip-bottom "
              data-tip="hello"
            >
              <div className="tooltip-content z-20">
                <div className=" font-black">{user.displayName}</div>
              </div>
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    referrerPolicy="no-referrer"
                    alt="profilePhoto"
                    src={
                      user.photoURL
                        ? user.photoURL
                        : "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    }
                  />
                </div>
              </div>

              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content z-10   shadow bg-base-100 rounded-box w-fit"
              >
                <li className=" btn outlineblac hover:bg-black hover:text-white hover:border-none active:bg-black active:text-white rounded-sm">
                  <NavLink onClick={handlesignOutUser}>Logout</NavLink>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
