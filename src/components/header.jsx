import { TbSearch } from "react-icons/tb";
import "../components/weather_style.css";

const Header = ({ search, toggleSidebar }) => {
  return (
    <header className="relative flex justify-between items-center header">
      <div className="flex items-center">
        <h1 className="text-4xl font-bold text-[#fbfbfb] lg:ml-0">
          FRANK<span className="text-[#000000]">LARC</span>
        </h1>
      </div>
      <div className="lg:hidden absolute right-0 top-0">
        <button
          className="text-5xl text-white focus:outline-none p-2"
          onClick={toggleSidebar}
        >
          &#9776;
        </button>
      </div>
      <div className="hidden lg:flex items-center space-x-1 ml-5">
        <input type="text" className="cityInput" placeholder="Check weather" />
        <TbSearch className="search_icon" onClick={search} />
      </div>
      <nav className="hidden lg:flex space-x-8">
        <a
          href="#tools"
          className="text-[#000000] font-semibold hover:rounded-full px-4 py-1 hover:bg-[#efefef]"
        >
          Shop
        </a>
        <a
          href="#pricing"
          className="text-[#000000] font-semibold hover:rounded-full px-4 py-1 hover:bg-[#efefef]"
        >
          Pages
        </a>
        <a
          href="#support"
          className="text-[#000000] font-semibold hover:rounded-full px-4 py-1 hover:bg-[#efefef]"
        >
          Category
        </a>
        <button className="bg-gray-50 text-[#000000] font-semibold border-none border-[#435933] rounded-full px-4 py-1 hover:bg-gray-100 transition">
          Signup
        </button>
      </nav>
    </header>
  );
};

export default Header;
