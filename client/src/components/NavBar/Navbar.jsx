import { Link } from "react-router-dom";

const Navbar = () => {
  const navOptions = (
    <div className="flex flex-col lg:flex-row font-semibold">
      <li className="hover:bg-white hover:text-black rounded-lg">
        <a>Item 1</a>
      </li>
      <li className="hover:bg-white hover:text-black rounded-lg">
        <a>Item 3</a>
      </li>
      <li className="hover:bg-white hover:text-black rounded-lg">
        <a>Login</a>
      </li>
    </div>
  );
  return (
    <div>
      <div className="navbar bg-base-100 fixed z-20 bg-transparent max-w-screen-xl text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <Link to="/" title="Home" className="ps-4 normal-case text-3xl">Eduverse</Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
