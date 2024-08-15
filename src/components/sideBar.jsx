import { SiCloudflarepages } from "react-icons/si";
import { FiShoppingBag } from "react-icons/fi";
import { TbCategory } from "react-icons/tb";
import { SiGnuprivacyguard } from "react-icons/si";
const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-64 bg-gray-800 text-white p-5 shadow-lg transform lg:hidden ${isOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out`}
       >
      <div className=" flex justify-between items-center">
        <h1 className="text-2xl  font-bold  tracking-widest text-[#94a8d6]">
          FRANK<span className="text-white">LARC</span>
        </h1>
        <button
          className="text-2xl mb-4 focus:outline-none"
          onClick={toggleSidebar}
        >
          x
        </button>
      </div>
      <ul className="space-y-4">
        <li>
          <a href="#pricing" className="flex justify-between gap-9">
            Pages
            <div className="flex justify-center items-center w-9 h-9 rounded-full bg-gray-600">
              <SiCloudflarepages className="text-sm" />
            </div>
          </a>
        </li>
        <li>
          <a href="#pricing" className="flex justify-between gap-9">
            Shop
            <div className="flex justify-center items-center w-9 h-9 rounded-full bg-gray-600">
              <FiShoppingBag className="text-sm" />
            </div>
          </a>
        </li>
        <li>
          <a href="#pricing" className="flex justify-between gap-9">
            Category
            <div className="flex justify-center items-center w-9 h-9 rounded-full bg-gray-600">
              <TbCategory className="text-sm" />
            </div>
          </a>
        </li>
        <li>
          <a href="#pricing" className="flex justify-between gap-9">
            Signup
            <div className="flex justify-center items-center w-9 h-9 rounded-full bg-gray-600">
              <SiGnuprivacyguard className="text-sm" />
            </div>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
