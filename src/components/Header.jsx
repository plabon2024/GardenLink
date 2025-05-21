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
              <li >
                <NavLink to="/" className="btn hover:bg-black hover:text-white">Home</NavLink>
              </li>
              <li >
                <NavLink to="/allgardeners" className="btn hover:bg-black hover:text-white">Explore Gardeners </NavLink>
              </li>
              <li >
                <NavLink to="/alltips" className="btn hover:bg-black hover:text-white">Browse Tips </NavLink>
              </li>
              <li >
                <NavLink to="/tip" className="btn hover:bg-black hover:text-white"> Share a Garden Tip</NavLink>
              </li>
              <li >
                <NavLink to="/mytips" className="btn hover:bg-black hover:text-white">My Tips </NavLink>
              </li>
              <li >
                <NavLink to="/login" className="btn hover:bg-black hover:text-white">Login/Signup </NavLink>
              </li>
            </ul>
          </div>
          <h1>
            <img src="/images/logo.png" alt="" className="h-15 w-auto" />
          </h1>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1 gap-2">
            <li >
              <NavLink to="/"className=" btn outline-none hover:bg-black hover:text-white hover:border-none rounded-sm ">Home</NavLink>
            </li>
            <li >
              <NavLink to="/allgardeners"className=" btn outline-none hover:bg-black hover:text-white hover:border-none rounded-sm">Explore Gardeners </NavLink>
            </li>
            <li >
              <NavLink to="/alltips"className=" btn outline-none hover:bg-black hover:text-white hover:border-none rounded-sm">Browse Tips </NavLink>
            </li>
            {!user ? (   <li >
              <NavLink to="/login"className=" btn  outline-none hover:bg-black hover:text-white hover:border-none rounded-sm">Login/Signup </NavLink>
            </li>):(<>
            <li >
              <NavLink to="/mytips"className=" btn outline-none hover:bg-black hover:text-white hover:border-none rounded-sm">My Tips </NavLink>
            </li>
            <li >
              <NavLink to="/tip"className=" btn outline-none  hover:bg-black hover:text-white hover:border-none rounded-sm"> Share a Garden Tip</NavLink>
            </li>
            </> )}
           
         
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
                  <button onClick={handlesignOutUser}>Logout</button>
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
