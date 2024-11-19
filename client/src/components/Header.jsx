import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

export default function Header() {
  return (
    <header className="bg-transparent flex w-full px-8 py-4 bg-white shadow-md items-center justify-between">
      {/* Logo Section */}
      <div className="flex items-center gap-1">
        <Link to="/">
          <img
            src="src/components/phoenix-logo.png"
            alt="Logo"
            style={{ height: "30px", width: "30px" }}
          />
        </Link>
        <h1 className="text-3xl sm:inline font-fgsemibold tracking-wide text-[#F16128] hover:text-black transition-colors duration-300">PHOENIX</h1>
      </div>

      {/* Navigation Section */}
      <nav>
        <ul className="flex gap-3 text-sm font-nmregular text-gray-700">
          <Link to="/">
            <li className="  hover:underline">HOME</li>
          </Link>
          
          <Link to="/contactus">
            <li className="hidden sm:inline hover:underline">CONTACT US</li>
          </Link>
          <Link to="/resources">
            <li className=" hidden sm:inline hover:underline">WELFARE</li>
          </Link>
          <Link to="/careers">
            <li className=" hidden sm:inline hover:underline">CAREERS</li>
          </Link>
          <Link to="/ourservices">
            <li className="hidden sm:inline hover:underline">OUR SERVICES</li>
          </Link>
          <Link to="/sign-in">
            <li className="hidden sm:inline hover:underline text-black">SIGN IN</li>
          </Link>
        </ul>
      </nav>

      {/* Search Section */}
      <form className="bg-gray-100 p-2 rounded-lg flex items-center gap-2">
        <input
          type="text"
          placeholder="SEARCH"
          className="bg-transparent focus:outline-none w-24 sm:w-64 text-sm"
        />
        <FaSearch className="text-gray-600" />
      </form>
    </header>
  );
}
