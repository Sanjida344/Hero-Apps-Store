import React from "react";

const Button = ({ children, onClick, type = "button", className = "" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition duration-200 ${className} cursor-pointer btn`}
    >
      {children}
    </button>
  );
};

export default Button;