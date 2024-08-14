import React from "react";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-64 bg-gray-800 text-white p-5 shadow-lg transform lg:hidden ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 ease-in-out`}
    >
      <button
        className="text-2xl mb-4 focus:outline-none"
        onClick={toggleSidebar}
      >
        &times;
      </button>
      <ul className="space-y-4">
        <li>
          <a href="#pricing">Pages</a>
        </li>
        <li>
          <a href="#support">Shop</a>
        </li>
        <li>
          <a href="#tools">Category</a>
        </li>
        <li>
          <a href="#login">Signup</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
