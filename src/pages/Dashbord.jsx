import React, { useContext, useEffect } from "react";
import { NavLink, Outlet } from "react-router";
import { AuthContext } from "../context/AuthProvider";

const MenuItems = ({ user, signOutUser }) => (
  <>
    <li>
      <NavLink to="/" className="btn outline-none hover:bg-neutral hover:text-primary hover:border-none rounded-sm">
        Home
      </NavLink>
    </li>
    <li>
      <NavLink to="/allgardeners" className="btn outline-none hover:bg-neutral hover:text-primary hover:border-none rounded-sm">
        Explore Gardeners
      </NavLink>
    </li>
    <li>
      <NavLink to="/alltips" className="btn outline-none hover:bg-neutral hover:text-primary hover:border-none rounded-sm">
        Browse Tips
      </NavLink>
    </li>
    {!user ? (
      <>
        <li>
          <NavLink to="/signup" className="btn outline-none hover:bg-neutral hover:text-primary hover:border-none rounded-sm">
            Signup
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" className="btn outline-none hover:bg-neutral hover:text-primary hover:border-none rounded-sm">
            Login
          </NavLink>
        </li>
      </>
    ) : (
      <>
        <li>
          <NavLink to="/mytips" className="btn outline-none hover:bg-neutral hover:text-primary hover:border-none rounded-sm">
            My Tips
          </NavLink>
        </li>
        <li>
          <NavLink to="/tip" className="btn outline-none hover:bg-neutral hover:text-primary hover:border-none rounded-sm">
            Share a Garden Tip
          </NavLink>
        </li>
        <li>
          <button
            onClick={signOutUser}
            className="btn outline-none hover:bg-red-500 hover:text-white hover:border-none rounded-sm"
          >
            Logout
          </button>
        </li>
      </>
    )}
  </>
);

const Dashboard = () => {
  const { user, signOutUser,theme } = useContext(AuthContext);
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <header className="navbar w-full bg-primary">
          <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-6 w-6 stroke-current">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </label>
          </div>
          <h1 className="mx-2 flex-1 px-2 font-bold text-2xl">Dashboard</h1>
          <div className="hidden flex-none lg:block">
            <ul className="menu menu-horizontal gap-2">
              <MenuItems user={user} signOutUser={signOutUser} />
            </ul>
          </div>
        </header>
      <main className="p-4 lg:p-6 bg-base-100 min-h-screen">
  <div className="max-w-6xl mx-auto">
    <div className="mb-6">
      <h2 className="text-3xl font-bold text-primary">Welcome to  Dashboard</h2>
      
    </div>
    
    {/* Dynamic Content Goes Here */}
    <div className="bg-white shadow-md rounded-xl p-6">
      <Outlet />
    </div>
  </div>
</main>

      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className="menu bg-base-200 min-h-full w-80 p-4">
          <MenuItems user={user} signOutUser={signOutUser} />
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
