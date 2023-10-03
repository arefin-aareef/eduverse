import useCourses from "../../../hooks/useCourses";
import CourseCard from "../CourseCard/CourseCard";

const CourseContent = ({ limit, shouldShuffle }) => {
  const [courses] = useCourses();
  console.log(courses);

  const shuffledCourses = shouldShuffle
  ? courses.sort(() => Math.random() - 0.5)
  : courses;


  const limitedCourses = limit ? shuffledCourses.slice(0, limit) : courses;

  return (
    <div className=" bg-slate-500  py-6 px-2 md:px-6 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 place-items-center">
      {limitedCourses.map((item) => (
        <CourseCard key={item._id} item={item}></CourseCard>
      ))}
    </div>
  );
};

export default CourseContent;
