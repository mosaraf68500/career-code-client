import React, { use } from "react";
import { NavLink } from "react-router";
import { AuthContex } from "../contex/AuthContex";

const Navbar = () => {
  const { user, signOutUser } = use(AuthContex);

  // Sign out handler
  const signOut = () => {
    signOutUser()
      .then(() => {
        console.log("Sign out successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Navigation links
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>

      {user && (
        <>
          <li>
            <NavLink to="/addjob">Add Job</NavLink>
          </li>
          <li>
            <NavLink to="/myPostedJobs">My Posted Jobs</NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm">
      {/* Navbar Start (Mobile Menu + Logo) */}
      <div className="navbar-start">
        {/* Dropdown for Mobile */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 p-2 shadow"
          >
            {links}
          </ul>
        </div>

        {/* Logo */}
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>

      {/* Navbar Center (For Desktop) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      {/* Navbar End (Auth Buttons) */}
      <div className="navbar-end gap-3">
        {user ? (
          <button onClick={signOut} className="btn">
            Sign Out
          </button>
        ) : (
          <>
            <NavLink className="btn" to="/register">
              Register
            </NavLink>
            <NavLink className="btn" to="/signIn">
              Sign In
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
