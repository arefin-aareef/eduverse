import useCourses from "../../../hooks/useCourses";
import CourseBanner from "../CourseBanner/CourseBanner";
import CourseCard from "../CourseCard/CourseCard";

const Courses = () => {
  const [courses] = useCourses();
  console.log(courses);

  return (
    <div className="">
      <CourseBanner></CourseBanner>

      <div className=" bg-slate-500  py-8 px-2 md:px-0 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-0 gap-y-8 place-items-center">
        {courses.map((item) => (
          <CourseCard key={item._id} item={item}></CourseCard>
        ))}
      </div>
    </div>
  );
};

export default Courses;
