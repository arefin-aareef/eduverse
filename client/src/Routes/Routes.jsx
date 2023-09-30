import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import CourseDetails from "../Pages/Courses/CourseDetails/CourseDetails";
import Courses from "../Pages/Courses/Courses/Courses";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";

 export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: 'courses',
            element: <Courses></Courses>
        },
        {
            path: 'login',
            element: <Login></Login>
        },
        {
            path: 'signup',
            element: <Signup></Signup>
        },
        {
            path: 'courses/:id',
            element: <CourseDetails></CourseDetails>,
            loader: ({params}) => fetch(`http://localhost:5000/courses/${params.id}`)
        }
    ]
  },
]);
