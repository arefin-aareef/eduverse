import { useLoaderData } from "react-router-dom";

const CourseDetails = () => {
  const course = useLoaderData();
  const {
    course_name,
    course_description,
    course_duration,
    course_content,
    category,
    instructor_name,
    instructor_email,
    rating,
    price,
    review,
    image,
    video,
  } = course;

  return (
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="hero-overlay bg-opacity-80"></div>

      <div className="hero-content text-white  pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/gvkqT_Uoahw?si=8wdP6YqacaY6BboK" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>

    <div>
    <h1 className="mb-5 text-3xl font-bold">{course_name}</h1>
          <p className="mb-5 text-xl">{course_description}</p>
          <p className="mb-5 text-lg">Content: {course_content}</p>
          <button className="btn btn-outline text-white">Enroll now</button>
    </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
