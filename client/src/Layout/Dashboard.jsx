import { NavLink, Outlet } from "react-router-dom";
import { BiHomeAlt2, BiSolidHome } from 'react-icons/bi';
import { AiOutlineHeart, AiOutlineBars } from 'react-icons/ai';
import { SiGotomeeting } from 'react-icons/si';

const Dashboard = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center  text-white">
      <label
            htmlFor="my-drawer-2"
            className="btn hover:btn-neutral ms-auto my-2 me-2 drawer-button mb-4 lg:hidden"
          >
            <AiOutlineBars />
          </label>
            <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-slate-300 text-base-content">
          <li><NavLink to="/dashboard/userhome"><BiHomeAlt2 /> User Home</NavLink></li>
          <li><NavLink to="/dashboard/myfavorite"><AiOutlineHeart />My Favorites</NavLink></li>
          <div className="divider"></div>
          <li><NavLink to="/"><BiSolidHome />Home</NavLink></li>
          <li><NavLink to="/courses"><SiGotomeeting />Courses</NavLink></li>

        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
