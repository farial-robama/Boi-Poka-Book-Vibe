import React from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const links = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "text-[#23BE0A] border-2 boder-[#23BE0A] rounded-md px-4 py-3"
            : "mx-4 my-3 font-bold"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/ListedBooks"
        className={({ isActive }) =>
          isActive
            ? "text-[#23BE0A] border-2 boder-[#23BE0A] rounded-md px-4 py-2"
            : "mx-4 my-3 font-bold"
        }
      >
        Listed Books
      </NavLink>
      <NavLink
        to="/PagesToRead"
        className={({ isActive }) =>
          isActive
            ? "text-[#23BE0A] border-2 boder-[#23BE0A] rounded-md px-4 py-2"
            : "mx-4 my-3 font-bold"
        }
      >
        Pages to Read
      </NavLink>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm flex items-center justify-between">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl font-bold">Book Vibe</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end flex-row hidden sm:flex gap-3.5">
        <a className="btn bg-[#23BE0A] text-white">Sign in</a>
        <a className="btn bg-[#59C6D2] text-white">Sign up</a>
      </div>

      <div className="sm:hidden flex justify-end dropdown dropdown-end">
        <button
          className="btn btn-ghost bg-[#23BE0A] text-white rounded-2xl"
          popoverTarget="popover-1"
          style={{ anchorName: "--anchor-1" } /* as React.CSSProperties */}
        >
          Menu
        </button>

        <ul
          className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
          popover="auto"
          id="popover-1"
          style={{ positionAnchor: "--anchor-1" } /* as React.CSSProperties */}
        >
          <li>
            <a>Sign in</a>
          </li>
          <li>
            <a>Sign up</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
