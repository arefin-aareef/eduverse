import { Link, Outlet } from "react-router-dom";
import { BiHomeAlt2, BiSolidHome } from 'react-icons/bi';
import { AiOutlineHeart } from 'react-icons/ai';
import { SiGotomeeting } from 'react-icons/si';

const Dashboard = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center  text-white">
          <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-slate-300 text-base-content">
          <li><Link to="/dashboard/userhome"><BiHomeAlt2 /> User Home</Link></li>
          <li><Link to="/dashboard/myfavorite"><AiOutlineHeart />My Favorites</Link></li>
          <div className="divider"></div>
          <li><Link to="/"><BiSolidHome />Home</Link></li>
          <li><Link to="/courses"><SiGotomeeting />Courses</Link></li>

        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
