import banner2 from "../../../assets/images/banner2.jpg";

const CourseBanner = () => {
    return (
        <div
        className="hero h-[250px] "
        style={{ backgroundImage: `url(${banner2})` }}
      >
        <div className="hero-overlay bg-opacity-60 "></div>
        <div className="hero-content text-center text-white">
          <div>
            <p className="mb-5 pt-12 text-xl font-semibold">Online Learning From Everywhere</p>
            <p className=" mb-5 text-2xl lg:text-4xl font-bold">Are you ready to start learning?</p>
          </div>
        </div>
      </div>
    );
};

export default CourseBanner;