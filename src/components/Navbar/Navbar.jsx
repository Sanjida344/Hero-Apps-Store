import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import { FaGithub } from "react-icons/fa";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const links = [
    { name: "Home", path: "/" },
    { name: "Apps", path: "/apps" },
    { name: "Installation", path: "/installation" },
  ];

  //navigation to home
  const navigate = useNavigate();

  return (
    <div className="navbar px-4 md:px-8 container mx-auto">
      {/* Navbar Start */}
      <div className="navbar-start">
        {/* Mobile Menu */}
        <div className="dropdown md:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
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
            className=" menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow z-10"
          >
            {links.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    isActive
                      ? "font-semibold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent"
                      : "font-medium  hover:text-[#632EE3]"
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Brand Name */}
        <div
          onClick={() => navigate("/")}
          className=" items-center cursor-pointer hidden md:flex"
        >
          <img className="  md:w-8 lg:w-12" src={logo} alt="Logo Img" />
          <NavLink className=" lg:text-2xl font-bold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
            Hero Store
          </NavLink>
        </div>
      </div>

      {/* Navbar Center (Desktop) */}
      <div className="navbar-center hidden md:flex">
        <ul className=" menu-horizontal px-1 gap-4">
          {links.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  isActive
                    ? "bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-bold underline"
                    : "font-medium text-gray-700 hover:text-[#632EE3] transition "
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end">
        <Button
          onClick={() => window.open("https://github.com/Sanjida344", "_blank", "noopener,noreferrer")}
          className="flex items-center gap-2"
        >
          <FaGithub className="text-lg" />
          Contribute
        </Button>
      </div>
    </div>
  );
};

export default Navbar;