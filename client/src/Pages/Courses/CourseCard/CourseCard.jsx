const CourseCard = ({ item }) => {
  const { course_name, course_description, image } = item;

  return (
    <div className="card card-compact  bg-base-100 shadow-xl">
      <figure>
        <img
          src={image}
          alt={course_name}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </figure>
      <div className="card-body bg-slate-700 text-white rounded-b-[15px]">
        <h2 className="card-title">{course_name}</h2>
        <p>{course_description}</p>
        <div className="card-actions justify-end">
          <button className="mt-2 btn hover:btn-outline ">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;