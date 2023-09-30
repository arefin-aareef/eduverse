import { Link } from "react-router-dom";

const Navbar = () => {
  const navOptions = (
    <div className="flex flex-col lg:flex-row font-semibold text-lg">
      <li className="hover:bg-white hover:text-black rounded-lg">
        <Link to="/courses">Courses</Link>
      </li>
      <li className="hover:bg-white hover:text-black rounded-lg">
        <Link>Item 3</Link>
      </li>
      <li className="hover:bg-white hover:text-black rounded-lg">
        <Link to='/login'>Login</Link>
      </li>
    </div>
  );
  return (
    <div>
      <div className="navbar fixed z-20 max-w-screen-2xl text-white">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-slate-400 rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <Link to="/" title="Home" className="ps-4 normal-case text-3xl font-bold">Eduverse</Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
