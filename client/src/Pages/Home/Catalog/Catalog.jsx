import { Link } from "react-router-dom";
import CourseContent from "../../Courses/CourseContent/CourseContent";


const Catalog = () => {
    return (
        <div>
            <div className="mx-4 text-center mb-6 mt-10 text-white">
            <p className=" mb-3 text-2xl lg:text-4xl font-bold">Choose Your Favourite Course</p>
            <p className=" text-lg font-semibold">Select From Our List of Professional Courses</p>
            </div>
            <CourseContent limit={3} shouldShuffle={true}></CourseContent>
            <div className="pb-6 flex justify-center"><Link to="/courses"><button className="mt-2 btn hover:btn-outline ">View All Available Courses</button></Link></div>

        </div>
    );
};

export default Catalog;