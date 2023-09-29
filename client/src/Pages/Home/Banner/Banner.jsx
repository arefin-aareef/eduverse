import img1 from "../../../assets/images/banner.jpg";

const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: `url(${img1})` }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Improve Your Skills</h1>
          <p className="mb-5">
            Learn something new every day and get inspired by the diversity of online learning
          </p>
          <button className="btn btn-outline text-white hover:bg-white hover:text-black">Sign Up Now</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
