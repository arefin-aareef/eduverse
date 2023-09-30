import { Link } from "react-router-dom";
import banner1 from "../../../assets/images/banner1.jpg";

const Banner = () => {
  return (
    <div
      className="hero min-h-screen "
      style={{ backgroundImage: `url(${banner1})` }}
    >
      <div className="hero-overlay bg-opacity-60 "></div>
      <div className="hero-content text-center text-white">
        <div className="max-w-md">
          <h1 className=" mb-5 text-4xl lg:text-5xl font-bold">Improve Your Skills</h1>
          <p className="mb-5 text-xl">
            Learn something new every day and get inspired by the diversity of online learning
          </p>
          <Link to='/signup'><button className="btn btn-outline text-white hover:bg-white hover:text-black">Sign Up Now</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
