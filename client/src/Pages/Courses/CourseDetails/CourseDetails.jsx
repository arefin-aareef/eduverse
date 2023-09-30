
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {

    const course = useLoaderData();
    const {course_name} = course

    return (
        <div className='pt-20'>
            <p>{course_name}</p>
        </div>
    );
};

export default CourseDetails;