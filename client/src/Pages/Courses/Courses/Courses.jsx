import banner2 from "../../../assets/images/banner2.jpg";


const Courses = () => {
    return (
        <div
        className="hero h-[250px] "
        style={{ backgroundImage: `url(${banner2})` }}
      >
        <div className="hero-overlay bg-opacity-60 "></div>
        <div className="hero-content text-center text-white">
          <div className="max-w-md">
            <p className="mb-5 text-xl font-semibold">
              Online Learning From Everywhere
            </p>
            <h1 className=" mb-5 text-2xl lg:text-3xl font-bold">Are you ready to start learning?</h1>
          </div>
        </div>
      </div>
    );
};

export default Courses;

