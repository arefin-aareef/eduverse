import { useLoaderData } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

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
    syllabus,
    image,
    video,
  } = course;

  return (
    <div
      className="hero min-h-screen "
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="hero-overlay bg-opacity-80"></div>

      <div className="hero-content text-white  pt-16 flex flex-col">
        <h1 className="mb-2 text-3xl font-bold">{course_name}</h1>
        <p className="mb-2 text-xl">{course_description}</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="mx-auto">
            <iframe
              className="w-[340px] sm:w-[490px] xl:w-[560px]"
              height="315"
              src={video}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>

          <div className="my-auto">
            <p className="mb-2 text-lg font-semibold text-neutral-content">
              <span className="font-extrabold text-white">Content:</span> {course_content}
            </p>
            <p className="mb-2 text-lg font-semibold text-neutral-content">
              <span className="font-extrabold text-white">Duration:</span> {course_duration}
            </p>
            <p className="mb-2 text-lg font-semibold text-neutral-content">
              <span className="font-extrabold text-white">Category:</span> {category}
            </p>
            <p className="mb-2 text-lg font-semibold text-neutral-content">
              <span className="font-extrabold text-white">Instructor:</span> {instructor_name}
            </p>
            <p className="mb-2 text-lg font-semibold text-neutral-content">
              <span className="font-extrabold text-white">Email:</span> {instructor_email}
            </p>
            <p className="mb-2 text-lg font-semibold text-neutral-content">
              <span className="font-extrabold text-white">Price:</span> ${price}
            </p>
            <p className="mb-2 text-lg font-semibold text-neutral-content">
              <span className="font-extrabold text-white">Ratings:</span> {rating}
            </p>

            <div className="mb-2 text-lg font-semibold text-neutral-content flex flex-col sm:flex-row ">
              <p className="font-extrabold text-white me-2">Syllabus:</p> 
              <div className=" w-[340px] sm:w-[400px]">
                    <Swiper
                        navigation={true}
                        modules={[Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                        <div className="flex items-center justify-center">
                            <p>{syllabus[0]}</p>
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="flex items-center justify-center">
                            <p>{syllabus[1]}</p>
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="flex items-center justify-center">
                            <p>{syllabus[2]}</p>
                        </div>
                        </SwiperSlide>
                    </Swiper>
              </div>
            </div>

          </div>
        </div>

        <div className="my-2 text-lg font-semibold text-neutral-content  w-[340px] sm:w-[500px]">
              <p className="mb-2 font-bold text-white text-3xl text-center">Reviews</p>

              <Swiper
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className="flex items-center justify-center">
                    <p>{review[0]}</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex items-center justify-center">
                    <p>{review[1]}</p>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>

            <button className="btn btn-outline w-2/4 hover:bg-white hover:text-black text-white">
              Enroll now
            </button>


      </div>
    </div>
  );
};

export default CourseDetails;
