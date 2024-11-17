import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

export default function Header() {
  return (
    <header className="bg-transparent flex w-full px-8 py-4 bg-white shadow-md items-center justify-between">
      {/* Logo Section */}
      <div className="flex items-center gap-4">
        <Link to="/">
          <img
            src="src/components/phoenix-logo-1.png"
            alt="Logo"
            style={{ height: "60px", width: "60px" }}
          />
        </Link>
        <h1 className="text-lg font-fgsemibold tracking-wide text-black">PHOENIX</h1>
      </div>

      {/* Navigation Section */}
      <nav>
        <ul className="flex gap-5 text-sm font-nmregular text-gray-700">
          <Link to="/">
            <li className="hover:underline">HOME</li>
          </Link>
          <Link to="/aboutus">
            <li className="hover:underline">ABOUT US</li>
          </Link>
          <Link to="/contactus">
            <li className="hover:underline">CONTACT US</li>
          </Link>
          <Link to="/resources">
            <li className="hover:underline">RESOURCES</li>
          </Link>
          <Link to="/careers">
            <li className="hover:underline">CAREERS</li>
          </Link>
          <Link to="/ourservices">
            <li className="hover:underline">OUR SERVICES</li>
          </Link>
          <Link to="/sign-in">
            <li className="hover:underline text-black">SIGN IN</li>
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
